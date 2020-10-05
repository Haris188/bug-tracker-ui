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

const CustomerListView = (props) => {
  const classes = useStyles();
  const { container } = props;

  return (
    <Page
      className={classes.root}
      title="Customers"
    >
      <Container maxWidth={false}>
        <Toolbar
          handleFindChange={container.searchName}
        />
        <Box mt={3}>
          <Results
            deleteCustomer={container.deleteUser}
            customers={container.users}
          />
        </Box>
      </Container>
    </Page>
  );
};

CustomerListView.propTypes = {
  container: object
};

export default CustomerListView;
