import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useDispatch } from "react-redux"
import { login } from "../state/index"
import { LoginButton } from "../components/basic/buttons"
import { BasicInput } from "../components/basic/inputComponents"
import logo from "../images/logo.png"

const LoginPage = () => (
  <Layout>
    <SEO title="Login" />
    <LoginContainer>
      <Logo />
      <h2>Acesso ao Sistema</h2>
      <FormContainer>
        <BasicInput type="email" placeholder="Usuário" label="Usuário" />
        <BasicInput type="password" placeholder="Usuário" label="Senha" />
      </FormContainer>
      <SubmitButton />
    </LoginContainer>
  </Layout>
)

const LoginContainer = styled.div`
  background-color: #caf4f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 90vh;
  & > * {
    margin: 12px;
  }
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & > * {
    margin-left: 16px;
  }
`

const SubmitButton = () => {
  const dispatch = useDispatch()

  return (
    <Link to="/dashboard" onClick={() => dispatch(login())}>
      <LoginButton />
    </Link>
  )
}

const Logo = () => <img src={logo} alt="Logo" />

export default LoginPage
