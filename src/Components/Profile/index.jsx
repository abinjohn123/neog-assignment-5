import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import useUser from '../../hooks/useUser';
import { useAuthContext } from '../../context/AuthContext';

import SpinnerButton from '../Shared/SpinnerButton';
import { getFullName } from '../../utils';
import { ProfileFeed } from './Feed';
import { EditProfileModal } from './EditProfileModa';
import UserListModal from '../Home/Post/UserListModal';
import { GlobeIcon } from '../../icons/svg';
import './profile.scss';

const Profile = () => {
  const { userId } = useParams();
  const {
    fetchSingleUser,
    isLoading,
    isSubmitting,
    fetchedUser,
    followUser,
    unfollowUser,
  } = useUser();
  const { loggedInUser } = useAuthContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserListModalOpen, setIsUserListModalOpen] = useState(false);
  const userList = useRef({ list: [], type: 'Followers' });

  const isFollowing = fetchedUser?.followers?.some(
    (follower) => follower.username === loggedInUser.username
  );

  const openEditProfileModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const openUserListModal = (list, type) => {
    userList.current.list = list;
    userList.current.type = type;
    setIsUserListModalOpen(true);
  };

  const handleFollowClick = (e) => {
    e.stopPropagation();

    if (isFollowing) unfollowUser(userId, () => fetchSingleUser(userId));
    else followUser(userId, () => fetchSingleUser(userId));
  };

  useEffect(() => {
    fetchSingleUser(userId);
  }, [userId, loggedInUser]);

  if (Object.keys(fetchedUser).length === 0) return <p>Loading...</p>;

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
          {fetchedUser.username !== loggedInUser.username && (
            <SpinnerButton
              className="btn-gray"
              onClick={handleFollowClick}
              isLoading={isSubmitting}
            >
              {isFollowing ? 'Unfollow' : 'Follow'}
            </SpinnerButton>
          )}
        </div>
        <p className="bio">{fetchedUser.bio || 'A catchy bio goes here'}</p>
        <div className="follow-container">
          <p
            className="item"
            onClick={() =>
              openUserListModal(fetchedUser.followers, 'Followers')
            }
          >
            Followers
          </p>
          <span>|</span>
          <p
            className="item"
            onClick={() =>
              openUserListModal(fetchedUser.following, 'Following')
            }
          >
            Following
          </p>
        </div>
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
      {isUserListModalOpen && (
        <UserListModal
          setIsModalOpen={setIsUserListModalOpen}
          userList={userList.current}
        />
      )}
    </>
  );
};

export default Profile;
