/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { jsx, css } from '@emotion/react';
import Fade from "react-reveal/Fade";

const AboutCard = ({name, title, description, imageUrl })=> (
  <Fade bottom duration={1000} distance="25px">
    <div className="bg-gray-1 p-7 mb-4">
      <h3 className="font-josefinSans">{name}</h3>
      <h4 className="font-roboto">{title}</h4>
      <p className="font-roboto">{description}</p>
    </div>
  </Fade>
)

export default AboutCard