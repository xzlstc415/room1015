/** @jsxRuntime classic /
/** @jsx jsx */ jsx;

import { css, jsx } from '@emotion/react';
import Layout from '../components/shared/Layout';

const Home = () => (
  <Layout>
    <div>
      <div
        className="text-4xl"
        css={css`
          min-height: 500px;
        `}
      ></div>
    </div>
  </Layout>
);

export default Home;
