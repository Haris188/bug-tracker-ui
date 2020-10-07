import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Controllers from 'src/controllers/Controllers';
import Presenters from 'src/presenters/Presenters';
import LoadingView from 'src/views/loadingView';
import View from './View';

const priorities = [
  'High',
  'Medium',
  'Low'
];

const Container = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { project } = location.state;
  const [users, setUsers] = useState([]);
  const [addLoading, setAddLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  const getProjectUsersFromApi = async () => {
    const userRes = await
    Presenters.getProjectUsersFromApi(project.id);

    if (userRes.success) {
      setUsers(userRes.data);
    } else {
      alert('Invalid Project');
      navigate('/app/projects');
    }

    setLoading(false);
  };

  useEffect(() => {
    getProjectUsersFromApi();
  }, []);

  const submitForm = async (values) => {
    setAddLoading(true);

    const data = {
      problem: values.name,
      description: values.description,
      priority: priorities[values.priority],
      userId: users[values.userIndex].id,
      projectId: project.id,
      completed: false
    };

    const submitRes = await
    Controllers.addNewTicket(data);

    if (submitRes && submitRes.success) {
      navigate('/app/ticket', { state: { ticket: submitRes.data } });
    } else {
      alert('ticket could not be created');
    }

    setLoading(false);
  };

  return loading
    ? <LoadingView />
    : (
      <View
        container={{
          users,
          priorities,
          submitForm,
          addLoading
        }}
      />
    );
};

export default Container;
