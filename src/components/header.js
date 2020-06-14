import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from '@emotion/core';

const Header = ({ siteTitle }) => (
  <header>
    <Nav>
      <Title name={siteTitle} />
      <Navigation />
    </Nav>
  </header>
)


const Nav = props => {

  return (
    <nav css={css`
      height: 10vh;
      width: 100vw;
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #fff;
      width: 100%;
      height: 64px;
      background-color: #7ccdca;
      position: relative;
      margin: 0px;

    `}>
      {props.children}
    </nav>
  );

}

const Title = props => {

  return (
    <h1 css={css`
        width: 20vw;
        margin-left: 16px;
        color: black;
        font-family: serif;
        font-style: italic;
        padding: 10px;

  `}>{props.name}</h1>
  );

}

const Navigation = props => {

  return (
    <div css={css`
      width: 80vw;
      margin: 0px 30px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color: black;

    `}>
      <div>Caminho / Caminho</div>
      <UserProfile name="Fulanx - Usiminas"/>
      <MenuBar />
    </div>
  );

}

const UserProfile = props => {
  return (
    <div css={css`
      display: flex;
      flex-direction: row;
      align-items: center;
      * {
        padding: 0px 6px;
      }
    `}>
      <div>
        <img src="http://placeimg.com/64/64/people" alt="User Image"  css={css`
          width: 48px;
          border-radius: 50%;
        `}/>
      </div>
      <div>{props.name}</div>
    </div>

  );
}

const MenuBar = props => {

  return (
    <div css={css`
      display: flex;
      flex-direction: row;
      * {
        padding: 6px;
      }
    `}>
      <div>Minha Conta</div>
      <div>Logout</div>
    </div>
  );

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header;
