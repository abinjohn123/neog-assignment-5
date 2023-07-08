import { useNavigate, useParams } from 'react-router';

import useUser from '../../hooks/useUser';
import { getFullName } from '../../utils';
import { useAuthContext } from '../../context/AuthContext';
import SpinnerButton from '../Shared/SpinnerButton';
import authUtils from '../Auth/utils';

export const UserCard = ({ user }) => {
  const { avatar, firstName, lastName, username, _id, followers } = user;
  const { followUser, isSubmitting } = useUser();
  const { loggedInUser } = useAuthContext();
  const navigate = useNavigate();
  const { loginRedirect } = authUtils();

  const handleFollowClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    loginRedirect(() => followUser(_id));
  };

  return (
    <div className="user-card" onClick={() => navigate(`/user/${_id}`)}>
      <div className="avatar">
        <img src={avatar ?? '/avatars/1.png'} alt={username} />
      </div>
      <div className="user-details">
        <p className="name">
          {getFullName(firstName, lastName)}{' '}
          {loggedInUser.username === username && '(You)'}
        </p>
        <span className="username">@{username}</span>
      </div>
      {loggedInUser.username !== username && (
        <SpinnerButton
          className="btn-cta"
          onClick={handleFollowClick}
          isLoading={isSubmitting}
        >
          Follow
        </SpinnerButton>
      )}
    </div>
  );
};

const Suggestions = () => {
  const { allUsers } = useUser();
  const { loggedInUser } = useAuthContext();
  const { userId = null } = useParams();

  const suggestedUsers = allUsers.filter(
    (user) =>
      user.username !== loggedInUser.username &&
      !user.followers.some(
        (follower) => follower.username === loggedInUser.username
      ) &&
      user._id !== userId
  );

  if (!Boolean(suggestedUsers.length)) return null;

  return (
    <div className="suggestions-card">
      <h3>Suggested for you</h3>
      <div className="suggestion-list">
        {suggestedUsers.map((user) => {
          return <UserCard user={user} key={user._id} />;
        })}
      </div>
    </div>
  );
};

export default Suggestions;
