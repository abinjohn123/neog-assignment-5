import { useState, useEffect } from 'react';
import { KebabIcon } from '../../../icons/svg';

import EditPost from './EditPost';

export const PostActions = ({ postId }) => {
  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openMenu = (e) => {
    console.log('OPAAAN');
    e.stopPropagation();
    setIsActionsOpen(true);
  };
  const closeMenu = () => setIsActionsOpen(false);

  const openEditModal = (e) => {
    e.stopPropagation();
    closeMenu();
    setIsEditModalOpen(true);
  };

  useEffect(() => {
    document.querySelector('body').addEventListener('click', closeMenu);

    return () =>
      document.querySelector('body').removeEventListener('click', closeMenu);
  }, []);

  return (
    <div
      className="post-actions"
      onClick={openMenu}
      style={{ position: isActionsOpen ? 'relative' : 'static' }}
    >
      <KebabIcon />
      {isActionsOpen && (
        <div className="actions-container">
          <p className="edit" onClick={openEditModal}>
            Edit
          </p>
          <p className="delete">Delete</p>
        </div>
      )}
      {isEditModalOpen && (
        <EditPost setIsModalOpen={setIsEditModalOpen} postId={postId} />
      )}
    </div>
  );
};
