import React from "react";

import { fetchSingleEntry } from "./contentful";
import { useRouter } from "next/router";

const useProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [projectDetails, setProjectDetails] = React.useState([]);

  console.log(id);

  const fetchProject = async () => {
    try {
      const data = await fetchSingleEntry(id);
      console.log("this is the data", data);
      if (data) {
        setProjectDetails(data);
      }
    } catch (error) {
      console.log(`fetch data from contentful is failed, error: ${error}`);
    }
  };

  const getProject = () => {
    React.useEffect(() => {
      fetchProject();
    }, [router.query.id]);
    return projectDetails;
  };

  return { getProject, fetchProject };
};

export default useProjectDetails;
