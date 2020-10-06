import React from 'react';
import { object } from 'prop-types';

const View = (props) => {
  const { container } = props;
  return (
    <h1>AddTicket</h1>
  );
};

View.propTypes = {
  container: object
};

export default View;
