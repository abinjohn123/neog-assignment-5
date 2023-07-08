import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useCustomSnackbar } from '../Components/Shared/CustomSnackbar';
import { noop } from '../utils';

const useAuth = () => {
  const { setToken, setLoggedInUser } = useAuthContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { enqueueSnackbar } = useCustomSnackbar();

  const logIn = (payload, successCb = noop) => {
    setIsSubmitting(true);
    fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.encodedToken) {
          setToken(data.encodedToken);
          setLoggedInUser(data.foundUser);
          successCb();
        }
        if (data.errors) {
          enqueueSnackbar('Incorrect username or password', 'error');
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsSubmitting(false));
  };

  const signUp = (payload, successCb = noop) => {
    setIsSubmitting(true);
    fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.encodedToken) {
          enqueueSnackbar('Account creation successful!', 'success');
          setToken(data.encodedToken);
          setLoggedInUser(data.createdUser);
          successCb();
        }
        if (data.errors) {
          enqueueSnackbar('Username already exists', 'error');
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsSubmitting(false));
  };

  return {
    logIn,
    signUp,
    isSubmitting,
  };
};

export { useAuth };
