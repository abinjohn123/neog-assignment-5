import { useAuthContext } from '../context/AuthContext';
import { noop } from '../utils';

const useAuth = () => {
  const { setToken } = useAuthContext();

  const logIn = (payload, successCb = noop) => {
    console.log('LOGIN');
    fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('SUCCESSS', data);

        if (data.encodedToken) {
          setToken(data.encodedToken);
          successCb();
        }
        if (data.errors) console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const signUp = (payload, successCb = noop) => {
    console.log('PAY', payload);
    fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.encodedToken) {
          setToken(data.encodedToken);
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
