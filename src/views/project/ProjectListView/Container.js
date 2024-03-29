import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Controllers from 'src/controllers/Controllers';
import Presenters from 'src/presenters/Presenters';
import LoadingView from 'src/views/loadingView';
import WithAuthGate from 'src/components/WithAuthGate';
import { object } from 'prop-types';
import View from './View';

const Container = (props) => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = props;

  const getProjectsFromApi = async () => {
    const projectsResult = await
    Presenters.getAllProjects();

    if (projectsResult.success) {
      setProjects(projectsResult.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getProjectsFromApi();
  }, []);

  const deleteProject = async (id) => {
    const result = await
    Controllers.deleteProject(id);

    if (result.success) {
      setLoading(true);
      await getProjectsFromApi();
    } else {
      setLoading(false);
      alert('Deletion failed');
    }
  };

  const navigateToProject = (project) => {
    navigate('/app/projects/project', { state: { project } });
  };

  const navigateToDetails = (project) => {
    navigate('/app/project', { state: { project } });
  };

  const navigateToAddProject = () => {
    navigate('/app/addproject', { replace: true });
  };

  return loading
    ? <LoadingView />
    : (
      <View
        container={{
          projects,
          deleteProject,
          navigateToProject,
          navigateToDetails,
          navigateToAddProject,
          currentUser
        }}
      />
    );
};

Container.propTypes = {
  currentUser: object
};

const ContainerGate = () => (
  <WithAuthGate>
    {Container}
  </WithAuthGate>
);

export default ContainerGate;
