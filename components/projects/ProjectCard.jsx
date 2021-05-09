/** @jsxRuntime classic /
/** @jsx jsx */ jsx;

import React from "react";
import { jsx, css } from "@emotion/react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

const ProjectCard = ({ project }) => {
  const name = project.fields.name;
  const id = project.sys.id;
  const bedrooms = project.fields.bed ?? "N/A";
  const bathrooms = project.fields.bath ?? "N/A";
  const price = project.fields.price
    ? formatter.format(project.fields.price)
    : "N/A";

  const cardDescription = `${price} ${bedrooms} Bed ${bathrooms} Bath 1000sqft`;

  return (
    <div>
      <div
        className="w-80 h-80 bg-gray-400 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.ctfassets.net/fh8xyr4dylrt/12ObQsKSPzovJCQPMy4Npa/95baf9cd987c5dde69a445b96b68077d/process_image.jpeg)",
        }}
      ></div>
      <p>{name}</p>
      <p>{cardDescription}</p>
    </div>
  );
};

export default ProjectCard;
