import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function ShoppingCart({ ...props }) {
  const calcTotal = () => {
    let total = 0;
    for (let i = 0; i < props.cartItems.length; i++) {
      total += parseFloat(props.cartItems[i].price);
    }
    return `Total = ${total}$`;
  };
  return (
    <Layout>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      {console.log(props.cartItems)}
      <div>
        <h1>Shopping Cart</h1>
      </div>
      <div>
        {props.cartItems.map((sell) => {
          return <h3 key={sell.sellId}>{sell.title}</h3>;
        })}
        {calcTotal()}
        <br />
        <br />
        <Link href="/checkout">
          <button> Fix: Proceed to Payment</button>
        </Link>
      </div>
    </Layout>
  );
}
