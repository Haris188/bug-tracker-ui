import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import View from './View';
import Controllers from '../../../controllers/Controllers';
import roles from '../../../data/roles';

const Model = (props) => {
  const [roleIndex, setRoleState] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const role = roles[roleIndex];

  const setRole = (e) => {
    setRoleState(e.target.value);
  };

  const alertFailLogin = () => {
    setLoading(false);
    alert('Login failed');
  };

  const handleSignin = async () => {
    setLoading(true);
    const signinResult = await
    Controllers.signin(
      role.email,
      role.password
    );
    if (signinResult.success) navigate('/app/dashboard');
    else alertFailLogin();
  };

  return (
    <View
      {...props}
      model={{
        role,
        roleIndex,
        roles,
        setRole,
        loading,
        handleSignin
      }}
    />
  );
};

export default Model;
