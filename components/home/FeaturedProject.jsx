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
  if (alignment === "left") {
    return (
      <div className="mt-20 mx-auto w-11/12 md:w-10/12 lg:w-10/12 mb-20 relative">
        <div className="w-96 h-long bg-beige-1 ">
          <div className="absolute top-0 left-0 ml-20 mt-10">
            <Image
              src="/temp-picture2.jpg"
              width={550}
              height={375}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    );
  }

  if (alignment === "right") {
    return (
      <div className="mt-20 mx-auto w-11/12 md:w-10/12 relative">
        <div className="w-96 h-long bg-blue-1 ml-auto mr-0">
          <div className="absolute top-0 right-0 mr-32 mt-10">
            <Image
              src="/temp-picture2.jpg"
              width={550}
              height={375}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default FeaturedProject;
