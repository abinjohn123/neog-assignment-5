import { useNavigate } from 'react-router';

import useUser from '../../hooks/useUser';
import { getFullName } from '../../utils';
import { useAuthContext } from '../../context/AuthContext';

const UserCard = ({ user }) => {
  const { avatar, firstName, lastName, username, _id } = user;
  const navigate = useNavigate();
  return (
    <div className="user-card" onClick={() => navigate(`/user/${_id}`)}>
      <div className="avatar">
        <img src={avatar ?? '/avatars/1.png'} alt={username} />
      </div>
      <div className="user-details">
        <p className="name">{getFullName(firstName, lastName)}</p>
        <span className="username">@{username}</span>
      </div>
      <button className="btn btn-cta">Follow</button>
    </div>
  );
};

const Suggestions = () => {
  const { isLoading, allUsers } = useUser();
  const {
    loggedInUser: { username = '' },
  } = useAuthContext();

  if (isLoading || !Boolean(allUsers.length)) return <p>Loading...</p>;
  return (
    <div className="suggestions-card">
      <h3>Suggested for you</h3>
      <div className="suggestion-list">
        {allUsers
          .filter((user) => user.username !== username)
          .map((user) => (
            <UserCard user={user} key={user._id} />
          ))}
      </div>
    </div>
  );
};

export default Suggestions;
