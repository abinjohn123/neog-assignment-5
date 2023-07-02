import { useNavigate } from 'react-router';

import useUser from '../../hooks/useUser';
import { getFullName } from '../../utils';
import { useAuthContext } from '../../context/AuthContext';

export const UserCard = ({ user }) => {
  const { avatar, firstName, lastName, username, _id, followers } = user;
  const { followUser } = useUser();
  const { isLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  const handleFollowClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isLoggedIn) return navigate('/login');
    followUser(_id);
  };

  return (
    <div className="user-card" onClick={() => navigate(`/user/${_id}`)}>
      <div className="avatar">
        <img src={avatar ?? '/avatars/1.png'} alt={username} />
      </div>
      <div className="user-details">
        <p className="name">{getFullName(firstName, lastName)}</p>
        <span className="username">@{username}</span>
      </div>
      <button className="btn btn-cta" onClick={handleFollowClick}>
        Follow
      </button>
    </div>
  );
};

const Suggestions = () => {
  const { allUsers } = useUser();
  const { loggedInUser } = useAuthContext();

  const suggestedUsers = allUsers.filter(
    (user) =>
      user.username !== loggedInUser.username &&
      !user.followers.some(
        (follower) => follower.username === loggedInUser.username
      )
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
