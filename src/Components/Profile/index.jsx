import { useParams, Link } from 'react-router-dom';

import useUser from '../../hooks/useUser';
import { useEffect } from 'react';

import { getFullName } from '../../utils';
import './profile.scss';
import { GlobeIcon } from '../../icons/svg';

const Profile = () => {
  const { userId } = useParams();
  const { fetchUser, isLoading, user } = useUser();

  useEffect(() => {
    if (userId) fetchUser(userId);
  }, [userId]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="profile-card">
      <div className="img-card">
        <img src={user.avatar} username={user.username} />
      </div>

      <div className="container">
        <p className="name">{getFullName(user.firstName, user.lastName)}</p>
        <Link to={user.link ?? '/'} className="web-url">
          <GlobeIcon />
        </Link>
      </div>
      <p className="bio">{user.bio ?? 'A catchy bio goes here'}</p>
    </div>
  );
};

export default Profile;
