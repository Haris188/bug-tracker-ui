import React from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import { object } from 'prop-types';
import ProjectDetails from 'src/views/project/ProjectDetails';
import ProjectPeople from 'src/views/project/ProjectPeople';
import Results from './Results';
import Toolbar from './Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const View = (props) => {
  const classes = useStyles();
  const { container } = props;

  return (
    <Page
      className={classes.root}
      title="Tickets"
    >
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ProjectDetails
              project={container.project}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProjectPeople
              project={container.project}
            />
          </Grid>
        </Grid>
        <Toolbar
          handleFindChange={container.searchName}
          navigateToNewTicket={container.navigateToNewTicket}
        />
        <Box mt={3}>
          <Results
            tickets={container.tickets}
            handleTicketClick={container.handleTicketClick}
            completeTicket={container.completeTicket}
          />
        </Box>
      </Container>
    </Page>
  );
};

View.propTypes = {
  container: object
};

export default View;
