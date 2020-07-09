import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"
import { useSelector, useDispatch } from "react-redux"
import { logoff } from "../state/index"
import { LoginButton, SignUpButton } from "../components/basic/buttons"
import logo from "../images/logo.png"

const Header = props => {
  return (
    <header>
      <Nav>
        <Logo />
        <Navigation loginStatus="" />
      </Nav>
    </header>
  )
}

const Nav = props => {
  return (
    <nav
      css={css`
        display: flex;
        justify-content: space-between;
        height: 10vh;
        width: 100vw;
        flex-direction: row;
        align-items: center;
        color: #fff;
        width: 100%;
        height: 64px;
        background: rgb(255, 255, 255);
        background-color: #f5f5f5;
        padding: 0em 1em;
      `}
    >
      {props.children}
    </nav>
  )
}

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          src={logo}
          alt="Logotipo"
          css={css`
            height: 48px;
          `}
        />
      </Link>
    </div>
  )
}

const Navigation = props => {
  const isUserLogged = useSelector(state => state.isUserLogged)

  const navBar = isUserLogged ? (
    <>
      <UserProfile name="Fulanx - Usiminas" /> <UserMenuBar />
    </>
  ) : (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: flex-end;
        * {
          margin-left: 10px;
        }
      `}
    >
      <SignUpButton />
      <Link
        to="/login"
        css={css`
          text-decoration: none;
          color: black;
        `}
      >
        <LoginButton></LoginButton>
      </Link>
    </div>
  )

  return (
    <div
      css={css`
        width: 80vw;
        margin: 0px 30px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        color: black;
      `}
    >
      {navBar}
    </div>
  )
}

const UserProfile = props => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        * {
          padding: 0px 6px;
        }
      `}
    >
      <div>
        <img
          src="http://placeimg.com/64/64/people"
          alt="User Image"
          css={css`
            width: 48px;
            border-radius: 50%;
          `}
        />
      </div>
      <div>{props.name}</div>
    </div>
  )
}

const UserMenuBar = props => {
  const dispatch = useDispatch()

  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        * {
          padding: 6px;
        }
      `}
    >
      <Link to="/" onClick={dispatch(logoff())}>
        Sair
      </Link>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
