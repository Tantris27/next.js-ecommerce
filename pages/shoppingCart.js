import Cookies from 'js-cookie';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function ShoppingCart({ ...props }) {
  const clone = [].concat(props.cartItems);
  const [itemDemand, setItemDemand] = useState(1);

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
            <div key={sell.sellId}>
              <h3>{sell.title}</h3>
              <p>{sell.price}$</p>
              <input
                type="number"
                value={itemDemand}
                onChange={(e) => {
                  setItemDemand(e.currentTarget.value);
                  console.log(itemDemand);
                }}
              />
              <button
              // onClick={() => {
              //   const addArray = [];
              //   for (let i = 1; i < itemDemand; i++) {
              //     addArray.push(sell);
              //     return addArray;
              //   }
              //   props.setCartItems(props.cartItems.concat(addArray));
              //   console.log(props.cartItems);
              // }}
              >
                Add
              </button>
              <button
                onClick={async () => {
                  clone.splice(sell.sellid, 1);
                  clone.map((cloneItem, index) => {
                    return (cloneItem.sellId = index);
                  });
                  console.log(clone);
                  props.setCartItems(clone);
                  await Cookies.set('cartItems', JSON.stringify(clone));
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
