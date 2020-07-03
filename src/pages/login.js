import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useDispatch } from "react-redux"
import { login } from "../components/store"
import { LoginButton } from "../components/basic/buttons"
import { BasicInput } from "../components/basic/inputComponents"
import logo from "../images/logo.png"

const LoginPage = () => (
  <Layout>
    <SEO title="Login" />
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
          width: 100vw;
          border-radius: 50px;
          overflow: hidden;
        `}
      >
        {/* Logo Container */}
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
          <img src={logo} height="128px" loading="eager" alt="Logo" />
        </div>

        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          `}
        >
          <h2>Acesso ao Sistema</h2>

          {/* Input Container */}
          <div
            css={css`
              * {
                padding: 16px;
              }
            `}
          >
            <BasicInput type="email" placeholder="Usuário" label="Usuário" />
            <BasicInput type="password" placeholder="Usuário" label="Senha" />
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
