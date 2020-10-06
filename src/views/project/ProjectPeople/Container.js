import { object } from 'prop-types';
import React, { useState, useEffect } from 'react';
import Presenters from 'src/presenters/Presenters';
import LoadingView from 'src/views/loadingView';
import View from './View';

const Container = (props) => {
  const { project } = props;
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProjectUsersFromApi = async () => {
    const usersRes = await
    Presenters.getProjectUsersFromApi(project.id);

    if (usersRes.success) {
      setUsers(usersRes.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getProjectUsersFromApi();
  }, []);

  return loading
    ? <LoadingView />
    : (
      <View
        {...props}
        container={{
          project,
          users
        }}
      />
    );
};

Container.propTypes = {
  project: object
};

export default Container;
