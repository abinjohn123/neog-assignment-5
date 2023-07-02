import { useAuthContext } from '../../context/AuthContext';
import { getFirstName } from '../../utils';

import { Post } from '../Home/Post/Post';
import Sidebar from '../Sidebar';
import { useAppContext } from '../../context/AppContext';

export const ProfileFeed = ({ profile = {} }) => {
  const { loggedInUser = '' } = useAuthContext();
  const { allPosts } = useAppContext();

  const ProfilePosts = allPosts.filter(
    (post) => post.username === profile.username
  );

  return (
    <div className="profile-feed">
      <h3 className="profile-h3">
        {profile.username === loggedInUser.username
          ? 'Your posts'
          : `${getFirstName(profile.firstName)}'s posts`}
      </h3>
      <div className="layout">
        <div>
          {Boolean(ProfilePosts.length) ? (
            <>
              {ProfilePosts.map((post) => {
                return <Post post={post} key={post._id} author={profile} />;
              })}
            </>
          ) : (
            <p>
              {profile.username === loggedInUser.username
                ? "You haven't"
                : `${getFirstName(profile.firstName)} hasn't`}{' '}
              posted anything yet.
            </p>
          )}
        </div>
        <Sidebar />
      </div>
    </div>
  );
};
