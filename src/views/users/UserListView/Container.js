import React, { useState, useEffect } from 'react';
import { filter } from 'lodash';
import WithAuthGate from 'src/components/WithAuthGate';
import View from './View';
import LoadingView from '../../loadingView';
import Controllers from '../../../controllers/Controllers';
import Presenters from '../../../presenters/Presenters';

const Container = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const getUsersFromApi = async () => {
    const userResponse = await Presenters.getAllUsers();
    if (userResponse.success) {
      setUsers(userResponse.data);
      setFilteredUsers(userResponse.data);
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUsersFromApi();
  }, []);

  const deleteUser = async (id) => {
    const deleteResponse = await
    Controllers.deleteUser(id);

    if (deleteResponse.success) await getUsersFromApi();
    else {
      alert('User deletion failed');
    }
  };

  const match = (name, searchTerm) => {
    const regex = new RegExp(searchTerm, 'i');
    return name.match(regex);
  };

  const searchName = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm.length > 0) {
      const result = filter(users, (o) => (match(o.name, searchTerm)));
      setFilteredUsers(result);
    } else {
      setFilteredUsers(users);
    }
  };

  return loading
    ? <LoadingView />
    : (
      <View
        {...props}
        container={{
          users: filteredUsers,
          deleteUser,
          searchName
        }}
      />
    );
};

const ContainerGate = () => (
  <WithAuthGate>
    {Container}
  </WithAuthGate>
);

export default ContainerGate;
