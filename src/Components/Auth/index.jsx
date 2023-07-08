import { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import PasswordField from './PasswordField';
import './auth.scss';
import SpinnerButton from '../Shared/SpinnerButton';
import { useCustomSnackbar } from '../Shared/CustomSnackbar';

const Authenticate = ({ isNewUser = false }) => {
  const { signUp, logIn, isSubmitting } = useAuth();
  const [isSignup, setIsSignUp] = useState(isNewUser);
  const navigate = useNavigate();
  const location = useLocation();
  const { enqueueSnackbar } = useCustomSnackbar();

  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const successCallback = () => {
    const redirectTo = location.state?.from?.pathname || '/';
    navigate(redirectTo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      username: e.target[0].value.trim(),
      password: e.target[1].value.trim(),
    };

    if (isSignup) {
      payload.avatar = '/avatars/1.png';
      payload.firstName = e.target[3].value.trim();
      payload.lastName = e.target[4].value.trim();

      if (e.target[1].value !== e.target[2].value.trim()) {
        enqueueSnackbar('Passwords do not match!', 'error');
        return console.log('passwords do not match');
      }
      signUp(payload, successCallback);
    } else logIn(payload, successCallback);
  };

  const loginWithTestCredentials = () => {
    const username = 'abin.john';
    const password = 'thenameisjohn';

    userNameRef.current.value = username;
    passwordRef.current.value = password;
    const payload = { username, password };

    setTimeout(() => logIn(payload, successCallback), 200);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <p className="align-center form-header">
        {isSignup ? 'Sign up' : 'Log in'}
      </p>
      <label>
        <span>Username:</span>
        <input type="text" required ref={userNameRef} />
      </label>
      <PasswordField labelText="Password" ref={passwordRef} />
      {isSignup && (
        <>
          <PasswordField labelText="Confirm Password" />
          <label>
            <span>First name:</span>
            <input type="text" required />
          </label>
          <label>
            <span>Last name:</span>
            <input type="text" required />
          </label>
        </>
      )}
      <div className="btn-row">
        <SpinnerButton
          type="submit"
          className="btn-submit"
          isLoading={isSubmitting}
          style={{ gridColumn: !isSignup ? null : '1/-1' }}
        >
          {isSignup ? 'Sign up' : 'Log in'}
        </SpinnerButton>
        {!isSignup && (
          <button
            type="button"
            className="btn-test"
            onClick={loginWithTestCredentials}
          >
            Sign in with test credentials
          </button>
        )}
      </div>
      <div className="login-nudge">
        {isSignup ? (
          <p>
            Already registered?{' '}
            <span onClick={() => setIsSignUp((state) => !state)}>Log in</span>{' '}
            instead
          </p>
        ) : (
          <p>
            New user?{' '}
            <span onClick={() => setIsSignUp((state) => !state)}>Sign up</span>{' '}
            instead
          </p>
        )}
      </div>
    </form>
  );
};

export default Authenticate;
