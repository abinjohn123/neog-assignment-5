import Modal from '../../Shared/Modal';
import usePosts from '../../../hooks/usePosts';

const DeletePostModal = ({ setIsModalOpen, postId }) => {
  const { deletePost, isLoading } = usePosts();

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
      <button className="btn btn-primary btn-danger" onClick={handlePostDelete}>
        {isLoading ? '   .   .   .   .   .   ' : 'Post'}
      </button>
    </Modal>
  );
};

export default DeletePostModal;
