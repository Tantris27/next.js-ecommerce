import { css } from '@emotion/react';
import Header from './Header';

const footerStyles = css`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`;
const containerStyles = css`
  margin: 0 10px;
  margin-bottom: 50px;
`;

export default function Layout({ ...props }) {
  return (
    <>
      <Header props={props} />
      <div css={containerStyles}>{props.children}</div>
      {/* <footer css={footerStyles}>
        <p>@Copyright KantnerCorp.</p>
      </footer> */}
    </>
  );
}
