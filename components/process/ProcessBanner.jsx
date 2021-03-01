/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { jsx, css } from "@emotion/react";
import Fade from "react-reveal/Fade";
import Image from "next/image";

const ProcessBanner = () => (
  <Fade bottom duration={1000} distance="25px">
    <div className="relative flex justify-center w-screen">
      <Image
        priority={true}
        src="/temp-picture4.jpg"
        width={2500}
        height={500}
        layout="fixed"
        objectFit="cover"
        quality={100}
        objectPosition="50% 75%"
        className="opacity-60 "
      />
      <div className="absolute bottom-0 p-6 bg-white font text-4xl">
        Our Service
      </div>
    </div>
  </Fade>
);

export default ProcessBanner;
