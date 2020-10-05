import React from 'react';
import { useLocation } from 'react-router-dom';
import View from './View';

const Container = (props) => {
  const location = useLocation();
  const { ticket } = location.state;

  return (
    <View
      {...props}
      container={{
        ticket
      }}
    />
  );
};

export default Container;
