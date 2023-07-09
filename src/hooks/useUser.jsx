import { useEffect, useState } from 'react';

import { useAuthContext } from '../context/AuthContext';
import { useAppContext } from '../context/AppContext';
import { setStateAfterDelay } from '../utils';

import { noop } from '../utils';

const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fetchedUser, setFetchedUser] = useState({});
  const { token, setLoggedInUser, setBookmarks } = useAuthContext();
  const { allUsers, setAllUsers } = useAppContext();

  const fetchAllUsers = () => {
    setIsLoading(true);

    fetch('/api/users/')
      .then((res) => res.json())
      .then((data) => setAllUsers(data.users))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const fetchSingleUser = (userId) => {
    setIsLoading(true);

    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setFetchedUser({ ...data.user }))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const editUser = (userData) => {
    fetch(`/api/users/edit`, {
      method: 'POST',
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ userData }),
    })
      .then((res) => res.json())
      .then((data) => {
        // fetchSingleUser(data.user._id);
        setLoggedInUser({ ...data.user });
        fetchAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const getBookMarks = () => {
    fetch('/api/users/bookmark/', {
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookmarks(data.bookmarks);
      })
      .catch((err) => console.log(err));
  };
  const addToBookMarks = (postId) => {
    fetch(`/api/users/bookmark/${postId}`, {
      method: 'POST',
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then(getBookMarks)
      .catch((err) => console.log(err));
  };

  const removeFromBookMarks = (postId) => {
    fetch(`/api/users/remove-bookmark/${postId}`, {
      method: 'POST',
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then(getBookMarks)
      .catch((err) => console.log(err));
  };

  const followUser = (userId, successCallback = noop) => {
    setIsSubmitting(true);
    fetch(`/api/users/follow/${userId}`, {
      method: 'POST',
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        fetchAllUsers();
        successCallback();
      })
      .catch((err) => console.log(err))
      .finally(() => setStateAfterDelay(() => setIsSubmitting(false)));
  };

  const unfollowUser = (userId, successCallback = noop) => {
    setIsSubmitting(true);

    fetch(`/api/users/unfollow/${userId}`, {
      method: 'POST',
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        fetchAllUsers();
        successCallback();
      })
      .catch((err) => console.log(err))
      .finally(() => setStateAfterDelay(() => setIsSubmitting(false)));
  };

  useEffect(fetchAllUsers, []);

  return {
    allUsers,
    fetchedUser,
    isLoading,
    isSubmitting,
    fetchAllUsers,
    fetchSingleUser,
    editUser,
    getBookMarks,
    addToBookMarks,
    removeFromBookMarks,
    followUser,
    unfollowUser,
  };
};

export default useUser;
