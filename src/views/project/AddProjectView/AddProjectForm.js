import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography
} from '@material-ui/core';
import { func } from 'prop-types';

const AddProjectForm = (props) => {
  const { submitForm } = props;

  return (
    <Card>
      <CardContent>
        <Typography
          variant="h1"
        >
          Add new Project
        </Typography>
        <Box
          maxWidth="600px"
        >
          <Formik
            initialValues={{
              name: '',
              description: ''
            }}
            validationSchema={
              Yup.object().shape({
                name: Yup.string().max(255).required('Name is required'),
                description: Yup.string().max(255).required('Description is required')
              })
            }
            onSubmit={(values) => {
              submitForm(values)
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
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                >
                  Next
                </Button>
              </form>
            )}
          </Formik>
        </Box>
      </CardContent>
    </Card>
  );
};

AddProjectForm.propTypes = {
  submitForm: func
};

export default AddProjectForm;
