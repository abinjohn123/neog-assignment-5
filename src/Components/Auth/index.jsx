import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import './auth.scss';

const Authenticate = ({ isNewUser = false }) => {
  const { signUp, logIn } = useAuth();
  const [isSignup, setIsSignUp] = useState(isNewUser);
  const navigate = useNavigate();
  const location = useLocation();

  const successCallback = () => {
    const redirectTo = location.state?.from?.pathname || '/';
    navigate(redirectTo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      username: e.target[0].value,
      password: e.target[1].value,
    };

    console.log(payload);

    if (isSignup) {
      payload.email = e.target[3].value;
      payload.firstName = e.target[4].value;
      payload.lastName = e.target[5].value;

      if (e.target[1].value !== e.target[2].value) {
        return console.log('passwords do not match');
      }
      signUp(payload, successCallback);
    } else logIn(payload, successCallback);
  };

  return (
    <>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Username:</span>
            <input type="text" required />
          </label>
          <label>
            <span>Password:</span>
            <input type="password" required />
          </label>
          {isSignup && (
            <>
              <label>
                <span>Confirm password:</span>
                <input type="password" required />
              </label>
              <label>
                <span>Email:</span>
                <input type="email" required />
              </label>
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
          <button type="submit" className="btn-submit">
            {isSignup ? 'Sign up' : 'Log in'}
          </button>
          <div className="login-nudge">
            {isSignup ? (
              <p>
                Already registered?{' '}
                <span onClick={() => setIsSignUp((state) => !state)}>
                  Log in
                </span>{' '}
                instead
              </p>
            ) : (
              <p>
                New user?{' '}
                <span onClick={() => setIsSignUp((state) => !state)}>
                  Sign up
                </span>{' '}
                instead
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Authenticate;
