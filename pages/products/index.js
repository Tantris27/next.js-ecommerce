import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/Layout';

export default function ProductIndex(props, { cartItems, setCartItems }) {
  return (
    <Layout>
      <Head>
        <title>ProductsIndex</title>
      </Head>
      {props.products.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <div>product id: {product.id}</div>
            <div>Genre: {product.genre}</div>
            <div>product price: {product.price}</div>
            <button
              onClick={() => {
                props.setCartItems(cartItems.push(product));
                console.log(props.cartItems);
              }}
            >
              Add to Buy
            </button>
          </div>
        );
      })}
    </Layout>
  );
}
export async function getServerSideProps() {
  const { products } = await import('../../util/database');
  console.log('products', products);
  return {
    props: {
      products: products,
    },
  };
}
