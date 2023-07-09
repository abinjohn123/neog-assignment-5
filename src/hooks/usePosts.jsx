import { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { useAuthContext } from '../context/AuthContext';

import { setStateAfterDelay } from '../utils';

const usePosts = () => {
  const { allPosts, setAllPosts } = useAppContext();
  const { token } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [singlePost, setSinglePost] = useState({});

  const fetchPosts = () => {
    setIsLoading(true);

    fetch('/api/posts/')
      .then((res) => res.json())
      .then((data) => setAllPosts(data.posts))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const fetchSinglePost = (postId) => {
    setIsLoading(true);

    fetch(`/api/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setSinglePost(data.post))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const createNewPost = (postData, SuccessCallback) => {
    setIsSubmitting(true);
    fetch(`/api/posts`, {
      method: 'POST',
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ postData }),
    })
      .then((res) => res.json())
      .then((data) => {
        fetchPosts();
        SuccessCallback();
      })
      .catch((err) => console.log(err))
      .finally(() => setStateAfterDelay(() => setIsSubmitting(false)));
  };

  const likePost = (postId) => {
    fetch(`/api/posts/like/${postId}`, {
      method: 'POST',
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => fetchPosts())
      .catch((err) => console.log(err));
  };

  const unlikePost = (postId) => {
    fetch(`/api/posts/dislike/${postId}`, {
      method: 'POST',
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => fetchPosts())
      .catch((err) => console.log(err));
  };

  const editPost = (postId, postData, SuccessCallback) => {
    setIsSubmitting(true);
    fetch(`/api/posts/edit/${postId}`, {
      method: 'POST',
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ postData }),
    })
      .then((res) => res.json())
      .then((data) => {
        fetchPosts();
        SuccessCallback();
      })
      .catch((err) => console.log(err))
      .finally(() => setStateAfterDelay(() => setIsSubmitting(false)));
  };

  const deletePost = (postId, SuccessCallback) => {
    setIsSubmitting(true);
    fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        fetchPosts();
        SuccessCallback();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsSubmitting(false));
  };

  useEffect(fetchPosts, []);

  return {
    allPosts,
    singlePost,
    setAllPosts,
    isLoading,
    isSubmitting,
    fetchPosts,
    fetchSinglePost,
    createNewPost,
    likePost,
    unlikePost,
    editPost,
    deletePost,
  };
};

export default usePosts;
