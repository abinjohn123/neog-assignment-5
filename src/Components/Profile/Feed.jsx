import { useEffect } from 'react';

import { useAuthContext } from '../../context/AuthContext';
import usePosts from '../../hooks/usePosts';
import { getFirstName } from '../../utils';

import { Post } from '../Home/Post/Post';
import Sidebar from '../Sidebar';

export const ProfileFeed = ({ profile }) => {
  const { username = '' } = useAuthContext();
  const { allPosts, fetchPosts } = usePosts();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="profile-feed">
      <h3 className="profile-h3">
        {profile.username === username
          ? 'Your posts'
          : `${getFirstName(profile.firstName)}'s posts`}
      </h3>
      <div className="layout">
        <div>
          {allPosts
            .filter((post) => post.username === profile.username)
            .map((post) => {
              return <Post post={post} key={post._id} author={profile} />;
            })}
        </div>
        <Sidebar />
      </div>
    </div>
  );
};
