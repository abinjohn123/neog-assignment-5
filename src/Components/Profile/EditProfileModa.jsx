import { useState, useEffect, useRef } from 'react';

import useUser from '../../hooks/useUser';
import { CrossIcon, LeftChevronIcon, RightChevronIcon } from '../../icons/svg';
import { noop } from '../../utils';

const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 7;

const AvatarPicker = ({ avatarId, setAvatarId }) => {
  const handleAvatarChange = (val) => {
    if (avatarId === MIN_AVATAR_ID && val === -1) setAvatarId(MAX_AVATAR_ID);
    else if (avatarId === MAX_AVATAR_ID && val === 1)
      setAvatarId(MIN_AVATAR_ID);
    else setAvatarId(avatarId + val);
  };
  return (
    <div className="avatar-picker">
      <div className="control pick-left" onClick={() => handleAvatarChange(-1)}>
        <LeftChevronIcon />
      </div>
      <div className="avatar-container">
        <img src={`/avatars/${avatarId}.png`} alt={'avatar-' + avatarId} />
      </div>
      <div className="control pick-right" onClick={() => handleAvatarChange(1)}>
        <RightChevronIcon />
      </div>
    </div>
  );
};

export const EditProfileModal = ({ profile, setIsModalOpen = noop }) => {
  const [avatarId, setAvatarId] = useState(
    Number.parseInt(profile.avatar.split('/').pop())
  );
  const formRef = useRef(null);
  const { editUser } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    const payload = {};
    for (const entry of formData.entries()) payload[entry[0]] = entry[1];
    payload.avatar = `/avatars/${avatarId}.png`;

    editUser(payload);
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.querySelector('body').classList.add('overlay-enabled');

    return () =>
      document.querySelector('body').classList.remove('overlay-enabled');
  }, []);
  return (
    <>
      <div className="modal edit-profile-modal">
        <div className="header">
          <h2 className="modal-title">Edit Profile</h2>
          <div className="cur-p" onClick={() => setIsModalOpen(false)}>
            <CrossIcon />
          </div>
        </div>
        <form className="profile-form" onSubmit={handleSubmit} ref={formRef}>
          <AvatarPicker avatarId={avatarId} setAvatarId={setAvatarId} />
          <label>
            <span className="label-text">Bio</span>
            <input
              className="form-input"
              name="bio"
              defaultValue={profile.bio ?? ''}
            />
          </label>
          <label>
            <span className="label-text">URL</span>
            <input
              className="form-input"
              name="link"
              defaultValue={profile.url ?? 'https://twitter.com/abin_john98'}
            />
          </label>
          <div className="btn-row">
            <button
              type="button"
              className="btn modal-btn --discard"
              onClick={() => setIsModalOpen(false)}
            >
              Discard
            </button>
            <button type="submit" className="btn modal-btn --submit">
              Save
            </button>
          </div>
        </form>
      </div>
      <div className="overlay" />
    </>
  );
};
