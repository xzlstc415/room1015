/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import FullScreenMenu from "./FullScreenMenu";

const Layout = ({ children, title = "Aoyama Design Inc." }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else if (!isMenuOpen) {
      setIsMenuOpen(true);
    }
  };

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
        {isMenuOpen ? (
          <FullScreenMenu toggleMenu={toggleMenu} />
        ) : (
          <div>
            <Navbar toggleMenu={toggleMenu} />
            <div className="wrapper">{children}</div>
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
