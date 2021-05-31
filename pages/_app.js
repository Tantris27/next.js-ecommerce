import { css, Global } from '@emotion/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const baseUrl = 'https://guestlistapi.herokuapp.com/';

function MyApp({ Component, pageProps }) {
  const [guestList, setGuestList] = useState([]);
  useEffect(() => {
    fetch(baseUrl).then((x) =>
      x.json().then((data) => {
        setGuestList(data);
      }),
    );
  }, []);
  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            font-family: Arial, sans-serif;
          }
        `}
      />

      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
export function getServerSideProps() {}
