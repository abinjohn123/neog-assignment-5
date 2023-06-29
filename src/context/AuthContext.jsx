import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({ isLoggedIn: false });

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem('token')) || false
  );
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const contextValue = { isLoggedIn, token, setToken };

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
      localStorage.setItem('token', token);
    } else {
      setIsLoggedIn(false);
      localStorage.removeItem('token');
    }
  }, [token]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
