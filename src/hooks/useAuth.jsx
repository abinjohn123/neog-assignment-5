import { useAppContext } from '../context/AppContext';
import { useAuthContext } from '../context/AuthContext';
import { noop } from '../utils';

const useAuth = () => {
  const { setToken, setLoggedInUser } = useAuthContext();

  const logIn = (payload, successCb = noop) => {
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
        if (data.errors) console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const signUp = (payload, successCb = noop) => {
    fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.encodedToken) {
          setToken(data.encodedToken);
          setLoggedInUser(data.createdUser);
          successCb();
        }
        if (data.errors) console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return {
    logIn,
    signUp,
  };
};

export { useAuth };
