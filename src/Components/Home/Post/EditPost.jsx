import { useEffect, useRef } from 'react';
import Modal from '../../Shared/Modal';

import usePosts from '../../../hooks/usePosts';

const EditPost = ({ setIsModalOpen, postId }) => {
  const { singlePost, fetchSinglePost, editPost, isLoading } = usePosts();
  const formRef = useRef(null);
  const textAreaRef = useRef(null);

  const handlePostEdit = (e) => {
    e.preventDefault();
    const payload = {};

    const postData = new FormData(formRef.current);
    for (const entry of postData) payload[entry[0]] = entry[1];

    editPost(postId, payload, () => setIsModalOpen(false));
  };

  useEffect(() => {
    textAreaRef.current.focus();
    fetchSinglePost(postId);
  }, []);

  return (
    <Modal setIsModalOpen={setIsModalOpen} width={640}>
      <h3>Edit post</h3>
      <form ref={formRef} onSubmit={handlePostEdit}>
        <textarea
          className="edit-post-input"
          name="content"
          ref={textAreaRef}
          defaultValue={singlePost.content}
        />
        <div className="align-right">
          <button className="btn btn-primary" type="submit">
            {isLoading ? '   .   .   .   .   .   ' : 'Post'}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditPost;
