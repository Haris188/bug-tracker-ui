import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LoadingView from 'src/views/loadingView';
import Presenters from 'src/presenters/Presenters';
import { element, array, oneOfType } from 'prop-types';

const WithAuthGate = (props) => {
  // const auth:any = useContext(AuthContext)
  const navigate = useNavigate();
  const [auth, setAuth] = useState({ loading: true });
  const { children } = props;
  const Child = children;

  console.log('AUTH GATE');

  const fetchCurrentUserFromApi = async () => {
    const res = await Presenters.getCurrentUser();
    if (res && res.success) {
      setAuth(res.data);
    }
  };

  useEffect(() => {
    fetchCurrentUserFromApi();
  }, []);

  if (auth.loading) {
    return LoadingView;
  }
  if (auth.loggedIn) {
    return <Child {...props} currentUser={auth} />;
  }

  navigate('/', { replace: true });
  return <></>;
};

WithAuthGate.propTypes = {
  children: oneOfType(element, array)
};

export default WithAuthGate;
