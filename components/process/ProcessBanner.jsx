/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { jsx, css } from "@emotion/react";
import Fade from "react-reveal/Fade";
import Image from "next/image";

const ProcessBanner = () => (
  <div className="relative flex justify-center w-screen full-bleed min-h-200">
    <Image
      priority={true}
      src="/temp-picture4.jpg"
      width={2500}
      height={500}
      layout="intrinsic"
      objectFit="cover"
      quality={50}
      objectPosition="50% 75%"
      className="opacity-60 "
    />
    <div className="absolute bottom-0 lg:mr-processBannerOffset p-6 bg-white font text-4xl">
      Our Service
    </div>
  </div>
);

export default ProcessBanner;
