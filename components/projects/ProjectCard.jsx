/** @jsxRuntime classic /
/** @jsx jsx */ jsx;

import React from "react";
import { jsx, css } from "@emotion/react";
import { useRouter } from "next/router";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

const ProjectCard = ({ project }) => {
  const router = useRouter();

  const name = project.fields.name;
  const id = project.sys.id;
  const bedrooms = project.fields.bed ?? "N/A";
  const bathrooms = project.fields.bath ?? "N/A";
  const price = project.fields.price
    ? formatter.format(project.fields.price)
    : "N/A";

  const cardDescription = `${price} ${bedrooms} Bed ${bathrooms} Bath 1000sqft`;

  return (
    <div className="w-80 ">
      <div
        onClick={() =>
          router.push({
            pathname: `/projects/${id}`,
          })
        }
        className="w-full h-80 bg-gray-400 bg-cover bg-center cursor-pointer"
        style={{
          backgroundImage:
            "url(https://images.ctfassets.net/fh8xyr4dylrt/12ObQsKSPzovJCQPMy4Npa/95baf9cd987c5dde69a445b96b68077d/process_image.jpeg)",
        }}
      ></div>
      <p className="whitespace-nowrap overflow-ellipsis overflow-hidden">
        {name}
      </p>
      <p>{cardDescription}</p>
    </div>
  );
};

export default ProjectCard;
