import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useDispatch } from "react-redux"
import { login } from "../state/index"
import { Button, TextField } from "@material-ui/core"
import logo from "../images/logo.png"

const LoginPage = () => (
  <Layout>
    <SEO title="Login" />
    <LoginContainer>
      <Logo />
      <h2>Acesso ao Sistema</h2>
      <FormContainer>
        <TextField
          type="email"
          id="outlined-basic"
          label="Usuário"
          variant="outlined"
          margin="normal"
        />
        <TextField
          type="password"
          id="outlined-basic"
          label="Senha"
          variant="outlined"
          margin="normal"
        />
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > * {
    margin: 16px;
  }
`

const SubmitButton = () => {
  const dispatch = useDispatch()

  return (
    <Link to="/dashboard" onClick={() => dispatch(login())}>
      <Button variant="contained" color="primary">
        Login
      </Button>
    </Link>
  )
}

const Logo = () => <img src={logo} alt="Logo" />

export default LoginPage
