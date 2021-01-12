/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { css, jsx } from '@emotion/react';
import Link from 'next/link';
import NavLink from './NavLink';

const Navbar = () => (
  <div
    className="flex justify-between w-100 items-center"
    css={css`
      max-width: 1500px;
      margin: 0 auto;
      @media (min-width: 1900px) {
        padding: 0 30px;
      }
    `}
  >
    <Link href="/">
      <a
        css={css`
          height: 120px;
          width: 120px;
          background: url('/aoyamadesign-logo4-04.jpg') no-repeat center;
          background-size: contain;
        `}
        className="my-5 cursor-pointer"
      ></a>
    </Link>
    <div>
      <ul
        className="list-none p-0 flex"
        css={css`
          margin: 0 0 1em 0;
        `}
      >
        <NavLink href="/about">About Us</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/process">Process</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/contact">Contact Us</NavLink>
      </ul>
    </div>
  </div>
);

export default Navbar;
