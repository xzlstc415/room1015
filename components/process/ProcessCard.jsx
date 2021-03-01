/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { jsx, css } from "@emotion/react";
import Fade from "react-reveal/Fade";
import Image from "next/image";

const ProcessCard = ({ id = 0, title = "" }) => {
  return (
    <Fade bottom duration={1000} distance="25px">
      <div className="flex w-screen md:mt-40">
        <div className="relative mx-auto">
          <div className="md:absolute md:-top-32 md:-left-96 h-96 md:w-processCard w-screen p-4 pt-8 md:pr-12 bg-beige-1 font text-4xl">
            <div className="flex items-center">
              <h1 className="text-8xl">0{id}</h1>
              <h1>-</h1>
              <h1>{title}</h1>
            </div>
          </div>
          <Image
            src="/temp-picture3.jpg"
            width={500}
            height={500}
            layout="fixed"
            objectFit="cover"
            quality={100}
            className=""
          />
        </div>
      </div>
    </Fade>
  );
};

export default ProcessCard;
