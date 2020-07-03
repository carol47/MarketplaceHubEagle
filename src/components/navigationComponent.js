import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExpand } from "@fortawesome/free-solid-svg-icons"
import { css } from "@emotion/core"

const NavigationComponent = props => {
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
        border: 1px solid gray;
        border-radius: 5px;
        width: 90%;
        margin-top: 2px;
      `}
    >
      <div
        css={css`
      
      
      width: 100%;
      font-size: 140%;
      text-align center;
      border-radius: 5px;
      background-color: #b0eae7;

      `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            flex-direction: row;
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
              max-width: 24px;
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
        {props.milo
          ? props.milo.map(item => <NavigationItem name={item} />)
          : null}
      </div>
    </div>
  )
}

const NavigationItem = props => {
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
    </div>
  )
}

export { NavigationComponent }
