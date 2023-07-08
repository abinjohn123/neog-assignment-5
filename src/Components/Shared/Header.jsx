import { useNavigate, useLocation, Link, NavLink } from 'react-router-dom';

import { useAuthContext } from '../../context/AuthContext';
import useUser from '../../hooks/useUser';
import './shared.scss';

const ProfileIcon = ({ user }) => {
  return (
    user && (
      <div className="avatar">
        <img src={user.avatar} alt={user.username} />
      </div>
    )
  );
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    isLoggedIn,
    setToken,
    loggedInUser: { username = '' },
  } = useAuthContext();
  const { allUsers, isLoading } = useUser();

  const loggedInUser = !!allUsers
    ? allUsers.find((user) => user.username === username)
    : {};

  const handleLoginClick = () => {
    if (isLoggedIn) setToken(null);
    else navigate('/login');
  };

  return (
    <header className="app-header">
      <NavLink to="/" className="logo">
        <h1>key.club</h1>
      </NavLink>

      <div className="header-actions">
        {loggedInUser?._id && (
          <>
            <Link to={`/bookmarks`} className="link">
              Bookmarks
            </Link>
            <Link to={`/user/${loggedInUser._id}`}>
              <ProfileIcon user={loggedInUser} />
            </Link>
          </>
        )}
        {!location.pathname.includes('/login') && (
          <button className="btn btn-gray" onClick={handleLoginClick}>
            {isLoggedIn ? 'Log out' : 'Log in'}
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
