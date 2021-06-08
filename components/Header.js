import { css } from '@emotion/react';
import cookies from 'js-cookie';
import Link from 'next/link';

const aStyle = css`
  margin-top: 5px;
  color: white;
  cursor: pointer;
  :hover {
    color: grey;
  }
`;
const picDivStyle = css`
  display: flex;
  width: 50px;
  height: 30px;
  color: white;
  justify-content: space-around;
  align-items: center;
`;
const picStyle = css`
  width: 30px;
  height: 30px;
  color: white;
  cursor: pointer;
`;

const headerStyles = css`
  display: flex;
  padding: 10px 15px;
  background-color: goldenrod;
  margin-bottom: 20px;
  border-bottom: solid 3px black;
  a + a {
    margin-left: 15px;
  }
  > div {
    margin: 0 0 0 auto;
  }
`;

export default function Header() {
  const shoppingListData = cookies.getJSON('cartItems');
  return (
    <header css={headerStyles}>
      <Link href="/">
        <a css={aStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a css={aStyle}>About</a>
      </Link>
      <Link href="/products">
        <a css={aStyle}>Products</a>
      </Link>
      <Link href="/shoppingCart">
        <div css={picDivStyle}>
          <input
            css={picStyle}
            type="image"
            src="..\shoppingcart.png"
            alt="shopping cart"
          />

          {shoppingListData}
        </div>
      </Link>
    </header>
  );
}
