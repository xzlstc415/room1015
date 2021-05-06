/** @jsxRuntime classic /
/** @jsx jsx */ jsx;

import React from "react";
import { jsx, css } from "@emotion/react";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="w-80 h-80 bg-gray-400 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.ctfassets.net/fh8xyr4dylrt/12ObQsKSPzovJCQPMy4Npa/95baf9cd987c5dde69a445b96b68077d/process_image.jpeg)",
      }}
    >
      project
    </div>
  );
};

export default ProjectCard;
