import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../components/Layout';

const divStyle = css`
  text-align: center;
  align-items: center;
  padding-top: 200px;
`;

export default function Thanks() {
  return (
    <Layout>
      <Head>
        <title>Thanks</title>
      </Head>
      <div css={divStyle}>
        <h1>Thank You</h1>
        <h1> Please come Again</h1>
      </div>
    </Layout>
  );
}
