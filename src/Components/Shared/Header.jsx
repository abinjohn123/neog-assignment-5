import { useNavigate } from 'react-router';

import { useAuthContext } from '../../context/AuthContext';
import './shared.scss';

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setToken } = useAuthContext();

  const handleLoginClick = () => {
    if (isLoggedIn) setToken(null);
    else navigate('/login');
  };

  return (
    <header className="app-header">
      <h1>key.club</h1>
      <div className="header-actions">
        <button className="btn" onClick={handleLoginClick}>
          {isLoggedIn ? 'Log out' : 'Log in'}
        </button>
      </div>
    </header>
  );
};

export default Header;
