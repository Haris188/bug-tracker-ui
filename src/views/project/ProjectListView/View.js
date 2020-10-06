import React from 'react';
import {
  Container,
  Card, Typography
} from '@material-ui/core';
import { object } from 'prop-types';
import ProjectList from './ProjectList';

const View = (props) => {
  const { container } = props;
  return (
    <Container
      maxWidth={false}
      style={{
        marginTop: '1em'
      }}
    >
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
