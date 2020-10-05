import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { filter } from 'lodash';
import View from './View';
import LoadingView from '../../loadingView';
import Presenters from '../../../presenters/Presenters';

const Container = (props) => {
  const navigate = useNavigate();
  const [Tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredTickets, setFilteredTickets] = useState([]);

  const getTicketsFromApi = async () => {
    const ticketResponse = await Presenters.getCurrentUserTickets();
    if (ticketResponse.success) {
      setTickets(ticketResponse.data);
      setFilteredTickets(ticketResponse.data);
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    getTicketsFromApi();
  }, []);

  // const deleteUser = async (id) => {
  //   const deleteResponse = await
  //   Controllers.deleteUser(id);

  //   if (deleteResponse.success) await getTicketsFromApi();
  //   else {
  //     alert('User deletion failed');
  //   }
  // };

  const match = (name, searchTerm) => {
    const regex = new RegExp(searchTerm, 'i');
    return name.match(regex);
  };

  const searchName = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm.length > 0) {
      const result = filter(Tickets, (o) => (match(o.problem, searchTerm)));
      setFilteredTickets(result);
    } else {
      setFilteredTickets(Tickets);
    }
  };

  const handleTicketClick = (ticket) => {
    navigate('/app/ticket', { state: { ticket }, replace: true });
  };

  return loading
    ? <LoadingView />
    : (
      <View
        {...props}
        container={{
          tickets: filteredTickets,
          searchName,
          handleTicketClick
        }}
      />
    );
};

export default Container;
