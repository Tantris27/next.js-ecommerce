import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Checkout() {
  return (
    <Layout>
      <Head>
        <title>Checkout</title>
      </Head>
      <div>
        <h1>Checkout</h1>
        <p>Enter Details</p>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="0699 212 1212" />
          <br />
          <br />
          <Link href="/thanks">
            <button>Complete Transaction</button>
          </Link>
        </form>
      </div>
    </Layout>
  );
}
