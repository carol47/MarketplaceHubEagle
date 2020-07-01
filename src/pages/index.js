// Gatsby supports TypeScript natively!
import React from "react";
import { PageProps, Link } from "gatsby";
import { css } from '@emotion/core';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { EagleImage } from '../images/images';
import store from '../components/store';
import { Provider } from "react-redux";

const index = (props) => {
  
  
  return (
  
    <Provider store={store}>
      <Layout>
        <SEO title="Projeto Eagle - Página Inicial" />

        <MainPage />
        
      </Layout>
    </Provider>
)}

export default index;

const MainPage = props => {

  return (
    <div css={css`
      margin: 128px;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      * {
        
      }
    `}>
      <InfoPanel />
      <ImagePanel />
    </div>
  );

}

const InfoPanel = props => {

  return (
    <div css={css`
      max-width: 30vw;
    `}>
      <h2>Gestão de Marketplace de forma simples</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui arcu, gravida sed finibus sed, dapibus convallis tellus. Sed tempor, magna sit amet ornare ullamcorper, sapien tortor tristique mi, sit amet tincidunt odio eros convallis justo. Nullam tristique turpis nec mi molestie suscipit. Donec sagittis felis eu felis bibendum, eget cursus diam aliquet. In accumsan vulputate leo, at facilisis lectus consectetur in. Pellentesque varius finibus lorem, nec blandit leo congue ut. Suspendisse tincidunt condimentum turpis, vitae accumsan justo venenatis et. Maecenas in ligula sit amet turpis pretium fermentum at in urna. Sed odio elit, imperdiet sit amet accumsan et, pretium nec ex. Nam non lacus hendrerit, ullamcorper felis eget, condimentum augue. Duis quam justo, interdum nec est eu, pulvinar sollicitudin tortor. </p>
    </div>
  );

}

const ImagePanel = () => {

  return (
    <div css={css`
      max-width: 30vw;
    
    `}>
      <EagleImage />

    </div>
  );

}

