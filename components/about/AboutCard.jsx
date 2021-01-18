/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { jsx, css } from "@emotion/react";
import Fade from "react-reveal/Fade";
import Image from "next/image";

const AboutCard = ({
  name,
  title,
  description,
  image,
  imagePosition = "left",
}) => (
  <Fade bottom duration={1000} distance="25px">
    <div
      className={
        (imagePosition === "left" ? "flex-col flex" : "flex flex-col-reverse") +
        " bg-gray-1 mb-4 p-3 md:p-0 lg:p-0 md:bg-transparent lg:bg-transparent md:mx-0 lg:mx-0 md:flex-row lg:flex-row"
      }
    >
      {imagePosition === "left" && image ? (
        <div className=" mx-auto bg-gray-1 md:mr-4 lg:mr-4">
          <Image
            src="/../public/temp-picture.png"
            width={250}
            height={300}
            layout="fixed"
            objectFit="cover"
            quality={100}
          />
        </div>
      ) : null}

      <div className="bg-gray-1 p-11 ">
        <h3 className="font-josefinSans">{name}</h3>
        <h4 className="font-roboto mb-3">{title}</h4>
        <p className="font-roboto">{description}</p>
      </div>

      {imagePosition === "right" && image ? (
        <div className=" mx-auto bg-gray-1 md:ml-4 lg:ml-4">
          <Image
            src="/../public/temp-picture.png"
            width={250}
            height={300}
            layout="fixed"
            objectFit="cover"
          />
        </div>
      ) : null}
    </div>
  </Fade>
);

export default AboutCard;
