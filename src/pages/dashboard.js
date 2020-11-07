import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { registerHub, logoff } from "../state/index"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { ptBR } from "@material-ui/core/locale"
import SendFilePage from "../components/sendFile"
import NavigationMenu from "../components/navigationComponent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExpand, faBars, faSearch } from "@fortawesome/free-solid-svg-icons"
import { SearchComponent } from "../components/basic/inputComponents"
import PlaceMilo from "../components/PlaceholderComponent"

//MaterialUI Localization
const theme = createMuiTheme(
  {
    palette: {},
  },
  ptBR
)

const Dashboard = () => {
  //Data to send to props
  const [hubs, setHubs] = useState([])
  const [marketplaces, setMarketplaces] = useState([])

  //Data to toggle NavigationComponent
  const [displayMenu, setDisplayMenu] = useState(false)
  const toggleDisplay = () => {
    displayMenu === true ? setDisplayMenu(false) : setDisplayMenu(true)
  }

  //Data to set current screen
  const sendFileScreen = (
    <SendFilePage hubs={hubs} marketplaces={marketplaces} />
  )
  const [currentScreen, setCurrentScreen] = useState(
    <PlaceMilo componentTitle="Página Inicial Dashboard" />
  )

  //Get NavigationComponent data
  useEffect(() => {
    const headers = new Headers({
      "Content-Type": "multipart/form-data",
      Authorization: "Token f9470fede3f26b7d12a8d78d617cd637e661d0f6",
    })

    //teste 
    const requestBody = {
      method: "GET",
      headers,
      mode: "cors",
    }
    fetch("http://localhost:9000/api/back/v1/menus/emp/1", requestBody)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        json.tipo_plataforma.forEach(list => {
          if (list.tipo === "Hub") setHubs(list.plataforma)
          else if (list.tipo === "Marketplace") setMarketplaces(list.plataforma)
        })
      })
      .catch(error => console.log(error))
    console.log(marketplaces)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home" />
        <Toolbar>
          <div
            onClick={() => toggleDisplay()}
            css={css`
              cursor: pointer;
            `}
          >
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
            toggleBar={() => toggleDisplay()}
            setCurrentScreen={setCurrentScreen}
          />
          {currentScreen}
        </MainContainer>
      </Layout>
    </ThemeProvider>
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
