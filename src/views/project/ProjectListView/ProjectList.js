import React from 'react';
import {
  List
} from '@material-ui/core';
import { func, object } from 'prop-types';
import ProjectListItem from './ProjectListItem';

const ProjectList = (props) => {
  const {
    projects,
    deleteProject,
    navigateToProject,
    navigateToDetails
  } = props;
  return (
    <List>
      {projects.map((project) => (
        <ProjectListItem
          project={project}
          deleteProject={deleteProject}
          navigateToProject={navigateToProject}
          navigateToDetails={navigateToDetails}
        />
      ))}
    </List>
  );
};

ProjectList.propTypes = {
  projects: object,
  deleteProject: func,
  navigateToProject: func,
  navigateToDetails:func
};

export default ProjectList;
