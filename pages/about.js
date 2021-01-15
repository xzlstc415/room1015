import Layout from "../components/shared/Layout";
import Image from "next/image";
import AboutCard from "../components/about/AboutCard";
import Fade from "react-reveal/Fade";

const About = () => (
  <Layout>
    <div className="mx-auto w-12/13 md:w-10/13 lg:w-8/13 mb-10">
      <div className="my-10 lg:mb-36 lg:mt-24 lg:h-60v">
        <Fade bottom duration={1000} distance="25px">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="mr-6 md:w-9/13 lg:w-7/13">
              <h2 className="text-4xl mb-10 font-josefinSans">About Us</h2>
              <p className="font-roboto">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
            <Image src="/../public/temp-picture.png" width={600} height={458} />
          </div>
        </Fade>
      </div>

      <AboutCard
        name="Aoyama Kaede"
        title="CEO/Senior designer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
      />
      <AboutCard
        name="Lee Xing"
        title="Co-founder/COO"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
      />
      <AboutCard
        name="Kenny Cao"
        title="Renovation specialist"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
      />
    </div>
  </Layout>
);

export default About;
