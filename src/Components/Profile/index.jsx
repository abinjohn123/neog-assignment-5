import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import useUser from '../../hooks/useUser';
import { useAuthContext } from '../../context/AuthContext';
import { useEffect } from 'react';

import { getFullName } from '../../utils';
import { ProfileFeed } from './Feed';
import { EditProfileModal } from './EditProfileModa';
import { GlobeIcon } from '../../icons/svg';
import './profile.scss';

const Profile = () => {
  const { userId } = useParams();
  const { fetchUser, isLoading, user } = useUser();
  const { username } = useAuthContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (userId) fetchUser(userId);
  }, [userId]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div className="profile-card">
        <div className="img-card">
          <img src={user.avatar} username={user.username} />
        </div>

        <div className="container">
          <p className="name">{getFullName(user.firstName, user.lastName)}</p>
          <a href={user.link || '/'} className="web-url" target="_blank">
            <GlobeIcon />
          </a>
        </div>
        <p className="bio">{user.bio || 'A catchy bio goes here'}</p>
        {user.username === username && (
          <button
            className="btn edit-profile-btn"
            onClick={() => setIsModalOpen(true)}
          >
            Edit profile
          </button>
        )}
      </div>
      <ProfileFeed profile={user} />
      {isModalOpen && (
        <EditProfileModal profile={user} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};

export default Profile;
