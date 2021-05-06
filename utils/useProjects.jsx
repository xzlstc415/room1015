import React from "react";

import { fetchEntriesForContentType } from "./contentful";

const useProjects = () => {
  const [projects, setProjects] = React.useState([]);

  const fetchProjects = async () => {
    try {
      const data = await fetchEntriesForContentType("Projects", "fields.name");
      console.log(data);
      if (data) {
        setProjects(data);
      }
    } catch (error) {
      console.log(`fetch data from contentful is failed, error: ${error}`);
    }
  };

  const getProjects = () => {
    React.useEffect(() => {
      fetchProjects();
    }, []);
    return projects;
  };

  return { getProjects, fetchProjects };
};

export default useProjects;
