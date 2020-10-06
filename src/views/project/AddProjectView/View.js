import React from 'react';
import { object } from 'prop-types';
import {
  Container
} from '@material-ui/core';
import AddProjectForm from './AddProjectForm';
import AddProjectUserSelector from './AddProjectUserSelector';

const View = (props) => {
  const { container } = props;
  return (
    <Container style={{
      marginTop:'1em',
      marginBottom:'1em'
    }}>
      <AddProjectForm
        submitForm={container.submitForm}
      />
      {container.formDone
      && (
      <AddProjectUserSelector
        users={container.users}
        selectUser={container.selectUser}
        userLoading={container.userLoading}
        submitProject={container.submitProject}
        submitLoading={container.submitLoading}
      />
      )}
    </Container>
  );
};

View.propTypes = {
  container: object
};

export default View;
