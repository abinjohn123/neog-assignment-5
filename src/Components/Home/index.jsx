import { useState, useEffect } from 'react';

import usePosts from '../../hooks/usePosts';
import useUser from '../../hooks/useUser';
import { Post } from './Post/Post';
import Sidebar from '../Sidebar';
import { NewPost } from './Post/NewPost';

import './feed.scss';

const SORT_KEYS = {
  LATEST: 0,
  TRENDING: 1,
};

/*
  This is the main posts feed.
  All posts will be displayed here
*/
const Home = () => {
  const {
    allPosts,
    setAllPosts,
    isLoading: isPostsLoading,
    fetchPosts,
  } = usePosts();
  const { allUsers, isLoading: isUsersLoading } = useUser();
  const [sort, setSort] = useState(SORT_KEYS.LATEST);
  const [sortedPosts, setSortedPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (isPostsLoading || allPosts.length === 0) return;

    if (sort === SORT_KEYS.TRENDING)
      setSortedPosts(
        [...allPosts].sort((a, b) => b.likes?.likeCount - a.likes?.likeCount)
      );
    else if (sort === SORT_KEYS.LATEST)
      setSortedPosts(
        [...allPosts].sort((a, b) => {
          const date1 = new Date(a.createdAt);
          const date2 = new Date(b.createdAt);
          return date2 - date1;
        })
      );
  }, [allPosts, sort]);

  if (isPostsLoading || allPosts.length === 0) return <p>Loading...</p>;
  return (
    <div className="layout">
      <div className="feed">
        <NewPost />
        <div className="sort-card">
          <h3>Posts</h3>
          <div className="sort-controls">
            <button
              onClick={() => setSort(SORT_KEYS.TRENDING)}
              className={sort === SORT_KEYS.TRENDING ? 'active' : ''}
            >
              Trending
            </button>
            <button
              onClick={() => setSort(SORT_KEYS.LATEST)}
              className={sort === SORT_KEYS.LATEST ? 'active' : ''}
            >
              Latest
            </button>
          </div>
        </div>
        {sortedPosts.map((post) => {
          const postAuthor =
            allUsers.find((user) => user.username === post.username) ?? {};
          return <Post post={post} key={post._id} author={postAuthor} />;
        })}
      </div>
      <Sidebar />
    </div>
  );
};

export default Home;
