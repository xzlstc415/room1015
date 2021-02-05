/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { css, jsx } from "@emotion/react";
import Link from "next/link";
import NavLink from "./NavLink";
import Fade from "react-reveal/Fade";

const BigNavLink = ({ href, children, offset }) => (
  <Fade duration={600 * offset}>
    <a href={href}>
      <div className="text-4xl font-josefinSans">{children}</div>
    </a>
  </Fade>
);

const FullScreenMenu = ({ toggleMenu }) => (
  <div className="z-50 absolute w-screen h-screen bg-white">
    <div className="flex mb-14 items-center px-4">
      <Link href="/">
        <a
          css={css`
            height: 120px;
            width: 120px;
            background: url("/aoyamadesign-logo4-04.jpg") no-repeat center;
            background-size: contain;
          `}
          className="my-5 cursor-pointer"
        />
      </Link>
      <div
        className="ml-auto text-3xl font-josefinSans cursor-pointer"
        onClick={() => toggleMenu()}
      >
        Close
      </div>
    </div>
    <Fade duration={500}>
      <div className="px-8">
        <div className="flex flex-col space-y-5 mb-14">
          <BigNavLink offset={1} href="/about">
            About Us
          </BigNavLink>
          <BigNavLink offset={2} href="/projects">
            Projects
          </BigNavLink>
          <BigNavLink offset={3} href="/process">
            Process
          </BigNavLink>
          <BigNavLink offset={4} href="/blog">
            Blog
          </BigNavLink>
          <BigNavLink offset={5} href="/contact">
            Contact Us
          </BigNavLink>
        </div>
        <hr
          style={{
            color: "black",
            backgroundColor: "black",
            height: 3,
          }}
        />
        <div className="space-y-5 mt-10">
          <a href="tel:6478981510">Telephone: 647-898-1510</a>
          <div>Address: 1672A Fischer-Hallman Rd, Kitchener ON N2R 0H9</div>
        </div>
      </div>
    </Fade>
  </div>
);

export default FullScreenMenu;
