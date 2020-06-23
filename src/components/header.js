import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from '@emotion/core';
import { useSelector, useDispatch } from 'react-redux';
import { logoff } from '../components/store';




const Header = (props) => {

  return (
    <header>
      <Nav>
        <Title name={"Eagle"} />
        <Navigation loginStatus = ""/>
      </Nav>
    </header>
    );

}



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

  const isUserLogged = useSelector(state => state.isUserLogged);
  

  const navBar = isUserLogged
    ? <><UserProfile name="Fulanx - Usiminas"/> <UserMenuBar /></>
    : <Link to="/login">Login</Link>

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
      <div>.</div>
        { navBar }

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

const UserMenuBar = props => {

  const dispatch = useDispatch();

  return (
    <div css={css`
      display: flex;
      flex-direction: row;
      * {
        padding: 6px;
      }
    `}>
      <Link to="/" onClick={dispatch(logoff())}>Sair</Link>
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
