// Gatsby supports TypeScript natively!
import React from "react";
import { Link } from "gatsby";
import { css } from '@emotion/core';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { EagleImage } from '../images/images';
import { useDispatch } from 'react-redux';
import { login } from '../components/store';


const SecondPage = (props) => (
  <Layout>
    <SEO title="Page two" />
    <LoginPage />
  </Layout>
)

export default SecondPage

const LoginPage = props => {

  const dispatch = useDispatch();

  return (
    <div css={css`
      background-color: #CAF4F2;
      min-height: 90vh;
      min-width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
    `} >
    
      <div css={css`
        margin-top: 64px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30vw;
        
        border: 1px solid black;
      `}>
        <div css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height:128px;
          background-color: #96DDDA;
          svg {
            padding: 32px;
          }
        `}>
          <EagleImage />
        </div>
        <div css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          * {
            padding: 16px;         
            
          }

          button {
            margin-top: 16px;

            box-shadow: 0px 10px 14px -7px #3e7327;
            background:#FFC79A;
            
            border-radius:4px;
            border:1px solid #4b8f29;
            display:inline-block;
            cursor:pointer;
            color:#ffffff;
            font-family:Arial;
            font-size:14px;
            font-weight:bold;
            padding:16px 32px;
            text-decoration:none;
            text-shadow:0px 1px 0px #5b8a3c;

          }
        `}>



          <div>Acesso ao Sistema</div>
          <br />
          <input type="email" placeholder="Usuário"/>
          <br />
          <input type="password" placeholder="Senha"/>
          <button css={css `
            background-color: #FFC79A;
            border-radius: 5px;
            border: 1px solid black;
            margin: 16px;

            * {
              color: black;
              text-decoration: none;
            }
          `}>
            
            <Link to="/dashboard" onClick={() => dispatch(login())}>Login</Link>

          </button>

        </div>
      </div>
    </div>
  );

}

