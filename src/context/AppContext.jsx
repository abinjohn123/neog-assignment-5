import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  const contextValue = { allUsers, setAllUsers, allPosts, setAllPosts };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
