import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import View from './View';
import Controllers from '../../../controllers/Controllers';
import roles from '../../../data/roles';

const Model = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSignupSubmit = async (values) => {
    setLoading(true);

    const signupResult = await Controllers.signup({
      accountData: {
        name: values.firstName,
        email: values.email,
        password: values.password,
        role: roles[values.role].title.toLowerCase()
      },
      userSpecificData: {}
    });

    const loginResult = signupResult.success
    && await
    Controllers.signin(values.email, values.password);

    if (loginResult.success) navigate('/app/dashboard');
    else {
      alert('Failed to sign in');
      setLoading(false);
    }
  };

  return (
    <View
      {...props}
      model={{
        roles,
        handleSignupSubmit,
        loading,
      }}
    />
  );
};

export default Model;
