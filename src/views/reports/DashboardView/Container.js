import React, { useState, useEffect } from 'react';
import WithAuthGate from 'src/components/WithAuthGate';
import Presenters from 'src/presenters/Presenters';
import LoadingView from 'src/views/loadingView';
import View from './View';

const Container = (props) => {
  const [bugStats, setBugStats] = useState(false);
  const [loading, setLoading] = useState(true);

  const getBugStatsFromApi = async () => {
    const statsRes = await
    Presenters.getAllBugStats();

    if (statsRes && statsRes.success) {
      setBugStats(statsRes.data);
    } else {
      alert('Problem occured while fetching data');
    }

    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getBugStatsFromApi();
  }, []);

  return loading
    ? <LoadingView />
    : (
      <View
        container={{
          bugStats
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
