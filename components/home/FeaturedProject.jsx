/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { jsx } from "@emotion/react";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import LeftAlignedProject from "./LeftAlignedProject";
import RightAlignedProject from "./RightAlignedProject";

const FeaturedProject = ({
  alignment = "left",
  title = "",
  description = "",
}) => {
  return (
    <Fade bottom duration={1000} distance="25px">
      <div className="flex mt-20 mx-auto w-11/12 md:w-10/12 lg:w-10/12 mb-20 md:relative">
        {alignment === "left" ? (
          <LeftAlignedProject title={title} description={description} />
        ) : (
          <RightAlignedProject title={title} description={description} />
        )}
      </div>
    </Fade>
  );
};

export default FeaturedProject;
