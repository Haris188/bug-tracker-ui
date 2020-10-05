import { object } from 'prop-types';
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid
} from '@material-ui/core';
import LabelGroup from '../../../components/LabelGroup';

const TicketInfo = (props) => {
  const { ticket } = props;
  console.log(ticket);
  return (
    <Card style={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h1">
          Ticket Details
        </Typography>
        <Grid container style={{ marginTop: '1em' }}>
          <Grid item xs={12} sm={6}>
            <LabelGroup
              title="Problem"
              label={ticket.problem}
            />
            <LabelGroup
              title="Description"
              label={ticket.description}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LabelGroup
              title="Priority"
              label={ticket.priority}
            />
            <LabelGroup
              title="Completed"
              label={ticket.completed ? 'Yes' : 'No'}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TicketInfo.propTypes = {
  ticket: object
};

export default TicketInfo;
