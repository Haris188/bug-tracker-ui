import React from 'react';
import {
  Container,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import Page from 'src/components/Page';
import { object } from 'prop-types';
import Sales from './Sales';
import TrafficByDevice from './TrafficByDevice';

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

  return container.bugStats
    ? (
      <Page
        className={classes.root}
        title="Dashboard"
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <TrafficByDevice
                bugStats={container.bugStats}
              />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <Sales
                bugStats={container.bugStats}
              />
            </Grid>
          </Grid>
        </Container>
      </Page>
    )
    : (
      <Typography>
        No data to display
      </Typography>
    );
};

View.propTypes = {
  container: object
};

export default View;
