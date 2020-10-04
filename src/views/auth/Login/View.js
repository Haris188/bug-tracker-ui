import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  makeStyles,
  Modal
} from '@material-ui/core';
import Page from 'src/components/Page';
import { object } from 'prop-types';
import Controllers from '../../../controllers/Controllers';
import DemoUserSignIn from '../DemoUserSignIn';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LoginView = (props) => {
  const classes = useStyles();
  const { model } = props;

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={(values) => {
              console.log('signin');
              Controllers.signin(
                values.email,
                values.password
              );
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    Login with email and password
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Don&apos;t have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/register"
                    variant="h6"
                  >
                    Sign up
                  </Link>
                  {' Or '}
                  <Link
                    variant="h6"
                    onClick={model.setDemoUserModalToOpen}
                  >
                    Sign in as demo user
                  </Link>
                  <Modal
                    open={model.open}
                    onClose={model.setDemoUserModalToClose}
                    style={{
                      display:'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <DemoUserSignIn />
                  </Modal>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

LoginView.propTypes = {
  model: object
};

export default LoginView;
