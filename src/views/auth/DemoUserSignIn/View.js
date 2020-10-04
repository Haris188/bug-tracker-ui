import React from 'react';
import {
  Button,
  MenuItem,
  Card,
  CircularProgress,
  TextField,
  Typography
} from '@material-ui/core';
import { object } from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1em;
  width:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const View = (props) => {
  const { model } = props;

  return (
    <Container>
      <Card
        style={{
          width: '100%',
          maxWidth: 400,
          padding: '1em'
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
        >
          Demo user login
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
        >
          Select a role
        </Typography>
        <TextField
          select
          fullWidth
          onChange={model.setRole}
          value={model.roleIndex}
          variant="outlined"
        >
          {model.roles.map((role, index) => (
            <MenuItem
              key={role.title}
              value={index}
            >
              {role.title}
            </MenuItem>
          ))}
        </TextField>

        { model.loading
          ? (
            <CircularProgress
              size="1em"
              style={{
                marginTop: '1em'
              }}
            />
          )
          : (
            <Button
              fullWidth
              color="primary"
              variant="contained"
              style={{
                marginTop: '1em'
              }}
              onClick={model.handleSignin}
            >
              Sign In
            </Button>
          )}
      </Card>
    </Container>
  );
};

View.propTypes = {
  model: object
};

export default View;
