import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../../context/AuthContext';
import SpinnerButton from '../../Shared/SpinnerButton';
import usePosts from '../../../hooks/usePosts';

export const NewPost = () => {
  const formRef = useRef(null);
  const textAreaRef = useRef(null);

  const { isLoggedIn } = useAuthContext();
  const navigate = useNavigate();
  const { createNewPost, isSubmitting } = usePosts();

  const newPostHandler = (e) => {
    e.preventDefault();
    const payload = {};

    const postData = new FormData(formRef.current);
    for (const entry of postData) payload[entry[0]] = entry[1];
    localStorage.setItem('content', payload.content);

    if (!isLoggedIn) return navigate('/login');

    createNewPost(payload, () => (textAreaRef.current.value = ''));
    localStorage.removeItem('content');
  };

  return (
    <div className="new-post-card">
      <h3>New post</h3>
      <form ref={formRef} onSubmit={newPostHandler}>
        <textarea
          className="new-post-input"
          name="content"
          defaultValue={localStorage.getItem('content')}
          ref={textAreaRef}
        />
        <div className="align-right">
          <SpinnerButton
            type="submit"
            className="btn-primary"
            isLoading={isSubmitting}
          >
            Post
          </SpinnerButton>
        </div>
      </form>
    </div>
  );
};
