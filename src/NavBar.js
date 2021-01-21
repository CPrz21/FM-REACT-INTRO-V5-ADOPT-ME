import React, { useState } from 'react';
import { css } from "@emotion/react";
import { Link } from "@reach/router";
import colors from "./colors";

const NavBar = () => {
  const [padding, setPadding] = useState(15);
  return (
    <header
      onClick={ () => setPadding(padding + 15)}
      css={css`
        padding: ${padding}px;
        background-color: ${colors.secondary};
      `}
    >
      <Link to="/">Adopt me!</Link>
      <span 
        css={css`
          font-size:60px;
          &:hover {
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
