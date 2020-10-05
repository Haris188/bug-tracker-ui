import { string } from 'prop-types';
import React from 'react';
import {
  Typography
} from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
  margin-top:1em;
`;

const LabelGroup = (props) => {
  const {
    title,
    label
  } = props;

  return (
    <Container>
      <Typography
        variant="body2"
        style={{
          fontWeight: 'bold'
        }}
      >
        {title}
      </Typography>
      <Typography variant="body1">
        {label}
      </Typography>
    </Container>
  );
};

LabelGroup.propTypes = {
  label: string,
  title: string
};

export default LabelGroup;
