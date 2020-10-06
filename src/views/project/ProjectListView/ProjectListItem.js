import React from 'react';
import {
  ListItem,
  ListItemText,
  Typography,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Link
} from '@material-ui/core';
import {
  Delete
} from '@material-ui/icons';
import styled from 'styled-components';
import { func, object } from 'prop-types';

const HideMobile = styled.div`
  @media only screen and (max-width:480px){
    display:none;
  }
`;

const ProjectListItem = (props) => {
  const {
    project,
    deleteProject,
    navigateToProject,
    navigateToDetails
  } = props;

  return (
    <ListItem
      button
      onClick={() => { navigateToProject(project); }}
    >
      <ListItemAvatar>
        <Avatar>{project.name[0]}</Avatar>
      </ListItemAvatar>
      <ListItemText>
        <Typography
          gutterBottom
          variant="h4"
          style={{
            fontWeight: 'normal'
          }}
        >
          {project.name}
        </Typography>
        <Typography>
          <b>Bugs</b>
          {' '}
          {project.bugs}
        </Typography>
        <Typography>
          <b>Fixed</b>
          {' '}
          {project.fixed}
        </Typography>
      </ListItemText>
      <ListItemText
        style={{
          marginLeft: '1em'
        }}
      >
        <Typography>
          {project.description}
        </Typography>
      </ListItemText>
      <HideMobile>
        <ListItemSecondaryAction>
          <IconButton
            onClick={() => { deleteProject(project.id); }}
          >
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </HideMobile>
    </ListItem>
  );
};

ProjectListItem.propTypes = {
  project: object,
  deleteProject: func,
  navigateToProject: func,
  navigateToDetails: func
};

export default ProjectListItem;
