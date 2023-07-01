import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});

  const contextValue = { allUsers, setAllUsers, user, setUser };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
