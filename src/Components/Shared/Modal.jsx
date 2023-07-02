import { useEffect } from 'react';
import { CrossIcon } from '../../icons/svg';
import { noop } from '../../utils';

const Modal = ({
  setIsModalOpen = noop,
  children,
  width = null,
  className = '',
}) => {
  const stopPropagation = (e) => e.stopPropagation();
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    document.querySelector('body').classList.add('overlay-enabled');
    document
      .querySelector('#overlay-element')
      .addEventListener('click', closeModal);

    return () => {
      document.querySelector('body').classList.remove('overlay-enabled');
    };
  }, []);

  return (
    <>
      <div
        className={`modal ${className}`}
        onClick={stopPropagation}
        style={{ width }}
      >
        <div className="modal-cross-icon" onClick={closeModal}>
          <CrossIcon />
        </div>
        {children}
      </div>
      <div id="overlay-element" className="overlay" onClick={stopPropagation} />
    </>
  );
};

export default Modal;
