/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { jsx } from "@emotion/react";
import Image from "next/image";

//const showLeftOrRight = id % 2 === 0 ? "right" : "left";

const Container = ({ children }) => (
  <div className="h-auto mx-auto md:mx-0 md:w-96 md:h-lg md:bg-beige-1 ">
    {children}
  </div>
);

const Absolute = ({ children }) => (
  <div className="block md:absolute top-0 md:left-0">{children}</div>
);

const Flex = ({ children }) => (
  <div className="inline-block md:w-full mx-auto md:flex-row md:flex">
    {children}
  </div>
);

const TextCard = ({ title, description }) => (
  <div className="bg-beige-1 md:bg-white p-4 flex flex-col text-left md:text-center w-80 mt-5 md:mt-5 md:ml-20 text-lg">
    <h2 className="">{title}</h2>
    <p className="mt-3">{description}</p>
  </div>
);

const LeftAlignedProject = ({ title, description }) => {
  return (
    <Container>
      <Absolute>
        <Flex>
          <div className="mx-auto md:mx-0 md:ml-20 mt-20 shadow-featuredProjectLeft md:shadow-none">
            <Image
              src="/temp-picture2.jpg"
              width={600}
              height={400}
              objectFit="contain"
            />
          </div>
          <TextCard title={title} description={description} />
        </Flex>
      </Absolute>
    </Container>
  );
};

export default LeftAlignedProject;
