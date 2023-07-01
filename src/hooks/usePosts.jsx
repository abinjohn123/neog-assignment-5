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
  return {
    allPosts,
    setAllPosts,
    isLoading,
    fetchPosts,
    createNewPost,
  };
};

export default usePosts;
