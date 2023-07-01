import { useEffect, useState } from 'react';

import { useAuthContext } from '../context/AuthContext';
import { useAppContext } from '../context/AppContext';

const useUser = () => {
  const [isLoading, setIsLoading] = useState([]);
  const { token } = useAuthContext();
  const { allUsers, setAllUsers, user, setUser } = useAppContext();

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
      .then((data) => setUser({ ...data.user }))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const editUser = (userData) => {
    console.log('UDATA', userData);
    fetch(`api/users/edit`, {
      method: 'POST',
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ userData }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser({ ...data.user });
      })
      .catch((err) => console.log(err));
  };

  useEffect(fetchUsers, []);

  return {
    allUsers,
    user,
    isLoading,
    fetchUsers,
    fetchUser,
    editUser,
  };
};

export default useUser;
