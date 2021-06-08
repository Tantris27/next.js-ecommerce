import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const itemStyle = css`
  display: flex;
  border: solid 1px grey;
  justify-content: space-around;
  align-items: center;
  max-width: 500px;
  max-height: 40px;
  border-radius: 3px;
`;

export default function ShoppingCart({ ...props }) {
  const clone = [].concat(props.cartItems);

  const calcTotal = () => {
    let total = 0;
    for (let i = 0; i < clone.length; i++) {
      total += parseFloat(clone[i].price);
    }
    return `Total = ${total}$`;
  };
  return (
    <Layout>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <div>
        <h1>Shopping Cart</h1>
      </div>
      <div>
        {clone.map((sell) => {
          return (
            <div key={sell.sellId} css={itemStyle}>
              <h3>{sell.title}</h3>
              <p>{sell.price}$</p>
              <input
                type="number"
                min="1"
                onChange={async (e) => {
                  await Cookies.set(
                    `item${sell.sellId}Amount`,
                    JSON.stringify(e.currentTarget.value),
                  );
                }}
              />
              <button
                onClick={async () => {
                  const times = await Cookies.getJSON(
                    `item${sell.sellId}Amount`,
                  );
                  for (let i = 0; i < times; i++) {
                    const newItem = { ...sell };
                    clone.push(newItem);
                    clone.map((cloneItem, index) => {
                      return (cloneItem.sellId = index);
                    });
                  }
                  props.setCartItems(clone);
                  await Cookies.set(
                    'cartItems',
                    JSON.stringify(props.cartItems.length),
                  );
                  // 2. 0 as Amount should delete the item???
                }}
              >
                Add Amount
              </button>
              <button
                onClick={async () => {
                  clone.splice(sell.sellid, 1);
                  clone.map((cloneItem, index) => {
                    return (cloneItem.sellId = index);
                  });
                  props.setCartItems(clone);
                  await Cookies.set('cartItems', JSON.stringify(clone.length));
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
        <br />
        <br />
        {calcTotal()}
        <br />
        <br />
        <Link href="/checkout">
          <button>Proceed to Payment</button>
        </Link>
      </div>
    </Layout>
  );
}
