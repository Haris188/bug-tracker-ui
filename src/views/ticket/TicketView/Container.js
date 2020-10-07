import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Controllers from 'src/controllers/Controllers';
import Presenters from 'src/presenters/Presenters';
import LoadingView from 'src/views/loadingView';
import { find } from 'lodash';
import WithAuthGate from 'src/components/WithAuthGate';
import View from './View';

const dummyUser = {
  currentUser: {
    id: 1,
    role: 'tester'
  }
};

const Container = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ticket } = location.state;
  const { currentUser } = dummyUser;
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [newUserSubmitLoading, setNewUserSubmitLoading] = useState(false);

  const getProjectUsersFromApi = async () => {
    const userRes = await
    Presenters.getProjectUsersFromApi(ticket.projectId);

    if (userRes.success) {
      setUsers(userRes.data);
    } else {
      alert('Invalid ticket');
    }
    setLoading(false);
  };

  const setAssignedUser = () => {
    if (users.length > 0) {
      return find(users, { id: ticket.userId });
    }
  };

  const currentlyAssingedUser = setAssignedUser();

  useEffect(() => {
    getProjectUsersFromApi();
  }, []);

  const deleteThisTicket = async () => {
    setLoading(true);

    const deleteRes = await
    Controllers.deleteTicket(ticket.id);

    if (deleteRes.success) {
      navigate('/app/projects', { replace: true });
    } else {
      setLoading(false);
      alert('Deletion failed');
    }
  };

  const changeTicketUser = async (values) => {
    setNewUserSubmitLoading(true);
    const userId = users[values.user].id;
    const data = {
      userId,
      ticketId: ticket.id
    };

    const changeRes = await
    Controllers.assignUserToTicket(data);

    if (changeRes.success) {
      alert('Assigned user changed');
    } else {
      alert('Failed to assing user');
    }
    setNewUserSubmitLoading(false);
  };

  return loading
    ? <LoadingView />
    : (
      <View
        {...props}
        container={{
          ticket,
          currentUser,
          deleteThisTicket,
          users,
          changeTicketUser,
          currentlyAssingedUser,
          newUserSubmitLoading
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
