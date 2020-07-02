import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useDispatch } from "react-redux"
import { login } from "../components/store"
import { LoginButton } from "../components/basic/buttons"
import logo from "../images/logo.png"

const LoginPage = () => (
  <Layout>
    <SEO title="Page two" />
    <LoginComponent />
  </Layout>
)

const LoginComponent = () => {
  const dispatch = useDispatch()

  return (
    <div
      css={css`
        background-color: #caf4f2;
        min-height: 90vh;
        min-width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <div
        css={css`
          margin-top: 64px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 30vw;
          border-radius: 50px;
          overflow: hidden;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 128px;
            svg {
              padding: 32px;
            }
          `}
        >
          <img src={logo} alt="Logo" />
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            & > * {
              margin: 16px;
            }
          `}
        >
          <div
            css={css`
              font-size: 150%;
            `}
          >
            Acesso ao Sistema
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;

              * {
                padding: 16px;
              }
            `}
          >
            <input type="email" placeholder="Usuário" />
            <input type="password" placeholder="Senha" />
          </div>

          <Link to="/dashboard" onClick={() => dispatch(login())}>
            <LoginButton />
          </Link>
        </div>
      </div>
    </div>
  )
}
export default LoginPage
