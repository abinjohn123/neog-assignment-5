import { forwardRef } from 'react';

import { PasswordEyeIcon } from '../../icons/svg';

const handleShowPasswordClick = (e) => {
  const passwordIcon = e.currentTarget;
  const passwordEl = passwordIcon.previousSibling;

  if (passwordEl.getAttribute('type') === 'password') {
    passwordEl.setAttribute('type', 'text');
    passwordIcon.classList.add('highlight');
  } else {
    passwordEl.setAttribute('type', 'password');
    passwordIcon.classList.remove('highlight');
  }
};

const PasswordField = forwardRef((props, ref) => {
  const { labelText } = props;

  return (
    <label className="password-field">
      <span>{labelText}:</span>
      <input type="password" required ref={ref} />
      <div className="password-icon" onClick={handleShowPasswordClick}>
        <PasswordEyeIcon />
      </div>
    </label>
  );
});

export default PasswordField;
