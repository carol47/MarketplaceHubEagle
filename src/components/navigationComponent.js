import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExpand } from "@fortawesome/free-solid-svg-icons"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const NavigationMenu = props => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 200px;
    height: 100%;
    padding: 5px 0px;
    display: ${props.displaySidebar};
    background-color: #e2fbfa;
    box-shadow: 1px 1px 1px gray;
  `
  return (
    <Container>
      <NavigationComponent type="Hub">
        {props.hubs.map(hub => (
          <NavigationItem key={hub.id} name={hub.nome} />
        ))}
      </NavigationComponent>
      <NavigationComponent type="Marketplaces">
        {props.marketplaces.map(marketplace => (
          <NavigationItem key={marketplace.id} name={marketplace.nome}>
            <DropdownMenu />
          </NavigationItem>
        ))}
      </NavigationComponent>
      <NavigationComponent type="Administração" />
    </Container>
  )
}

const NavigationComponent = props => {
  const [isNavigationVisible, setNavigationVisibility] = useState("flex")

  const toggleVisibility = () => {
    isNavigationVisible === "flex"
      ? setNavigationVisibility("none")
      : setNavigationVisibility("flex")
  }

  const NavigationComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    border: 1px solid gray;
    border-radius: 5px;
    margin-top: 2px;
  `

  const NavigationHeader = props => {
    const SecondDiv = styled.div`
      display: flex;
      flex-direction: row;
      background-color: #b0eae7;
      justify-content: space-between;
      align-items: center;
      padding: 0px 5px;
      border-radius: 5px 0px;
    `
    const Container = styled.div``

    return (
      <Container
        css={css`
      width: 100%;
          border-radius: 5px;
          font-size: 140%;
          text-align center;
          `}
      >
        <SecondDiv>
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
        </SecondDiv>
      </Container>
    )
  }

  const NavigationBody = styled.div`
    display: ${isNavigationVisible};
    height: 100%;
    transition: all 0.5s;
    flex-direction: column;

    * {
      padding: 8px 0px;
    }
  `

  return (
    <NavigationComponentContainer css={css``}>
      <NavigationHeader type={props.type} />
      <NavigationBody>{props.children}</NavigationBody>
    </NavigationComponentContainer>
  )
}

const NavigationItem = props => {
  const Container = styled.div`
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
  `

  return (
    <Container>
      {props.name}
      <DropdownMenu>
        <div>Conciliar Contas</div>
        <div>Cadastrar Comissão/Promoção</div>
        <div>Histórico</div>
        <div>Upload de Arquivos</div>
        <div>Relatórios</div>
      </DropdownMenu>
    </Container>
  )
}

const DropdownMenu = styled.div`
  visibility: hidden;
  flex-direction: column;
  position: absolute;
  margin-top: -10px;
  opacity: 0.5;
  left: 180px;

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
`
export default NavigationMenu
