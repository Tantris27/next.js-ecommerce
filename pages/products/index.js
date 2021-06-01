import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function ProductIndex({ cartItems, setCartItems, ...props }) {
  // console.log(props);
  return (
    <Layout {...props}>
      <Head>
        <title>ProductsIndex</title>
      </Head>
      {props.products.map((product) => {
        return (
          <Link href={'/products/' + product.productId} key={product.productId}>
            <a>
              <h1>{product.name}</h1>
              <div>product id: {product.productId}</div>
              <div>Genre: {product.genre}</div>
              <div>product price: {product.price}</div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  let sellprod = { ...product };
                  sellprod.sellId = cartItems.length;
                  setCartItems([...cartItems, sellprod]);
                  sellprod = {};
                }}
              >
                Add to Buy
              </button>
            </a>
          </Link>
        );
      })}
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
