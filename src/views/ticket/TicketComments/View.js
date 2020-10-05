import { object } from 'prop-types';
import React from 'react';
import {
  Card,
  CardContent,
  TextField,
  Button,
  List,
  Typography, CircularProgress
} from '@material-ui/core';
import styled from 'styled-components';
import CommentListItem from './CommentListItem';

const Form = styled.form`
  display:flex;
  margin-top: 1em;
  justify-contents:center;
`;

const CommentsContainer = styled.div`
  max-height: 400px;
  overflow-y: scroll;
  scrollbar-width:none;
`;

const View = (props) => {
  const { container } = props;

  return (
    <Card style={{ height: '100%' }}>
      <CardContent>
        <Typography
          variant="h1"
        >
          Comments
        </Typography>
        <Form onSubmit={container.submitComment}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Write comment here.."
            color="primary"
            onChange={container.changeCommentValue}
            value={container.commentField}
            error={container.commentError}
            disabled={container.addLoading}
          />
          {container.addLoading
            ? (
              <CircularProgress
                size={40}
                style={{ marginLeft: '0.4em' }}
              />
            )
            : (
              <Button
                style={{ marginLeft: '0.4em' }}
                variant="contained"
                type="submit"
                color="primary"
              >
                Add
              </Button>
            )}
        </Form>
        <CommentsContainer>
          {container.comments.length > 0
            ? (
              <List>
                {container.comments.map((comment) => (
                  <CommentListItem
                    comment={comment}
                  />
                ))}
              </List>
            )
            : (
              <Typography>
                No available comments
              </Typography>
            )}
        </CommentsContainer>
      </CardContent>
    </Card>
  );
};

View.propTypes = {
  container: object
};

export default View;
