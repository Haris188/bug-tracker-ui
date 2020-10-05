import React, { useState } from 'react';
import View from './View';

const LoginModel = (props) => {
  const [open, setOpen] = useState(false);

  const setDemoUserModalToOpen = () => {
    setOpen(true);
  };

  const setDemoUserModalToClose = () => {
    setOpen(false);
  };

  return (
    <View
      {...props}
      model={{
        open,
        setDemoUserModalToClose,
        setDemoUserModalToOpen,
      }}
    />
  );
};

export default LoginModel;
