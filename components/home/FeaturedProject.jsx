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
    <Fade bottom duration={1000} distance="25px">
      <div className="mt-20 mx-auto w-11/12 md:w-10/12 lg:w-10/12 mb-20 relative">
        {alignment === "left" ? (
          <div className="w-96 h-long bg-beige-1 ">
            <div className="absolute top-0 left-0">
              <div className="flex flex-col md:flex-row">
                <div className="ml-20 mt-20">
                  <Image
                    src="/temp-picture2.jpg"
                    width={550}
                    height={375}
                    objectFit="contain"
                  />
                </div>
                <div className="flex flex-col ml-auto mr-0 text-center w-80 mt-5 md:mt-0 md:ml-20 text-lg">
                  <h2 className="">{title}</h2>
                  <p className="mt-3">{description}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-96 h-long bg-blue-1 ml-auto mr-0">
            <div className="absolute top-0 right-0 ">
              <div className="flex flex-col md:flex-row-reverse">
                <div className="mr-20 mt-20">
                  <Image
                    src="/temp-picture2.jpg"
                    width={550}
                    height={375}
                    objectFit="contain"
                  />
                </div>
                <div className="flex flex-col text-center w-80 mt-5 md:mt-0 md:mr-20 text-lg">
                  <h2 className="">{title}</h2>
                  <p className="mt-3">{description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fade>
  );
};

export default FeaturedProject;
