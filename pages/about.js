import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../components/Layout';

const headerStyle = css`
  text-align: center;
  background-color: white;
  color: black;
`;
const divStyle = css`
  /* background-color: rgba(0, 0, 0, 0.8); */
  color: black;
  display: flex;
  justify-content: center;
`;
const paraStyle = css`
  text-justify: center;
  width: 350px;
  color: black;
`;
const backgroundStyle = css`
  background-image: url('https://cdn.vox-cdn.com/thumbor/M5rDWTrF8CLRL6WguJD7Kiq8fUY=/0x313:4368x2600/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19883819/shutterstock_117304297.jpg');
  height: 625px;
  opacity: 0.5;
`;

export default function About({ ...props }) {
  return (
    <Layout {...props}>
      <Head>
        <title>About</title>
      </Head>
      {/* <div css={backgroundStyle}> */}
      <h1 css={headerStyle}>About Us</h1>
      <div css={divStyle}>
        <p css={paraStyle}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
      {/* </div> */}
    </Layout>
  );
}
