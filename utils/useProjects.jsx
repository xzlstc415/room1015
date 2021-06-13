import React from "react";
import { useRouter } from "next/router";

import { fetchEntriesForContentType } from "./contentful";

const useProjects = () => {
  const [projects, setProjects] = React.useState([]);

  const router = useRouter();

  const query = {};

  if (router.query.bath) {
    if (router.query.bath.includes(".5")) {
      const value = router.query.bath.slice(0, 1);
      query["fields.bath[gte]"] = value;
    } else {
      query["fields.bath[gte]"] = router.query.bath;
      query["fields.bath[lt]"] = (parseInt(router.query.bath) + 1).toString();
    }
  }

  if (router.query.bed) {
    if (router.query.bed.includes(".5")) {
      const value = router.query.bed.slice(0, 1);
      query["fields.bed[gte]"] = value;
    } else {
      query["fields.bed[gte]"] = router.query.bed;
      query["fields.bed[lt]"] = (parseInt(router.query.bed) + 1).toString();
    }
  }

  if (router.query.sort) {
    if (router.query.sort === "asc") {
      query.order = "fields.price";
    }
    if (router.query.sort === "desc") {
      query.order = "-fields.price";
    }
    if (router.query.sort === "") {
      query.order = "-fields.date";
    }
  }

  if (router.query.city) {
    query["fields.city"] = router.query.city;
  }

  if (router.query.status) {
    query["fields.status"] = router.query.status;
  }

  //TODO REMOVE THIS LATER
  //query.skip = 2;
  //console.log(query);

  const fetchProjects = async () => {
    try {
      const data = await fetchEntriesForContentType("Projects", query);
      console.log("this is the data", data);
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
    }, [router.query]);
    return projects;
  };

  return { getProjects, fetchProjects };
};

export default useProjects;
