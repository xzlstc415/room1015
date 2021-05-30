/** @jsxRuntime classic /
/** @jsx jsx */ jsx;

import { jsx } from "@emotion/react";
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
  const sqft = project.fields.sqft ?? "N/A";
  const price = project.fields.price
    ? formatter.format(project.fields.price)
    : "N/A";

  const cardDescription = `${price} ${bedrooms} Bed ${bathrooms} Bath ${sqft}sqft`;

  const image =
    "url(https:" + project?.fields?.images?.[0]?.fields?.file?.url + ")" || "";

  return (
    <div className="w-11/13 h-auto  md:w-80 ">
      <div
        onClick={() =>
          router.push({
            pathname: `/projects/${id}`,
          })
        }
        className="w-full h-80 bg-gray-400 bg-cover bg-center cursor-pointer"
        style={{
          backgroundImage: image,
        }}
      />
      <p className="whitespace-nowrap overflow-ellipsis overflow-hidden">
        {name}
      </p>
      <p>{cardDescription}</p>
    </div>
  );
};

export default ProjectCard;
