import { useState } from 'react';

const usePosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const fetchPosts = () => {
    setIsLoading(true);

    fetch('api/posts/')
      .then((res) => res.json())
      .then((data) => setAllPosts(data.posts))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return {
    allPosts,
    setAllPosts,
    isLoading,
    fetchPosts,
  };
};

export default usePosts;
