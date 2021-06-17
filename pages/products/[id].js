import { css } from '@emotion/react';
// import { NextPageContext } from 'next';
// import cookies from 'js-cookie';
import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/Layout';

const bigStyle = css`
  display: flex;
  width: 80%;
  text-justify: center;
  justify-content: space-evenly;
  color: black;
`;
const headerStyle = css`
  background-color: white;
  color: black;
`;
const headerStyle2 = css`
  background-color: white;
  color: black;
  text-align: center;
`;
const divStyle = css`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
const inputStyle = css`
  width: 50px;
`;
const addButtonStyle = css``;
const priceStyle = css`
  font-size: 20px;
`;
const priceDivStyle = css`
  align-self: center;
  text-align: center;
  justify-content: center;
`;
// type Cartitems={
//   Books[]
// }
export default function SingleProduct({ cartItems, setCartItems, ...props }) {
  // const [amount, setAmount] = useState();
  const [count, setCount] = useState(1);

  if (props.book === null) {
    return (
      <Layout>
        <Head>
          <title>Product not found</title>
        </Head>
        <h3 css={headerStyle2} data-cy="product-page-not-found">
          Product not found
        </h3>
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
          <h1 data-cy={`product-${props.book.id}-h1`} css={headerStyle}>
            {props.book.title}
          </h1>
          <img css={imageStyle} src={props.book.imgadress} alt="Book Cover" />
        </div>
        <div css={contentStyle}>
          <div css={paraStyle}>
            <br />
            <br />
            <br />
            <div>{props.book.author}</div>
            <br />
            <br />

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
        </div>
        <div css={priceDivStyle}>
          <div>Genre: {props.book.genre}</div>
          <div>ISBN: 978-3-16-148410-0</div>
          <br />
          <br />
          <br />
          <br />
          <div css={priceStyle}>Price: {props.book.price}$</div>
          <input
            css={inputStyle}
            type="number"
            onChange={(e) => setCount(e.currentTarget.value)}
            min="1"
          />
          <button
            css={addButtonStyle}
            data-cy={`product-page-${props.book.id}-add-button`}
            onClick={() => {
              const array = [];
              for (let i = 0; i < count; i++) {
                array.push(props.book);
              }
              array.concat(cartItems);
              console.log(array);

              setCartItems(array);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Layout>
  );
}
// :NextPageContext
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
