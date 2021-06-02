import cookies from 'js-cookie';
import Head from 'next/head';
import Layout from '../../components/Layout';

export default function SingleProduct({ setCartItems, cartItems, ...props }) {
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
          await cookies.set(
            'cartItems',
            JSON.stringify([...cartItems, sellprod]),
          );
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
  const bookId = await context.query.id;
  const { getBookById } = await import('../../util/database');
  const book = await getBookById(bookId);

  console.log(bookId);
  console.log(book);
  return {
    props: {
      book: book,
    },
  };
}
