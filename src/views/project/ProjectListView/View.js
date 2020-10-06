import React from 'react';
import {
  Container,
  Card, Typography, Button
} from '@material-ui/core';
import { object } from 'prop-types';
import ProjectList from './ProjectList';

const View = (props) => {
  const { container } = props;
  const userEligible = container.currentUser.role === 'admin'
  || container.currentUser.role === 'projectManager';

  return (
    <Container
      maxWidth={false}
      style={{
        marginTop: '1em'
      }}
    >
      {userEligible
      && (
      <Button
        onClick={container.navigateToAddProject}
        variant="contained"
        color="primary"
        style={{
          marginBottom: '1em'
        }}
      >
        Add new Project
      </Button>
      )}
      <Card>
        {container.projects.length > 0
          ? (
            <ProjectList
              projects={container.projects}
              deleteProject={container.deleteProject}
              navigateToProject={container.navigateToProject}
              navigateToDetails={container.navigateToDetails}
            />
          )
          : (
            <Typography
              style={{
                margin: '1em'
              }}
            >
              No Project available
            </Typography>
          )}
      </Card>
    </Container>
  );
};

View.propTypes = {
  container: object
};

export default View;
