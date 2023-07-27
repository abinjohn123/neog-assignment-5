import { useParams } from 'react-router';

import useUser from '../../hooks/useUser';
import { useAuthContext } from '../../context/AuthContext';
import UserCard from '../Profile/UserCard';

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
