import React from 'react';
import { useLocation } from 'react-router-dom';
import View from './View';

const Container = (props) => {
  const location = useLocation();
  const { project } = location.state;
  return (
    <View
      {...props}
      container={{
        project
      }}
    />
  );
};

export default Container;
