import { useNavigate } from 'react-router';

import useUser from '../../hooks/useUser';
import { getFullName } from '../../utils';
import { useAuthContext } from '../../context/AuthContext';
import SpinnerButton from '../Shared/SpinnerButton';
import authUtils from '../Auth/utils';

const UserCard = ({ user }) => {
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

export default UserCard;
