import { useState } from 'react';

const useUser = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const fetchUsers = () => {
    setIsLoading(true);

    fetch('api/users/')
      .then((res) => res.json())
      .then((data) => setAllUsers(data.users))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return {
    allUsers,
    isLoading,
    fetchUsers,
  };
};

export default useUser;
