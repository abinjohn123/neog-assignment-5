import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useAuthContext } from '../context/AuthContext';

const usePosts = () => {
  const { allPosts, setAllPosts } = useAppContext();
  const { token } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
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

  const editPost = (postId, postData, SuccessCallback) => {
    setIsLoading(true);
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
      .finally(() => setIsLoading(false));
  };

  const deletePost = (postId) => {
    fetch(`/api/posts/delete/${postId}`, {
      method: 'DELETE',
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
    singlePost,
    setAllPosts,
    isLoading,
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
