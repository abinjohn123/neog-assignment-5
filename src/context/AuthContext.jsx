import { createContext, useContext, useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext({ isLoggedIn: false });

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem('token')) || false
  );
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [bookmarks, setBookmarks] = useState([]);

  const contextValue = {
    isLoggedIn,
    token,
    setToken,
    loggedInUser,
    setLoggedInUser,
    bookmarks,
    setBookmarks,
  };

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
      setLoggedInUser({
        ...loggedInUser,
        username: jwtDecode(token)?.username,
      });
      localStorage.setItem('token', token);
    } else {
      setIsLoggedIn(false);
      setLoggedInUser({});
      localStorage.removeItem('token');
    }
  }, [token]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
