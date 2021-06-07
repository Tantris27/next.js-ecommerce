import Head from 'next/head';
import Layout from '../components/Layout';

export default function About({ ...props }) {
  return (
    <Layout {...props}>
      <Head>
        <title>About</title>
      </Head>
      <div>
        <h1>About</h1>
      </div>
    </Layout>
  );
}
