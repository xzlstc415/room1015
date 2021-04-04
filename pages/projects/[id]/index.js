import Layout from "../../../components/shared/Layout";
import Image from "next/image";

const ProjectDetails = () => (
  <Layout>
    <div className="relative flex justify-center w-screen">
      <Image
        priority={true}
        src="/temp-picture4.jpg"
        width={2500}
        height={500}
        layout="fixed"
        objectFit="cover"
        quality={50}
        objectPosition="50% 75%"
        className="opacity-60 "
      />
    </div>

    <div>
      <h1 className="flex justify-center">Project Details</h1>
      <p className="flex mx-auto w-11/13 md:w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>

    <div className="w-10/12 mx-auto">
      <div className="grid grid-flow-row grid-cols-4 grid-rows-4 gap-4">
        <div className="bg-red-100 col-span-2 row-span-2 h-96">1</div>
        <div className="bg-red-100">2</div>
        <div className="bg-red-100">3</div>
        <div className="bg-red-100">4</div>
        <div className="bg-red-100">5</div>
        <div className="bg-red-100">6</div>
        <div className="bg-red-100">7</div>
        <div className="bg-red-100">8</div>
        <div className="bg-red-100">9</div>
        <div className="bg-red-100">10</div>
        <div className="bg-red-100">11</div>
        <div className="bg-red-100">12</div>
        <div className="bg-red-100">12</div>
        <div className="bg-red-100">12</div>
        <div className="bg-red-100">12</div>
        <div className="bg-red-100">12</div>
        <div className="bg-red-100">12</div>
        <div className="bg-red-100">12</div>
      </div>
    </div>
  </Layout>
);

export default ProjectDetails;
