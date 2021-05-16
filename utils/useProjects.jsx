import React from "react";
import { useRouter } from "next/router";

import { fetchEntriesForContentType } from "./contentful";

const useProjects = () => {
  const [projects, setProjects] = React.useState([]);

  const router = useRouter();
  console.log(router.query);

  const query = {};

  if (router.query.bath) {
  }

  const fetchProjects = async () => {
    try {
      const data = await fetchEntriesForContentType("Projects", {
        "fields.bath[gte]": 2,
      });
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
