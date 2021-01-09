/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { css, jsx } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ href, children }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        className="hidden sm:block relative ml-10 cursor-pointer"
        css={
          router.pathname === href
            ? css`
                color: black;
                &:before {
                  content: '';
                  position: absolute;
                  width: 100%;
                  height: 1px;
                  bottom: -21px;
                  left: 0;
                  background-color: black;
                  visibility: visible;
                  transform: scaleX(1);
                }
              `
            : css`
                transition: all 0.3s ease-in-out 0s;
                &:hover {
                  color: black;
                }
                &:before {
                  content: '';
                  position: absolute;
                  width: 100%;
                  height: 1px;
                  bottom: -21px;
                  left: 0;
                  background-color: black;
                  visibility: hidden;
                  transform: scaleX(0);
                  transition: all 0.3s ease-in-out 0s;
                }
                &:hover:before {
                  visibility: visible;
                  transform: scaleX(1);
                }
              `
        }
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
