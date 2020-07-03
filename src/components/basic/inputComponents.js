import React from "react"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const BasicInput = props => {
  return (
    <label
      css={css`
        display: block;
      `}
    >
      {props.label}
      <input
        css={css`
          display: block;
        `}
        {...props}
      />
    </label>
  )
}

const SearchComponent = props => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-evenly;
        width: 240px;

        input {
          width: 180px;
        }
      `}
    >
      <FontAwesomeIcon
        icon={faSearch}
        css={css`
          font-size: 1.2rem;
          margin-right: 10px;
        `}
      />
      <input type="text" placeholder="Busca..." />
    </div>
  )
}

export { BasicInput, SearchComponent }
