/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import Head from 'next/head';
import Navbar from './Navbar';
import Link from 'next/link';

const Layout = ({ children, title = 'Aoyama Design Inc.' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
      </Head>
      <div
        className="block"
        css={css`
          background-color: transparent;
        `}
      >
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
