import React from 'react';
import { object } from 'prop-types';
import {
  Card,
  CardContent,
  Container,
  Typography,
  Box,
  TextField,
  Button, MenuItem, CircularProgress
} from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { sortedIndexBy } from 'lodash';

const View = (props) => {
  const { container } = props;

  return (
    <Container
      style={{
        marginTop: '1em',
        marginBottom: '1em'
      }}
    >
      <Card>
        <CardContent>
          <Typography
            variant="h1"
          >
            Add new ticket
          </Typography>
          <Box
            maxWidth="600px"
          >
            <Formik
              initialValues={{
                name: '',
                description: '',
                priority: '',
                userIndex: ''
              }}
              validationSchema={
              Yup.object().shape({
                name: Yup.string().max(255).required('Name is required'),
                description: Yup.string().max(255).required('Description is required'),
                priority: Yup.number().required('Please make a selection'),
                userIndex: Yup.number().required('Please make a selection')
              })
            }
              onSubmit={(values) => {
                container.submitForm(values);
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
                  <TextField
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label="Project name"
                    margin="normal"
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(touched.description && errors.description)}
                    fullWidth
                    multiline
                    rows="4"
                    helperText={touched.description && errors.description}
                    label="Description"
                    margin="normal"
                    name="description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(touched.priority && errors.priority)}
                    fullWidth
                    select
                    helperText={touched.priority && errors.priority}
                    label="Ticket priority"
                    margin="normal"
                    name="priority"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.priority}
                    variant="outlined"
                  >
                    {container.priorities.map((priority, index) => (
                      <MenuItem
                        key={priority}
                        value={index}
                      >
                        {priority}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    error={Boolean(touched.userIndex && errors.userIndex)}
                    fullWidth
                    select
                    helperText={touched.userIndex && errors.userIndex}
                    label="Assign User"
                    margin="normal"
                    name="userIndex"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.userIndex}
                    variant="outlined"
                  >
                    {container.users.map((user, index) => (
                      <MenuItem
                        key={user.id}
                        value={index}
                      >
                        {`${user.name}(${user.role})`}
                      </MenuItem>
                    ))}
                  </TextField>
                  {container.addLoading
                    ? <CircularProgress size="1em" />
                    : (
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                      >
                        Add
                      </Button>
                    )}
                </form>
              )}
            </Formik>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

View.propTypes = {
  container: object
};

export default View;
