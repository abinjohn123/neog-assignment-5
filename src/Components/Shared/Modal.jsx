import { useEffect } from 'react';
import { CrossIcon } from '../../icons/svg';
import { noop } from '../../utils';

const Modal = ({ setIsModalOpen = noop, children }) => {
  const stopPropagation = (e) => e.stopPropagation();
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    document.querySelector('body').classList.add('overlay-enabled');
    document.querySelector('body').addEventListener('click', closeModal);

    return () => {
      document.querySelector('body').classList.remove('overlay-enabled');
      document.querySelector('body').removeEventListener('click', closeModal);
    };
  }, []);

  return (
    <>
      <div className="modal" onClick={stopPropagation}>
        <div className="modal-cross-icon" onClick={closeModal}>
          <CrossIcon />
        </div>
        {children}
      </div>
      <div className="overlay" />
    </>
  );
};

export default Modal;
