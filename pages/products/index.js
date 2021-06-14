import { css } from '@emotion/react';
import cookies from 'js-cookie';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const productGridStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 15px 0px;
  width: 80%;
  margin: 100px auto 0;
`;
const productLinkStyle = css`
  color: black;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  /* background-color: #d7ebff; */
  border-radius: 2px;
  width: 250px;
  height: 600px;
  padding: 20px;
  justify-content: space-between;
  :hover {
    /* background-color: #bdb7b7; */
    border: solid 1px #3d8ca3;
  }
`;
const linkStyle = css`
  text-decoration: none;
  justify-self: center;
`;
const imageStyle = css`
  width: 200px;
  height: 400px;
`;

export default function ProductIndex({ cartItems, setCartItems, ...props }) {
  return (
    <Layout {...props}>
      <Head>
        <title>Products</title>
      </Head>
      <div css={productGridStyle}>
        {props.books.map((book) => {
          return (
            <Link href={'/products/' + book.id} key={book.id}>
              <a css={linkStyle}>
                <div css={productLinkStyle}>
                  <h1>{book.title}</h1>
                  {/* <div css={imageStyle}> */}
                  <img src={book.imgadress} alt="Book Cover" />
                  {/* </div> */}
                  {/* <div>Genre: {book.genre}</div>
                  <div>product price: {book.price}$</div> */}
                  <button
                    onClick={async (e) => {
                      e.preventDefault();
                      let sellprod = { ...book };
                      sellprod.sellId = cartItems.length;
                      setCartItems([...cartItems, sellprod]);
                      sellprod = {};
                      await cookies.set(
                        'cartItems',
                        JSON.stringify([cartItems.length]),
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
  const { getBooks } = await import('../../util/database');
  const books = await getBooks();
  return {
    props: {
      books: books,
    },
  };
}
