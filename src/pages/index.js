import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import background from "../images/beach_background.jpg"

const index = props => {
  return (
    <Layout>
      <SEO title="Eagle - Gestão de Marketplace" />
      <MainPage>
        <SiteInfoPanel>
          <h1>Gestão de Marketplace de forma simples</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui
            arcu, gravida sed finibus sed, dapibus convallis tellus. Sed tempor,
            magna sit amet ornare ullamcorper, sapien tortor tristique mi, sit
            amet tincidunt odio eros convallis justo. Nullam tristique turpis
            nec mi molestie suscipit. Donec sagittis felis eu felis bibendum,
            eget cursus diam aliquet. In accumsan vulputate leo, at facilisis
            lectus consectetur in. Pellentesque varius finibus lorem, nec
            blandit leo congue ut. Suspendisse tincidunt condimentum turpis,
            vitae accumsan justo venenatis et. Maecenas in ligula sit amet
            turpis pretium fermentum at in urna. Sed odio elit, imperdiet sit
            amet accumsan et, pretium nec ex. Nam non lacus hendrerit,
            ullamcorper felis eget, condimentum augue. Duis quam justo, interdum
            nec est eu, pulvinar sollicitudin tortor.{" "}
          </p>
        </SiteInfoPanel>
      </MainPage>
    </Layout>
  )
}

const MainPage = styled.div`
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
`

const SiteInfoPanel = styled.div`
  grid-column: 2/2;
  padding: 10px;
  border-radius: 10px;
`

export default index
