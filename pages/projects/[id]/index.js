/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { jsx } from "@emotion/react";

import Layout from "../../../components/shared/Layout";
import useProjectDetails from "../../../utils/useProjectDetails";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

const availableStyle = "bg-green-600 text-white px-2 ml-2";
const unavailableStyle = "bg-red-600 text-white px-2 ml-2";

const ProjectDetails = () => {
  const { getProject } = useProjectDetails();

  const project = getProject();

  const name = project?.fields?.name || "";
  const price = project?.fields?.price
    ? formatter.format(project.fields.price)
    : "N/A";
  const bedrooms = project?.fields?.bed || "N/A";
  const bathrooms = project?.fields?.bath || "N/A";
  const sqft = project?.fields?.sqft || "N/A";

  const status = project?.fields?.status || "";

  const images = project?.fields?.images?.map(
    (image) => `https://${image?.fields?.file?.url}`
  );

  const details = project?.fields?.details
    ? documentToReactComponents(project?.fields?.details)
    : "";

  return (
    <Layout>
      {Object.keys(project).length > 0 ? (
        <div>
          <div className="px-4  w-full md:w-8/13">
            <h1>
              {name}
              <span
                className={
                  status === "available" ? availableStyle : unavailableStyle
                }
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </h1>
            <div className="space-x-2 my-3">
              <span className="font-bold">{price}</span>
              <span>{`${bedrooms} Bed`}</span>
              <span>{`${bathrooms} Bath`}</span>
              <span>{`${sqft} sqft`}</span>
            </div>
          </div>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            autoPlay={false}
            emulateTouch={true}
          >
            {images
              ? images.map((image) => (
                  <div key={image}>
                    <img src={image} />
                  </div>
                ))
              : null}
          </Carousel>
          {details ? <div className="px-4 ">{details}</div> : null}
        </div>
      ) : null}
    </Layout>
  );
};

export default ProjectDetails;
