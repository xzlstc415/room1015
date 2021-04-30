import React from 'react';

import { fetchEntriesForContentType } from './contentful';

const useProcesses = () => {
  const [Processes, setProcesses] = React.useState([]);

  const fetchProcesses = async () => {
    try {
      const data = await fetchEntriesForContentType('Processes');
      if (data) {
        setProcesses(data);
      }
    } catch (error) {
      console.log(`fetch data from contentful is failed, error: ${error}`);
    }
  };

  const getProcesses = () => {
    React.useEffect(() => {
      fetchProcesses();
    }, []);
    return Processes;
  };

  return { getProcesses, fetchProcesses };
};

export default useProcesses;
