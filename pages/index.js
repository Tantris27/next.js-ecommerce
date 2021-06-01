// import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home({ ...props }) {
  return (
    <Layout {...props}>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <h1>Home</h1>
      </div>
    </Layout>
  );
}
