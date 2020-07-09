import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { registerHub, logoff } from "../state/index"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

import SendFilePage from "../components/sendFile"
import NavigationMenu from "../components/navigationComponent"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExpand, faBars, faSearch } from "@fortawesome/free-solid-svg-icons"
import { SearchComponent } from "../components/basic/inputComponents"

const Dashboard = () => {
  const [hubs, setHubs] = useState([])
  const [marketplaces, setMarketplaces] = useState([])
  const [displayMenu, setDisplay] = useState("flex")
  const toggleDisplay = () => {
    displayMenu === "flex" ? setDisplay("none") : setDisplay("flex")
  }

  useEffect(() => {
    const headers = new Headers({
      "Content-Type": "multipart/form-data",
      Authorization: "Token f9470fede3f26b7d12a8d78d617cd637e661d0f6",
    })

    const requestBody = {
      method: "GET",
      headers,
      mode: "cors",
    }
    fetch("http://localhost:9000/api/back/v1/menus/emp/1", requestBody)
      .then(response => response.json())
      .then(json => {
        json.tipo_plataforma.forEach(list => {
          if (list.tipo === "Hub") setHubs(list.plataforma)
          else if (list.tipo === "Marketplace") setMarketplaces(list.plataforma)
        })
      })
    console.log(marketplaces)
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Toolbar>
        <div data-name="ToggleMenu" onClick={() => toggleDisplay()}>
          <FontAwesomeIcon
            icon={faBars}
            css={css`
              font-size: 1.2rem;
            `}
          />
        </div>
        <SearchComponent />
      </Toolbar>
      <MainContainer>
        <NavigationMenu
          displaySidebar={displayMenu}
          hubs={hubs}
          marketplaces={marketplaces}
        />
        <SendFilePage />
      </MainContainer>
    </Layout>
  )
}

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  background-color: #e2fbfa;
  box-shadow: 1px 1px 1px gray;
  z-index: 1;
  padding: 0px 15px;
`

const MainContainer = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  color: black;
`

export default Dashboard
