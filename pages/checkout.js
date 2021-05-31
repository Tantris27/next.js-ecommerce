import Head from 'next/head';
import Layout from '../components/Layout';

export default function Checkout({ cartItems }) {
  return (
    <Layout>
      <Head>
        <title>Checkout</title>
      </Head>
      <div>
        <h1>Checkout</h1>
        <h1>{cartItems}</h1>
      </div>
    </Layout>
  );
}
