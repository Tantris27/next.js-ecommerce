import Head from 'next/head';
import Layout from '../../components/Layout';

export default function SingleProduct(props) {
  return (
    <Layout>
      <Head>
        <title>{props.products.name}</title>
      </Head>

      <h1>{props.products.name}</h1>
      <div>product id: {props.products.id}</div>
      <div>Genre: {props.products.genre}</div>
      <div>product price: {props.products.price}</div>
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
