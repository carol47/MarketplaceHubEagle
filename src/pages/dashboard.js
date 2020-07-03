import React, { useState } from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

import SendFilePage from "../components/sendFile"
import { NavigationComponent } from "../components/navigationComponent"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExpand, faBars, faSearch } from "@fortawesome/free-solid-svg-icons"
import { SearchComponent } from "../components/basic/inputComponents"

const Dashboard = () => {
  const [displayMenu, setDisplay] = useState("flex")

  const toggleDisplay = () => {
    displayMenu === "flex" ? setDisplay("none") : setDisplay("flex")
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Toolbar toggleDisplay={toggleDisplay} />
      <MainContainer>
        <NavigationMenu displaySidebar={displayMenu} />
        <SendFilePage />
      </MainContainer>
    </Layout>
  )
}

const Toolbar = props => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 32px;
        background-color: #e2fbfa;
        box-shadow: 1px 1px 1px gray;
        z-index: 1;
        padding: 0px 15px;
      `}
    >
      <div data-name="ToggleMenu" onClick={() => props.toggleDisplay()}>
        <FontAwesomeIcon
          icon={faBars}
          css={css`
            font-size: 1.2rem;
          `}
        />
      </div>
      <SearchComponent />
    </div>
  )
}

const MainContainer = props => {
  return (
    <div
      css={css`
        height: 90vh;
        width: 100vw;
        display: flex;
        flex-direction: row;
        color: black;
      `}
    >
      {props.children}
    </div>
  )
}

const NavigationMenu = props => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 200px;
        height: 100%;
        padding: 5px 0px;
        display: ${props.displaySidebar};
        background-color: #e2fbfa;
        box-shadow: 1px 1px 1px gray;
      `}
    >
      <label
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: center;
        `}
      ></label>

      <NavigationComponent type="Hub" milo={["Plugg.to", "...", "..."]} />
      <NavigationMarketplace type="Marketplaces">
        <MarketplaceItem name="Netshoes" />
        <MarketplaceItem name="Centauro" />
        <MarketplaceItem name="B2W" />
      </NavigationMarketplace>
      <NavigationComponent type="Administração"></NavigationComponent>
    </div>
  )
}

const NavigationMarketplace = props => {
  const [isNavigationVisible, setNavigationVisibility] = useState("flex")

  const toggleVisibility = () => {
    isNavigationVisible === "flex"
      ? setNavigationVisibility("none")
      : setNavigationVisibility("flex")
  }

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 90%;
        border: 1px solid gray;
        border-radius: 5px;
        margin-top: 2px;
      `}
    >
      <div
        css={css`
      
      width: 100%;
      border-radius: 5px;
      font-size: 140%;
      text-align center;
      background-color: #b0eae7;

      `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin: 0px 5px;
            padding: 0px;
          `}
        >
          <div
            css={css`
              flex-grow: 1;
            `}
          >
            {props.type}
          </div>
          <FontAwesomeIcon
            icon={faExpand}
            css={css`
              max-width: 32px;
            `}
            onClick={() => toggleVisibility()}
          />
        </div>
      </div>
      <div
        css={css`
          display: ${isNavigationVisible};
          height: 100%;
          transition: all 0.5s;
          flex-direction: column;

          * {
            padding: 8px 0px;
          }
        `}
      >
        {props.children}
      </div>
    </div>
  )
}

const MarketplaceItem = props => {
  return (
    <div
      className="item"
      css={css`
        display: flex;
        align-items: flex-start;
        position: relative;
        font-size: 90%;
        height: 32px;
        z-index: 0;

        &:hover {
          background-color: #96ddda;
          cursor: pointer;

          * {
            visibility: visible;
            opacity: 1;
            display: flex;
          }
        }
      `}
    >
      {props.name}
      <MarketplaceDropdownMenu />
    </div>
  )
}

const MarketplaceDropdownMenu = props => {
  return (
    <div
      css={css`
        visibility: hidden;
        flex-direction: column;
        position: absolute;
        margin-top: -10px;
        opacity: 0.5;
        left: 180px;
        overflow: hidden;

        background-color: #96ddda;
        width: 200px;
        z-index: 1;
        * {
          margin: 0px;
          padding: 5px 0px;

          &:hover {
            background-color: #ffd1ad;
          }
        }
      `}
    >
      <div>Conciliar Contas</div>
      <div>Cadastrar Comissão/Promoção</div>
      <div>Histórico</div>
      <div>Upload de Arquivos</div>
      <div>Relatórios</div>
    </div>
  )
}

export default Dashboard
