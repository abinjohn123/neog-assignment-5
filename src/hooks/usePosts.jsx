import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useAuthContext } from '../context/AuthContext';

const usePosts = () => {
  const { allPosts, setAllPosts } = useAppContext();
  const { token } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = () => {
    setIsLoading(true);

    fetch('/api/posts/')
      .then((res) => res.json())
      .then((data) => setAllPosts(data.posts))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const createNewPost = (postData, SuccessCallback) => {
    setIsLoading(true);
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
      .finally(() => setIsLoading(false));
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

  return {
    allPosts,
    setAllPosts,
    isLoading,
    fetchPosts,
    createNewPost,
    likePost,
    unlikePost,
  };
};

export default usePosts;
