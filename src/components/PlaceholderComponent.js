import React from "react"
import styled from "@emotion/styled"
import placeMiloImg from "../images/placemilo-min.png"

export default ({ componentTitle }) => {
  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > img {
      border-radius: 50%;
      max-width: 200px;
    }
  `

  return (
    <Wrapper>
      <h2>{componentTitle}</h2>
      <img src={placeMiloImg} alt="placeholder" />
      <h2>EM CONSTRUÇÃO</h2>
    </Wrapper>
  )
}
