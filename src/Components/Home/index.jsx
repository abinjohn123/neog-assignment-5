import { useEffect } from 'react';

import usePosts from '../../hooks/usePosts';
import useUser from '../../hooks/useUser';
import { Post } from './Post';

import './feed.scss';

/*
  This is the main posts feed.
  All posts will be displayed here
*/
const Home = () => {
  const { allPosts, isLoading: isPostsLoading, fetchPosts } = usePosts();
  const { allUsers, isLoading: isUsersLoading, fetchUsers } = useUser();

  useEffect(() => {
    fetchPosts();
    fetchUsers();
  }, []);

  if (isPostsLoading || allPosts.length === 0) return <p>Loading...</p>;
  return (
    <div className="feed">
      {allPosts.map((post) => {
        const postAuthor =
          allUsers.find((user) => user.username === post.username) ?? {};
        return <Post post={post} key={post._id} author={postAuthor} />;
      })}
    </div>
  );
};

export default Home;
