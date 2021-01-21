import React, { useState } from 'react';
import { css, keyframes } from "@emotion/react";
import { Link } from "@reach/router";
import colors from "./colors";

const NavBar = () => {
  const [padding] = useState(15);

  const Spin = keyframes`
    to {
      transform: rotate(360deg);
    }
  `;
  return (
    <header
      css={css`
        padding: ${padding}px;
        background-color: ${colors.secondary};
      `}
    >
      <Link to="/">Adopt me!</Link>
      <span 
        css={css`
          font-size:60px;
          animation: 1s ${Spin} linear infinite;
          &:hover {
            animation: 1s ${Spin} linear reverse;
            text-decoration: underline;
          }
        `}
        role="img" 
        aria-label="logo"
      >
      🐶
      </span>
    </header>
  )
}

export default NavBar;
