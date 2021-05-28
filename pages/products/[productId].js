import Head from 'next/head';
import Layout from '../../components/Layout';

export default function SingleProduct(props) {
  return (
    <Layout>
      <Head>
        <title>
          {props.product.firstName} {props.product.lastName}
        </title>
      </Head>

      <h1>
        {props.product.firstName} {props.product.lastName}
      </h1>
      <div>user id: {props.product.id}</div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  // The name inside the square brackets of the filename
  // is inside of the `context.query` object
  const productId = context.query.productId;

  const { products } = await fetch('https://guestlistapi.herokuapp.com/');

  const product = products.find((p) => p.id === productId);

  return {
    props: {
      product,
    },
  };
}
