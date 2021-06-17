import { css } from '@emotion/react';
import cookies from 'js-cookie';
import Link from 'next/link';

const aStyle = css`
  margin-top: 5px;
  color: grey;
  cursor: pointer;
  :hover {
    color: white;
  }
`;
const picDivStyle = css`
  display: flex;
  width: 50px;
  height: 30px;
  color: black;
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
  background-color: #d7ebff;
  margin-bottom: 20px;
  border-bottom: solid 1px black;
  a + a {
    margin-left: 20px;
  }
  a:last-child {
    margin: 0 0 0 auto;
    text-decoration: none;
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
        <a>
          <div css={picDivStyle}>
            <input
              css={picStyle}
              type="image"
              src="..\shoppingcart.png"
              alt="shopping cart"
            />

            {shoppingListData}
          </div>
        </a>
      </Link>
    </header>
  );
}
