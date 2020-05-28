import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from '@emotion/core';

const Header = ({ siteTitle }) => (
  <header>
    <div css={css`
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #fff;
      width: 100%;
      height: 96px;
      background-image: linear-gradient(90deg, rgb(192, 45, 40), rgb(230, 98, 37));
      position: relative;
      border-radius: 5px;
      margin: 0px;

    `}>
      <h1 css={css`
        margin: 10px 20px 20px 20px;

      `}>
          {siteTitle}
      </h1>
    </div>
  </header>
)
// linear-gradient(90deg, rgb(192, 45, 40), rgb(230, 98, 37))

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header;
