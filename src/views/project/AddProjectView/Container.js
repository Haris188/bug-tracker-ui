import React, { useEffect, useState } from 'react';
import Controllers from 'src/controllers/Controllers';
import Presenters from 'src/presenters/Presenters';
import { useNavigate } from 'react-router-dom';
import { filter } from 'lodash';
import WithAuthGate from 'src/components/WithAuthGate';
import View from './View';

const Container = () => {
  const navigate = useNavigate();
  const [userLoading, setUserLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [formDone, setFormDone] = useState(false);
  const [formData, setFormData] = useState({});
  const [submitLoading, setSubmitLoading] = useState(false);

  const submitForm = (values) => {
    setFormData(values);
    setFormDone(true);
  };

  const getUsersFromApi = async () => {
    const userRes = await
    Presenters.getAllUsers();

    if (userRes.success) {
      setUsers(userRes.data);
    }

    setUserLoading(false);
  };

  useEffect(() => {
    getUsersFromApi();
  }, []);

  const selectUser = (index) => {
    const user = users[index];
    user.selected = !user.selected;

    const updatedUsers = users;
    updatedUsers[index] = user;

    setUsers(updatedUsers);
  };

  const fetchSelectedUserIds = () => {
    const filteredUsers = filter(users, { selected: true });
    const userIdsArr = filteredUsers.map((user) => (
      user.id
    ));
    return userIdsArr;
  };

  const submitProject = async () => {
    setSubmitLoading(true);
    const data = {
      project: formData,
      users: fetchSelectedUserIds()
    };

    const submitRes = data.users.length > 0
      ? await
      Controllers.addNewProject(data)
      : alert('You have to select at least one person');

    if (submitRes && submitRes.success) {
      navigate('/app/projects/project', {
        state: { project: submitRes.data },
        replace: true
      });
    } else {
      alert('Project addition failed');
    }

    setSubmitLoading(false);
  };

  return (
    <View
      container={{
        formDone,
        submitForm,
        selectUser,
        users,
        userLoading,
        submitProject,
        submitLoading
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
