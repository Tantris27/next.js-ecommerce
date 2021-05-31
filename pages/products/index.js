import Head from 'next/head';
import Layout from '../../components/Layout';

export default function ProductIndex({ cartItems, setCartItems, ...props }) {
  console.log(props);
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
            {console.log(product)}
            <button
              onClick={() => {
                setCartItems([...cartItems, product]);
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
  return {
    props: {
      products: products,
    },
  };
}
