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
  max-width: 530px;
  max-height: 40px;
  border-radius: 3px;
`;

type CartItems = {
  price: string;
  sellid: number;
  title: string;
};

export default function ShoppingCart({ ...props }) {
  const clone: CartItems[] = [].concat(props.cartItems);

  const calcTotal = () => {
    let total = 0;
    for (let i = 0; i < clone.length; i++) {
      total += parseFloat(clone[i].price);
    }
    const totalPoint2 = total.toFixed(2);
    return `Total = ${totalPoint2}$`;
  };
  return (
    <Layout>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <div>
        <h1 data-cy="shoppingCart-h1">Shopping Cart</h1>
      </div>
      <div>
        {clone.map((sell) => {
          return (
            <div key={sell.sellid} css={itemStyle}>
              {console.log(sell)}
              <h3>{sell.title}</h3>
              <p>{sell.price}$</p>
              <input
                data-cy={`${sell.sellid}-amount-input`}
                type="number"
                min="1"
                onChange={async (e) => {
                  await Cookies.set(
                    `item${sell.sellid}Amount`,
                    JSON.stringify(e.currentTarget.value),
                  );
                }}
              />
              <button
                onClick={async () => {
                  const times = await Cookies.getJSON(
                    `item${sell.sellid}Amount`,
                  );
                  for (let i = 0; i < times; i++) {
                    const newItem = { ...sell };
                    clone.push(newItem);
                    clone.map((cloneItem, index) => {
                      return (cloneItem.sellid = index);
                    });
                  }
                  props.setCartItems(clone);
                  await Cookies.set(
                    'cartItems',
                    JSON.stringify(props.cartItems.length),
                  );
                  await Cookies.set(
                    `item${sell.sellid}Amount`,
                    JSON.stringify(1),
                  );
                }}
              >
                Add Amount
              </button>
              <button
                onClick={async () => {
                  clone.splice(sell.sellid, 1);
                  clone.map((cloneItem, index) => {
                    return (cloneItem.sellid = index);
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
        <button
          onClick={async () => {
            props.setCartItems([]);
            await Cookies.set('cartItems', JSON.stringify(0));
          }}
        >
          Delete All
        </button>
        <br />
        <br />
        <Link href="/checkout">
          <a>
            <button>Proceed to Payment</button>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
