import { useState, useEffect } from 'react';
import { KebabIcon } from '../../../icons/svg';

import EditPost from './EditPost';
import DeletePostModal from './DeletePost';

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

  const openDeleteModal = (e) => {
    e.stopPropagation();
    closeMenu();
    setIsDeleteModalOpen(true);
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
          <p className="delete" onClick={openDeleteModal}>
            Delete
          </p>
        </div>
      )}
      {isEditModalOpen && (
        <EditPost setIsModalOpen={setIsEditModalOpen} postId={postId} />
      )}
      {isDeleteModalOpen && (
        <DeletePostModal
          setIsModalOpen={setIsDeleteModalOpen}
          postId={postId}
        />
      )}
    </div>
  );
};
