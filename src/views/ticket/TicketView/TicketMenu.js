import {
  Button,
  Card,
  CardContent
} from '@material-ui/core';
import { object } from 'prop-types';
import React from 'react';

const TicketMenu = (props) => {
  const {
    user,
    handleDelete
  } = props;

  const userEligible = user.role !== 'developer';

  return (
    <Card>
      <CardContent>
        {userEligible
        && (
        <Button
          onClick={handleDelete}
        >
          Delete Ticket
        </Button>
        )}
      </CardContent>
    </Card>
  );
};

TicketMenu.propTypes = {
  user: object,
  handleDelete: object
};

export default TicketMenu;
