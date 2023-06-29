import { Navigate, useLocation } from 'react-router-dom';

import { useAuthContext } from '../../context/AuthContext';

const RequiresAuth = ({ children }) => {
  const { isLoggedIn } = useAuthContext();
  const location = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default RequiresAuth;
