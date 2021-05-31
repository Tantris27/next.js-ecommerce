import Head from 'next/head';
import Layout from '../components/Layout';

export default function Checkout({ cartItems }) {
  const calcTotal = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += parseFloat(cartItems[i].price);
    }
    return `Total = ${total}$`;
  };
  return (
    <Layout>
      <Head>
        <title>Checkout</title>
      </Head>
      <div>
        <h1>Checkout</h1>
      </div>
      <div>
        {cartItems.map((sell) => {
          return <h3 key={sell.sellid}>{sell.name}</h3>;
        })}
        {calcTotal()}
      </div>
    </Layout>
  );
}
