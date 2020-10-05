import React from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import { object } from 'prop-types';
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
        <Toolbar
          handleFindChange={container.searchName}
        />
        <Box mt={3}>
          <Results
            tickets={container.tickets}
            handleTicketClick = {container.handleTicketClick}
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
