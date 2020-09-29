import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExpand } from "@fortawesome/free-solid-svg-icons"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import SendFilePage from "../components/sendFile"
import PedidosVendaMarketplace from "../components/PedidosVendaMarketplace"
import ComissoesMarketplace from "../components/ComissoesMarketplace"

import {
  Drawer,
  Accordion,
  AccordionSummary,
  List,
  ListItem,
  AccordionDetails,
} from "@material-ui/core"

//Constants
const HUB_ID = 1
const MARKETPLACE_ID = 2

const screenList = {
  uploadFile: props => <SendFilePage {...props} />,
  pedidosVendaMarketplace: props => <PedidosVendaMarketplace {...props} />,
  cadastrarComissoes: props => <ComissoesMarketplace {...props} />,
}

const NavigationMenu = ({
  displaySidebar,
  toggleBar,
  hubs,
  marketplaces,
  setCurrentScreen,
}) => {
  const StyledDrawer = styled(Drawer)`
    width: 200px;
  `

  return (
    <StyledDrawer
      variant="temporary"
      anchor="left"
      open={displaySidebar}
      onClose={() => toggleBar()}
    >
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>Hub</AccordionSummary>
        <AccordionDetails>
          {hubs.map(hub => (
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} key={hub.id}>
                {hub.nome}
              </AccordionSummary>
              <AccordionDetails>
                <HubActions
                  setCurrentScreen={setCurrentScreen}
                  toggleBar={toggleBar}
                />
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Marketplaces
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {marketplaces.map(marketplace => (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  key={marketplace.id}
                >
                  {marketplace.nome}
                </AccordionSummary>
                <AccordionDetails>
                  <HubActions
                    setCurrentScreen={setCurrentScreen}
                    toggleBar={toggleBar}
                    index={marketplace.id}
                    nomePlataforma={marketplace.nome}
                    tipoPlataforma={MARKETPLACE_ID}
                  />
                </AccordionDetails>
              </Accordion>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </StyledDrawer>
  )
}

const HubActions = ({
  setCurrentScreen,
  toggleBar,
  tipoPlataforma,
  index,
  nomePlataforma,
}) => {
  const StyledListItem = styled(ListItem)`
    cursor: pointer;
    &: hover {
      background-color: #3f51b5;
    }
  `
  return (
    <List>
      <StyledListItem
        onClick={() => {
          setCurrentScreen(
            screenList.pedidosVendaMarketplace({
              nomePlataforma,
              empresaPlataforma: HUB_ID,
              id: index,
            })
          )
          toggleBar()
        }}
      >
        Pedidos de Venda / Pagamento
      </StyledListItem>
      <StyledListItem>Conciliar Contas</StyledListItem>
      <StyledListItem
        onClick={() => {
          setCurrentScreen(
            screenList.cadastrarComissoes({
              nomePlataforma,
              empresaPlataforma: HUB_ID,
              id: index,
            })
          )
          toggleBar()
        }}
      >
        Cadastrar Comissão/Promoção
      </StyledListItem>
      <StyledListItem>Histórico</StyledListItem>
      <StyledListItem
        onClick={() => {
          setCurrentScreen(
            screenList.uploadFile({
              nomePlataforma,
              empresaPlataforma: HUB_ID,
              id: index,
            })
          )
          toggleBar()
        }}
      >
        Upload de Arquivos
      </StyledListItem>
      <StyledListItem>Relatórios</StyledListItem>
    </List>
  )
}

export default NavigationMenu
