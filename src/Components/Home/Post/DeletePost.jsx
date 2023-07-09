import Modal from '../../Shared/Modal';
import usePosts from '../../../hooks/usePosts';

import SpinnerButton from '../../Shared/SpinnerButton';

const DeletePostModal = ({ setIsModalOpen, postId }) => {
  const { deletePost, isSubmitting } = usePosts();

  const handlePostDelete = (e) => {
    e.preventDefault();
    deletePost(postId, () => setIsModalOpen(false));
  };

  return (
    <Modal
      setIsModalOpen={setIsModalOpen}
      width={400}
      className="delete-post-modal"
    >
      <h3 className="delete-post">Delete Post</h3>
      <p>
        Do you really wish to delete this post? <br /> This cannot be undone
      </p>
      <SpinnerButton
        className="btn-primary btn-danger"
        isLoading={isSubmitting}
        onClick={handlePostDelete}
      >
        Delete
      </SpinnerButton>
    </Modal>
  );
};

export default DeletePostModal;
