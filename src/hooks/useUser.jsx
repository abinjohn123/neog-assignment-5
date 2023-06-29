import { useEffect, useState } from 'react';

const useUser = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState([]);

  const fetchUsers = () => {
    setIsLoading(true);

    fetch('api/users/')
      .then((res) => res.json())
      .then((data) => setAllUsers(data.users))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const fetchUser = (userId) => {
    setIsLoading(true);

    fetch(`api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data.user))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(fetchUsers, []);

  return {
    allUsers,
    user,
    isLoading,
    fetchUsers,
    fetchUser,
  };
};

export default useUser;
