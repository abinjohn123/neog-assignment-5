import { useLocation, useNavigate } from 'react-router';
import { useAuthContext } from '../../context/AuthContext';

const authUtils = () => {
  const { isLoggedIn } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();

  const loginRedirect = (callback) => {
    if (isLoggedIn) callback();
    else
      navigate('/login', {
        state: {
          from: location,
        },
      });
  };

  return {
    loginRedirect,
  };
};

export default authUtils;
