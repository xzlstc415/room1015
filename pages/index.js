/** @jsxRuntime classic /
/** @jsx jsx */ jsx;

import { css, jsx } from "@emotion/react";
import BannerSection from "../components/home/BannerSection";
import FeaturedProject from "../components/home/FeaturedProject";
import Layout from "../components/shared/Layout";

const Home = () => (
  <Layout>
    <BannerSection />

    <FeaturedProject
      name="Project 1"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      imageUrl=""
    />
    <FeaturedProject
      name="Project 2"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      imageUrl=""
    />
  </Layout>
);

export default Home;
