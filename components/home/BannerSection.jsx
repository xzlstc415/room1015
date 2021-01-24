/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { jsx } from "@emotion/react";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const BannerSection = () => {
  return (
    <Fade bottom duration={1000} distance="25px">
      <div className="flex flex-col items-center mx-auto w-11/12 lg:w-9/12 md:flex-row lg:flex-row">
        <div className="w-10/12 lg:w-5/12 space-y-4">
          <div className="text-4xl font-josefinSans">
            Custom design + Affordable renovations. We help you build a dream
            living experience.
          </div>
          <button className="bg-green-400 p-4 rounded-2xl text-white shadow-md">
            Request a Quote
          </button>
        </div>
        <Image src="/temp-picture.png" width={600} height={458} />
      </div>
    </Fade>
  );
};

export default BannerSection;
