/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { jsx, css } from "@emotion/react";
import Fade from "react-reveal/Fade";
import Image from "next/image";

const ProcessCard = ({ id = 0, title = "", description = "" }) => {
  const oddOrEven = id % 2 === 0 ? "even" : "odd";
  if (oddOrEven === "odd")
    return (
      <Fade bottom duration={1000} distance="25px">
        <div className="flex md:mt-40">
          <div className="relative flex flex-col mx-auto w-screen md:w-auto">
            <div className="md:absolute md:-top-32 md:-left-96 h-96 md:w-processCard p-4 pt-6 md:pr-20 bg-beige-1 font text-4xl">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <h1 className="text-8xl mr-8">0{id}</h1>
                  <h1>{title}</h1>
                </div>
                <p className="text-xl">{description}</p>
              </div>
            </div>
            <Image
              src="/temp-picture3.jpg"
              width={500}
              height={500}
              layout="intrinsic"
              objectFit="cover"
              quality={100}
              className=""
            />
          </div>
        </div>
      </Fade>
    );

  if (oddOrEven === "even")
    return (
      <Fade bottom duration={1000} distance="25px">
        <div className="flex md:mt-40">
          <div className="relative flex flex-col mx-auto">
            <div className="md:absolute md:-top-32 md:-right-96 h-96 md:w-processCard p-4 pt-6 bg-beige-1 font text-4xl">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <h1 className="text-8xl mr-8">0{id}</h1>
                  <h1>{title}</h1>
                </div>
                <p className="text-xl md:ml-20">{description}</p>
              </div>
            </div>
            <Image
              src="/temp-picture3.jpg"
              width={500}
              height={500}
              layout="intrinsic"
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
