import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Controllers from 'src/controllers/Controllers';
import LoadingView from 'src/views/loadingView';
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
  const [loading, setLoading] = useState(false);

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

  return loading
    ? <LoadingView />
    : (
      <View
        {...props}
        container={{
          ticket,
          currentUser,
          deleteThisTicket
        }}
      />
    );
};

export default Container;
