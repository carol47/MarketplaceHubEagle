// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { EagleImage } from "../images/images"
import store from "../components/store"
import { Provider } from "react-redux"
import background from "../images/beach_background.jpg"

const index = props => {
  return (
    <Provider store={store}>
      <Layout>
        <SEO title="Eagle - Gestão de Marketplace" />
        <MainPage />
      </Layout>
    </Provider>
  )
}

export default index

const MainPage = props => {
  return (
    <div
      css={css`
        height: 90vh;
        display: grid;
        grid-template-columns: 15vw 35vw 50vw;
        place-items: center;

        background-image: url(${background});
        background-color: #7ccdca;
        background-size: cover;
        @media (max-width: 720px) {
          display: block;
          height: 100%;
          padding: 16px;
          background-image: none;
        }
      `}
    >
      <SiteInfoPanel />
    </div>
  )
}

const SiteInfoPanel = props => {
  return (
    <div
      css={css`
        grid-column: 2/2;
        padding: 10px;
        border-radius: 10px;
      `}
    >
      <div
        css={css`
          font-weight: normal;
          font-size: 200%;
        `}
      >
        Gestão de Marketplace de forma simples
      </div>
      {/* Descrição do Site */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui
        arcu, gravida sed finibus sed, dapibus convallis tellus. Sed tempor,
        magna sit amet ornare ullamcorper, sapien tortor tristique mi, sit amet
        tincidunt odio eros convallis justo. Nullam tristique turpis nec mi
        molestie suscipit. Donec sagittis felis eu felis bibendum, eget cursus
        diam aliquet. In accumsan vulputate leo, at facilisis lectus consectetur
        in. Pellentesque varius finibus lorem, nec blandit leo congue ut.
        Suspendisse tincidunt condimentum turpis, vitae accumsan justo venenatis
        et. Maecenas in ligula sit amet turpis pretium fermentum at in urna. Sed
        odio elit, imperdiet sit amet accumsan et, pretium nec ex. Nam non lacus
        hendrerit, ullamcorper felis eget, condimentum augue. Duis quam justo,
        interdum nec est eu, pulvinar sollicitudin tortor.{" "}
      </p>
    </div>
  )
}
