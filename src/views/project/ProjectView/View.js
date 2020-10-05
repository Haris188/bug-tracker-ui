import { object } from 'prop-types';
import React from 'react';

const View = (props) => {
  const { container } = props;

  return (
    <h1>{`project: ${container.project.id}`}</h1>
  );
};

View.propTypes = {
  container: object
};

export default View;
