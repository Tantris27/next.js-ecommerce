import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

type Book = {
  id: number;
  title: string;
  author: string;
  imgadress: string;
  price: string;
};

// const imageDivStyle = css`
//   display: flex;
//   margin: 0 auto;
//   justify-content: space-around;
// `;
const headStyle = css`
  text-align: center;
`;
const previewStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;
const productLinkStyle = css`
  color: black;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  justify-content: flex-start;
  border-radius: 2px;
  width: 300px;
  height: 500px;
  padding: 20px;
  border: solid 1px #d7ebff;
  :hover {
    border: none;
  }
`;
const linkStyle = css`
  text-decoration: none;
  display: block;
  margin-right: 25px;
  width: 400px;
`;
const imgStyle = css`
  width: 250px;
  /* height: 250px; */
`;
export default function Home({ ...props }) {
  const previewBooks = props.books.slice(-5);
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <h1 css={headStyle}>Online Bookstore</h1>
      </div>
      {/* <div css={imageDivStyle}>
      </div> */}
      <div>
        <ul css={previewStyle}>
          {previewBooks.map((book: Book) => {
            return (
              <Link href={'/products/' + book.id} key={book.id}>
                <a css={linkStyle}>
                  <div css={productLinkStyle}>
                    <h1>{book.title}</h1>
                    <img css={imgStyle} src={book.imgadress} alt="Book Cover" />
                  </div>
                </a>
              </Link>
            );
          })}
        </ul>{' '}
      </div>
    </Layout>
  );
}
export async function getServerSideProps() {
  const { getBooks } = await import('../util/database');
  const books = await getBooks();
  return {
    props: {
      books: books,
    },
  };
}
