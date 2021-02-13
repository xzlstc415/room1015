/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { jsx } from "@emotion/react";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const BannerSection = () => {
  return (
    <Fade bottom duration={1000} distance="25px">
      <div className="flex flex-col items-center mt-5 mx-auto w-11/12 md:mb-40 md:mt-0 lg:mt-0 md:w-10/12 lg:w-9/12 md:flex-row lg:flex-row">
        <div className="flex flex-col mb-10 items-center md:items-start lg:items-start w-10/12 md:mr-3 lg:mr-6 md:w-4/12 lg:w-5/12 space-y-4">
          <div className="text-2xl font-josefinSans text-center md:text-left md:text-3xl lg:text-5xl lg:leading-normal">
            Custom design + Affordable renovations. We help you build a dream
            living experience.
          </div>
          <button className="bg-green-400 p-4 w-50 rounded-3xl text-white shadow-md">
            Request a Quote Today
          </button>
        </div>
        <div className="ml-auto">
          <Image
            src="/temp-picture.png"
            width={600}
            height={500}
            objectFit="contain"
          />
        </div>
      </div>
    </Fade>
  );
};

export default BannerSection;
