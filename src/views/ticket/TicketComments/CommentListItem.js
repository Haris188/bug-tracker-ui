import { object } from 'prop-types';
import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core';
import LabelGroup from '../../../components/LabelGroup';

const CommentListItem = (props) => {
  const { comment } = props;

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{comment.userName[0]}</Avatar>
      </ListItemAvatar>
      <ListItemText>
        <LabelGroup
          title={comment.userName}
          label={comment.text}
        />
      </ListItemText>
    </ListItem>
  );
};

CommentListItem.propTypes = {
  comment: object
};

export default CommentListItem;
