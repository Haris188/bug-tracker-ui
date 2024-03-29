import { object } from 'prop-types';
import React from 'react';
import {
  Container,
  Grid
} from '@material-ui/core';
import TicketInfo from './TicketInfo';
import TicketComments from '../TicketComments';
import TicketAttachments from '../TicketAttachments';
import TicketMenu from './TicketMenu';

const View = (props) => {
  const { container } = props;

  return (
    <Container style={{ marginTop: '1em' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TicketMenu
            user={container.currentUser}
            handleDelete={container.deleteThisTicket}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TicketInfo
            ticket={container.ticket}
            users={container.users}
            submitForm={container.changeTicketUser}
            initialUser={container.currentlyAssingedUser}
            newUserSubmitLoading={container.newUserSubmitLoading}
            currentUser={container.currentUser}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TicketComments
            ticket={container.ticket}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TicketAttachments
            ticket={container.ticket}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

View.propTypes = {
  container: object
};

export default View;
