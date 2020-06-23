import { Link } from 'gatsby';
import React, { useState } from "react";
import { css } from "@emotion/core";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./layout.css";

const IndexPage = () => {
  
  return (
    <Layout>
      <SEO title="Home" />
      <MainContainer>
        <NavigationMenu />
      </MainContainer>
    </Layout>
  )


}

const MainContainer = props => {

  return (
    <div css={css`
      height: 90vh;
      width: 100vw;
      display: flex;
      flex-direction: row;
      color: black;
    `}>
      {props.children}
    </div>
  );

}

const NavigationMenu = props => {

  return (<div css={css`
    width: 15vw;
    height: 100%;
    padding: 15px 0px;
    display: flex;
    flex-direction: column;
    background-color: #e2fbfa;

    * {
      margin: 5px 0px;
    }
  
  `}>
    <label css={css`
      display:flex;
      flex-direction: row;
      justify-content: center;
    `}>
      <input css={css`
      width:90%;
      
    `}type="text" placeholder="Busca..."/>

    </label>

    
      <NavigationGroup type="Hub">
        <NavigationItem name="Plugg.to" />
        <NavigationItem name="..." />
        <NavigationItem name="..." />
      </NavigationGroup>
      <NavigationMarketplace type="Marketplaces">
        <MarketplaceItem name="Netshoes" />
        <MarketplaceItem name="Centauro" />
        <MarketplaceItem name="B2W" />
      </NavigationMarketplace>
      <NavigationGroup type="Administração">
        <NavigationItem name="Contas" />
      </NavigationGroup>


  </div>)

}

const NavigationGroup = props => {

  return (
    <div css={css`
      display: flex;
      flex-direction:column;
      height: 100%;
      

      .item :hover {
        background-color: #7ccdca;
        cursor: pointer;



      }
    `}>
      <div css={css`
        font-family: serif;
        padding: 16px 0px;
        margin: 5px 0px;
        width: 100%;
        font-size: 140%;
        text-align center;
        border-radius: 5px;
        background-color: #b0eae7;
        
        * {
          margin: 5px;
          padding: 15px;
        }

      `}>{props.type}</div>
        <div css={css`
          display: flex;
          flex-direction: column;

          * {
            padding: 8px 0px;
          }
        

        `}>
          {props.children}
        </div>
      </div>
  );

}

const NavigationMarketplace = props => {

  return (
    <div css={css`
      display: flex;
      flex-direction:column;
      height: 100%;
      

      .item :hover {
        background-color: #7ccdca;
        cursor: pointer;



      }
    `}>
      <div css={css`
        font-family: serif;
        padding: 16px 0px;
        margin: 5px 0px;
        width: 100%;
        font-size: 140%;
        text-align center;
        border-radius: 5px;
        background-color: #b0eae7;
        
        * {
          margin: 5px;
          padding: 15px;
        }

      `}>{props.type}</div>
        <div css={css`
          display: flex;
          flex-direction: column;

          * {
            padding: 8px 0px;
          }
        

        `}>
          {props.children}
        </div>
      </div>
  );

}

const NavigationItem = props => {

  return (
    <div className="item" css={css`
    font-size: 90%;
  `}>{props.name}</div>
  );

}

const MarketplaceItem = props => {

  return (
    <div className="item" css={css`
    font-size: 90%;
  `}><Link to={`/sendFile`} state={{marketplace: props.name}}>{props.name}</Link></div>
  );

}

const MarketplaceDropdownMenu = props => {

  const [isHovered, setHovered] = useState(false);

  return (
    <div css={css`
      display: flex;
      flex-direction: row;
      position: relative;
    `}>
      <div>Conciliar contas</div>
      <div>Relatórios</div>
      <div>Histórico</div>
      <div>Upload de arquivos</div>
    </div>
  );

}

export default IndexPage;
