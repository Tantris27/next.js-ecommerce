import { css, Global } from '@emotion/react';
import Head from 'next/head';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);
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
      <Component
        {...pageProps}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </>
  );
}

export default MyApp;
// export function getServerSideProps() {}
