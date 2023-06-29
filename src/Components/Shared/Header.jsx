import { useEffect } from 'react';
import { useNavigate, Link, NavLink } from 'react-router-dom';

import { useAuthContext } from '../../context/AuthContext';
import useUser from '../../hooks/useUser';
import './shared.scss';

const ProfileIcon = ({ userId }) => {
  const { user, fetchUser } = useUser();
  useEffect(() => fetchUser(userId), [userId]);

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
  const { isLoggedIn, setToken, username } = useAuthContext();
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
          <Link to={`/${loggedInUser._id}`}>
            <ProfileIcon userId={loggedInUser._id} />
          </Link>
        )}
        <button className="btn" onClick={handleLoginClick}>
          {isLoggedIn ? 'Log out' : 'Log in'}
        </button>
      </div>
    </header>
  );
};

export default Header;
