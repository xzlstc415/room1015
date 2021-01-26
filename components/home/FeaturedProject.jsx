/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { jsx } from "@emotion/react";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const FeaturedProject = ({
  alignment = "left",
  title = "",
  description = "",
}) => {
  return (
    <div className="mx-auto w-11/12 md:w-10/12 lg:w-9/12 mb-20">
      <div className="absolute left-20 md:left-60 lg:left-72">
        <div className="flex flex-col lg:flex-row ">
          <Image
            src="/temp-picture2.jpg"
            width={550}
            height={425}
            objectFit="contain"
          />
          <div className="flex flex-col w-96 ml-20">
            <h2 className="">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>

      <div className="w-96 h-long bg-beige-1" />
    </div>
  );
};

export default FeaturedProject;
