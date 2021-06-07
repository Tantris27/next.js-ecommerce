import cookies from 'js-cookie';
import Head from 'next/head';
import Layout from '../../components/Layout';

export default function SingleProduct({ setCartItems, cartItems, ...props }) {
  if (props.book === null) {
    return (
      <Layout>
        <Head>
          <title>Product not found</title>
        </Head>
        <h3>Product not found</h3>
      </Layout>
    );
  }
  return (
    <Layout>
      <Head>
        <title>{props.book.name}</title>
      </Head>

      <h1>{props.book.name}</h1>
      <div>product id: {props.book.id}</div>
      <div>Genre: {props.book.genre}</div>
      <div>product price: {props.book.price}$</div>
      <button
        onClick={async (e) => {
          e.preventDefault();
          let sellprod = { ...props.book };
          sellprod.sellId = cartItems.length;
          setCartItems([...cartItems, sellprod]);
          sellprod = {};
          await cookies.set('cartItems', JSON.stringify(3));
        }}
      >
        Add to Buy
      </button>
      {/* <button
        onClick={async (e) => {
          e.preventDefault();
          let returnprod = { ...props.book };
          // returnprod.sellId = cartItems.length;
          setCartItems(delete cartItems.id === returnprod.productId);
          console.log(cartItems);
          returnprod = {};
          await cookies.set(
            'cartItems',
            JSON.stringify([...cartItems, returnprod]),
          );
        }}
      >
        Delete Product
      </button> */}
    </Layout>
  );
}
export async function getServerSideProps(context) {
  console.log(context);
  const bookId = await context.query.id;
  const { getBookById } = await import('../../util/database');
  const book = await getBookById(bookId);

  return {
    props: {
      book: book || null,
    },
  };
}
