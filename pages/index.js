import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <h1>Home</h1>
      </div>
    </Layout>
  );
}
