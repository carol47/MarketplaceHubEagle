import React from "react"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

const BasicButton = props => {
  return (
    <div
      css={css`
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 2rem;
        background-color: #ffc79a;
        border-radius: 10px;
        width: auto;
        padding: 0px 10px;
        -webkit-box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.75);
        &:hover {
          border: 1px solid black;
        }
        * {
          text-decoration: none;
          margin: 0px 5px;
        }
      `}
    >
      {props.children}
    </div>
  )
}

const LoginButton = props => {
  return (
    <BasicButton>
      Login
      <FontAwesomeIcon
        icon={faSignInAlt}
        css={css`
          font-size: 1.2rem;
        `}
      />
      {props.children}
    </BasicButton>
  )
}

const SignUpButton = () => {
  return (
    <BasicButton>
      <span>Cadastrar</span>
      <FontAwesomeIcon
        icon={faUserPlus}
        css={css`
          font-size: 1.2rem;
        `}
      />
    </BasicButton>
  )
}

const SubmitButton = () => {
  return (
    <BasicButton>
      <span>Enviar</span>
      <FontAwesomeIcon
        icon={faUserPlus}
        css={css`
          font-size: 1.2rem;
        `}
      />
    </BasicButton>
  )
}

export { BasicButton, LoginButton, SignUpButton, SubmitButton }
