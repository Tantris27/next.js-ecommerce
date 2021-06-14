import { css } from '@emotion/react';
import cookies from 'js-cookie';
import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/Layout';

const bigStyle = css`
  display: flex;
  width: 80%;
  text-justify: center;
  justify-content: center;
  color: black;
`;
const headerStyle = css`
  background-color: white;
  color: black;
`;
const divStyle = css`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
`;
const paraStyle = css`
  text-justify: center;
  color: black;
  width: 300px;
`;
const contentStyle = css`
  display: flex;
  flex-direction: column;
  /* text-justify: center; */
  color: black;
  justify-content: flex-end;
  align-items: stretch;
`;
const imageStyle = css`
  width: 250px;
  height: 400px;
`;

export default function SingleProduct({ setCartItems, cartItems, ...props }) {
  const [amount, setAmount] = useState();
  const [count, setCount] = useState(1);

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
        <title>{props.book.title}</title>
      </Head>
      <div css={bigStyle}>
        <div css={divStyle}>
          <h1 css={headerStyle}>{props.book.title}</h1>
          <img css={imageStyle} src={props.book.imgadress} alt="Book Cover" />
        </div>
        <div css={contentStyle}>
          <div css={paraStyle}>
            <h4>Beschreibung:</h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
          <input
            type="number"
            onChange={(e) => setCount(e.currentTarget.value)}
            min="1"
          />
          <button
            onClick={() => {
              let array = [];
              for (let i = 0; i < count; i++) {
                array.push(props.book);
              }
              setCartItems([...array]);
              // console.log(cartItems);
            }}
          >
            Add to Cart
          </button>
          {/* <button
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
          </button> */}
          <br />
          {/* <br /> */}
          <div>Genre: {props.book.genre}</div>
          <div>Price: {props.book.price}$</div>
          <div>ISBN: 978-3-16-148410-0</div>
        </div>
      </div>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const bookId = await context.query.id;
  const { getBookById } = await import('../../util/database');
  const book = await getBookById(bookId);

  return {
    props: {
      book: book || null,
    },
  };
}
