import { css } from '@emotion/react';
import cookies from 'js-cookie';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const productGridStyle = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;
const productLinkStyle = css`
  color: black;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  background-color: grey;
  border-radius: 5px;
  width: 200px;
  height: 200px;
  padding: 20px;
`;
const linkStyle = css`
  text-decoration: none;
  justify-self: center;
`;

export default function ProductIndex({ cartItems, setCartItems, ...props }) {
  return (
    <Layout {...props}>
      <Head>
        <title>ProductsIndex</title>
      </Head>
      <div css={productGridStyle}>
        {props.products.map((product) => {
          return (
            <Link
              href={'/products/' + product.productId}
              key={product.productId}
            >
              <a css={linkStyle}>
                <div css={productLinkStyle}>
                  <h1>{product.name}</h1>
                  <div>product id: {product.productId}</div>
                  <div>Genre: {product.genre}</div>
                  <div>product price: {product.price}</div>
                  <button
                    onClick={async (e) => {
                      e.preventDefault();
                      let sellprod = { ...product };
                      sellprod.sellId = cartItems.length;
                      setCartItems([...cartItems, sellprod]);
                      sellprod = {};
                      await cookies.set(
                        'cartItems',
                        JSON.stringify([...cartItems, sellprod]),
                      );
                    }}
                  >
                    Add to Buy
                  </button>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}
export async function getServerSideProps() {
  const { products } = await import('../../util/database');
  return {
    props: {
      products: products,
    },
  };
}
