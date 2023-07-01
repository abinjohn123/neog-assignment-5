import { useEffect, useState } from 'react';

import { useAuthContext } from '../context/AuthContext';
import { useAppContext } from '../context/AppContext';

const useUser = () => {
  const [isLoading, setIsLoading] = useState([]);
  const [fetchedUser, setFetchedUser] = useState({});
  const { token, setLoggedInUser } = useAuthContext();
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

  useEffect(fetchAllUsers, []);

  return {
    allUsers,
    fetchedUser,
    isLoading,
    fetchAllUsers,
    fetchSingleUser,
    editUser,
  };
};

export default useUser;
