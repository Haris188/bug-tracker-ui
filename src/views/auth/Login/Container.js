import React, { useState } from 'react';
import Controllers from 'src/controllers/Controllers';
import { useNavigate } from 'react-router-dom';
import View from './View';

const LoginModel = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const setDemoUserModalToOpen = () => {
    setOpen(true);
  };

  const setDemoUserModalToClose = () => {
    setOpen(false);
  };

  const handleSignIn = async (values) => {
    const signInRes = await Controllers.signin(
      values.email,
      values.password
    );

    if (signInRes.success) {
      navigate('/app/dashboard');
    } else {
      alert('Failed to signin');
    }
  };

  return (
    <View
      {...props}
      model={{
        open,
        setDemoUserModalToClose,
        setDemoUserModalToOpen,
        handleSignIn
      }}
    />
  );
};

export default LoginModel;
