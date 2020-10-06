import { object } from 'prop-types';
import React from 'react';
import View from './View';

const Container = (props) => {
  const { project } = props;

  return (
    <View
      {...props}
      container={{
        project
      }}
    />
  );
};

Container.propTypes = {
  project: object
};

export default Container;
