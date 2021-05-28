import { css } from '@emotion/react';
import Header from './Header';

const containerStyles = css`
  margin: 0 10px;
`;

export default function Layout(props) {
  return (
    <>
      <Header />
      <div css={containerStyles}>{props.children}</div>
    </>
  );
}
