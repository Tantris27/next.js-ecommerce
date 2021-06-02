import Head from 'next/head';
import Layout from '../components/Layout';

export default function Checkout({ ...props }) {
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
        <title>Checkout</title>
      </Head>
      {console.log(props.cartItems)}
      <div>
        <h1>Checkout</h1>
      </div>
      <div>
        {props.cartItems.map((sell) => {
          return <h3 key={sell.sellId}>{sell.name}</h3>;
        })}
        {calcTotal()}
      </div>
    </Layout>
  );
}
