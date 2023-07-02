import { useState, useEffect } from 'react';
import { KebabIcon } from '../../../icons/svg';

export const PostActions = () => {
  const [isActionsOpen, setIsActionsOpen] = useState(false);

  const openMenu = (e) => {
    e.stopPropagation();
    setIsActionsOpen(true);
  };
  const closeMenu = () => setIsActionsOpen(false);

  useEffect(() => {
    document.querySelector('body').addEventListener('click', closeMenu);

    return () =>
      document.querySelector('body').removeEventListener('click', closeMenu);
  }, []);

  return (
    <div className="post-actions" onClick={openMenu}>
      <KebabIcon />
      {isActionsOpen && (
        <div className="actions-container">
          <p className="edit">Edit</p>
          <p className="delete">Delete</p>
        </div>
      )}
    </div>
  );
};
