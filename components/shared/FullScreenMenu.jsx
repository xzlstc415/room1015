/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { css, jsx } from "@emotion/react";
import Link from "next/link";
import NavLink from "./NavLink";
import Fade from "react-reveal/Fade";

const BigNavLink = ({ href, children, offset }) => (
  <a href={href}>
    <h2 className="text-4xl font-josefinSans">{children}</h2>
  </a>
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
    <div className="px-8">
      <Fade duration={500} cascade>
        <ul className="flex flex-col space-y-5 mb-14">
          <li>
            <BigNavLink offset={1} href="/about">
              About Us
            </BigNavLink>
          </li>
          <li>
            <BigNavLink offset={2} href="/projects">
              Projects
            </BigNavLink>
          </li>
          <li>
            <BigNavLink offset={3} href="/process">
              Process
            </BigNavLink>
          </li>
          <li>
            <BigNavLink offset={4} href="/blog">
              Blog
            </BigNavLink>
          </li>
          <li>
            <BigNavLink offset={5} href="/contact">
              Contact Us
            </BigNavLink>
          </li>
        </ul>
      </Fade>

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
  </div>
);

export default FullScreenMenu;
