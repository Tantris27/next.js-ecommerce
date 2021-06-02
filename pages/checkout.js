import Link from 'next/link';

export default function Checkout(...props) {
  return (

    <Layout {...props}>
      <Head>
        <title>Checkout</title>
      </Head>
      <div>
      <h1>Checkout</h1>
      <p>Enter Details</p>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="06992121212" />
        <br/>
        <Link href="/thanks">
          <button>Complete Transaction</button>
        </Link>
      </form>
    </div>
    </Layout>

  );
}
