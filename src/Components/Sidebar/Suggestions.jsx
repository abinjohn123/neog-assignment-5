import { useEffect } from 'react';

import useUser from '../../hooks/useUser';
import { getFullName } from '../../utils';

const UserCard = ({ user }) => {
  const { avatar, firstName, lastName, username } = user;
  return (
    <div className="user-card">
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
  const { fetchUsers, isLoading, allUsers } = useUser();

  useEffect(fetchUsers, []);

  if (isLoading || !Boolean(allUsers.length)) return <p>Loading...</p>;

  return (
    <div className="suggestions-card">
      <h3>Suggested for you</h3>
      <div className="suggestion-list">
        {allUsers.map((user) => (
          <UserCard user={user} key={user._id} />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
