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
        <div className="flex lg:mt-40">
          <div className="relative flex flex-col mx-auto w-screen lg:w-auto">
            <div className="lg:absolute lg:-top-32 lg:-left-80 h-96 lg:w-processCard p-4 pt-6 lg:pr-20 bg-beige-1 font text-4xl">
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
              width={450}
              height={450}
              layout="intrinsic"
              objectFit="cover"
              quality={75}
              className=""
            />
          </div>
        </div>
      </Fade>
    );

  if (oddOrEven === "even")
    return (
      <Fade bottom duration={1000} distance="25px">
        <div className="flex lg:mt-40">
          <div className="relative flex flex-col mx-auto">
            <div className="lg:absolute lg:-top-32 lg:-right-80 h-96 lg:w-processCard p-4 pt-6 bg-beige-1 font text-4xl">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <h1 className="text-8xl mr-8">0{id}</h1>
                  <h1>{title}</h1>
                </div>
                <p className="text-xl lg:ml-20">{description}</p>
              </div>
            </div>
            <Image
              src="/temp-picture3.jpg"
              width={450}
              height={450}
              layout="intrinsic"
              objectFit="cover"
              quality={75}
              className=""
            />
          </div>
        </div>
      </Fade>
    );
};

export default ProcessCard;
