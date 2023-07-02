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
  const { fetchSingleUser, isLoading, fetchedUser } = useUser();
  const { loggedInUser } = useAuthContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEditProfileModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  useEffect(() => {
    fetchSingleUser(userId);
  }, [userId, loggedInUser]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div className="profile-card">
        <div className="img-card">
          <img src={fetchedUser.avatar} username={fetchedUser.username} />
        </div>

        <div className="container">
          <p className="name">
            {getFullName(fetchedUser.firstName, fetchedUser.lastName)}
          </p>
          <a href={fetchedUser.link || '/'} className="web-url" target="_blank">
            <GlobeIcon />
          </a>
        </div>
        <p className="bio">{fetchedUser.bio || 'A catchy bio goes here'}</p>
        {fetchedUser.username === loggedInUser.username && (
          <button
            className="btn edit-profile-btn"
            onClick={openEditProfileModal}
          >
            Edit profile
          </button>
        )}
      </div>
      <ProfileFeed profile={fetchedUser} />
      {isModalOpen && (
        <EditProfileModal
          profile={fetchedUser}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default Profile;
