import { bool, func, object } from 'prop-types';
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid, TextField, Button, MenuItem, CircularProgress
} from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import LabelGroup from '../../../components/LabelGroup';

const TicketInfo = (props) => {
  const {
    ticket,
    submitForm,
    users,
    initialUser,
    newUserSubmitLoading
  } = props;

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
        <Formik
          initialValues={{
            user: '',
          }}
          validationSchema={
          Yup.object().shape({
            user: Yup.number().required('Selection required')
          })
        }
          onSubmit={(values) => {
            submitForm(values);
          }}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            touched,
            values,
            handleBlur,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <Typography
                variant="subtitle2"
                style={{
                  marginTop: '1em',
                  marginBottom: '0.4em'
                }}
              >
                Assigned User
              </Typography>
              <TextField
                select
                fullWidth
                onChange={handleChange}
                error={Boolean(touched.user && errors.user)}
                helperText={touched.user && errors.user}
                name="user"
                label={values.user === '' ? `${initialUser.name}(${initialUser.role})` : 'Assigned User'}
                margin="none"
                onBlur={handleBlur}
                value={values.user}
                variant="outlined"
              >
                {users.map((user, index) => (
                  <MenuItem
                    key={user.id}
                    value={index}
                  >
                    {`${user.name} (${user.role})`}
                  </MenuItem>
                ))}
              </TextField>
              {newUserSubmitLoading
                ? (
                  <CircularProgress
                    size="1em"
                    style={{ marginTop: '1em' }}
                  />
                )
                : (
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={values.user === ''}
                    style={{
                      marginTop: '1em'
                    }}
                  >
                    Save
                  </Button>
                )}
            </form>
          )}

        </Formik>
      </CardContent>
    </Card>
  );
};

TicketInfo.propTypes = {
  ticket: object,
  submitForm: func,
  users: object,
  initialUser: object,
  newUserSubmitLoading: bool
};

export default TicketInfo;
