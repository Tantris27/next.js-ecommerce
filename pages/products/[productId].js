import Head from 'next/head';
import Layout from '../../components/Layout';

export default function SingleProduct({ ...props }) {
  return (
    <Layout>
      <Head>
        <title>{props.product.name}</title>
      </Head>

      <h1>{props.product.name}</h1>
      <div>product id: {props.product.id}</div>
      <div>Genre: {props.product.genre}</div>
      <div>product price: {props.product.price}</div>
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
