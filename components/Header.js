import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  display: flex;
  padding: 10px 15px;
  background-color: #ddd;
  margin-bottom: 20px;
  a + a {
    margin-left: 15px;
  }
  > button {
    margin: 0 0 0 auto;
  }
`;

export default function Header({ props }) {
  // console.log(props.cartItems);
  // const cartItemsTotal = props.cartItems ? props.cartItems.length : 'Empty';
  // console.log(props.cartItems);
  return (
    <header css={headerStyles}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <Link href="/checkout">
        <button></button>
      </Link>
    </header>
  );
}
