/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { jsx } from "@emotion/react";
import Image from "next/image";

const Container = ({ children }) => (
  <div className="mx-auto md:ml-auto md:mr-0 h-auto md:w-96 md:h-lg md:bg-blue-1 ">
    {children}
  </div>
);

const Absolute = ({ children }) => (
  <div className="block md:absolute top-0 right-0 ">{children}</div>
);

const Flex = ({ children }) => (
  <div className="inline-block md:flex-row-reverse md:flex">{children}</div>
);

const TextCard = ({ title, description }) => (
  <div className="bg-blue-1 ml-auto mr-0 md:bg-white p-4 flex flex-col text-left md:text-center w-80 mt-5 md:mt-5 md:mr-20 text-lg">
    <h2 className="">{title}</h2>
    <p className="mt-3 ">{description}</p>
  </div>
);

const RightAlignedProject = ({ title, description }) => {
  return (
    <Container>
      <Absolute>
        <Flex>
          <div className="mt-10 md:mx-0 md:mr-20 md:mt-20 shadow-featuredProjectRight md:shadow-none">
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

export default RightAlignedProject;
