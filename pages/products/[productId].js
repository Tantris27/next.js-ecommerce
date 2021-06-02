import cookies from 'js-cookie';
import Head from 'next/head';
import Layout from '../../components/Layout';

export default function SingleProduct({ setCartItems, cartItems, ...props }) {
  return (
    <Layout>
      <Head>
        <title>{props.product.name}</title>
      </Head>

      <h1>{props.product.name}</h1>
      <div>product id: {props.product.id}</div>
      <div>Genre: {props.product.genre}</div>
      <div>product price: {props.product.price}</div>
      <button
        onClick={async (e) => {
          e.preventDefault();
          let sellprod = { ...props.product };
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
      <button
        onClick={async (e) => {
          e.preventDefault();
          let returnprod = { ...props.product };
          // returnprod.sellId = cartItems.length;
          setCartItems(delete cartItems.productId === returnprod.productId);
          console.log(cartItems);
          returnprod = {};
          await cookies.set(
            'cartItems',
            JSON.stringify([...cartItems, returnprod]),
          );
        }}
      >
        Delete Product
      </button>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const bookId = context.query.productId;
  const { products } = await import('../../util/database');
  const product = products.find((book) => book.productId === parseInt(bookId));

  console.log('product', product);
  return {
    props: {
      product: product,
    },
  };
}
