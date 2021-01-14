/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { jsx, css } from '@emotion/react';
const AboutCard = ({name, title, description, imageUrl })=> (
<div className="bg-gray-1 p-7 mb-4">
  <h3 className="font-josefinSans">{name}</h3>
  <h4 className="font-roboto">{title}</h4>
  <p className="font-roboto">{description}</p>
</div>
)

export default AboutCard