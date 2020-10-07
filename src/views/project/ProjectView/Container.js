import React from 'react';
import { useLocation } from 'react-router-dom';
import WithAuthGate from 'src/components/WithAuthGate';
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

const ContainerGate = () => (
  <WithAuthGate>
    {Container}
  </WithAuthGate>
);

export default ContainerGate;
