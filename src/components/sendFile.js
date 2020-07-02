import React from "react"
import { css } from "@emotion/core"

import { SubmitButton } from "./basic/buttons"

const SendFileComponent = props => {
  return (
    <div
      css={css`
        margin: 2rem 2rem;
      `}
    >
      <SendFileForm>
        <PlatformsList />
        <InputBox label="Tipo de tabela">
          <select>
            <option>Ciclo de Pagamento</option>
            <option>Pedido de Vendas</option>
          </select>
        </InputBox>
        <DatePanel />
      </SendFileForm>
      {/* <div>
        <div>Resposta</div>
        <div>{response}</div>
      </div> */}
    </div>
  )
}

const SendFileForm = props => {
  const reqUrl = "https://webhook.site/54d79620-e33e-43a1-8892-497fa75c9bfd"
  const sendData = e => {
    console.log("milo")
    e.preventDefault()

    const fileInput = document.getElementById("fileCache")
    if (!fileInput.files.item(0)) {
      alert("Não há arquivo carregado!")
      return
    }

    const formData = new FormData()
    const headers = {
      Authorization: "token 74ea06afd9cad03545d8b3a27de0eebedeeb6c4f",
    }

    formData.append("file1", fileInput.files.item(0))

    fetch(reqUrl, {
      method: "POST",
      body: formData,
    })
      .then(res => res.text())
      .then(json => {
        console.log(json)
      })
      .catch(error => console.log(error))
  }

  return (
    <form
      id="filesForm"
      method="POST"
      encType="multipart/form-data"
      onSubmit={e => sendData(e)}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding: 3%;
          width: 100%;

          * {
            margin: 5px 0px;
          }
        `}
      >
        <h2>Upload de arquivos para Servidor</h2>
        <hr />
        <br />

        {props.children}

        <InputBox
          label="Escolher arquivo"
          css={css`
            border: 1px solid black;
          `}
        >
          <input id="fileCache" type="file" name="file" multiple />
        </InputBox>
        <div
          css={css`
            display: flex;
            justify-content: flex-start;
          `}
        >
          <SubmitButton />
        </div>
      </div>
    </form>
  )
}

const PlatformsList = props => {
  return (
    <>
      <InputBox label="Selecionar plataforma">
        <select name="plataforma">
          <option value="Amazon">Amazon</option>
          <option value="Netshoes">Netshoes</option>
        </select>
      </InputBox>
    </>
  )
}

const DatePanel = props => {
  return (
    <div
      css={css`
        display: flex;
        max-width: 20em;
        flex-direction: row;
        justify-content: space-between;
      `}
    >
      <DataInput label="Início do Ciclo" />
      <DataInput label="Fim do Ciclo" />
    </div>
  )
}

const DataInput = props => {
  return (
    <InputBox label={props.label}>
      {props.name}
      <input type="date" />
    </InputBox>
  )
}

const InputBox = props => {
  return (
    <div
      css={css`
        width: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        font-size: 100%;

        input {
          border-radius: 5%;
          font-size: 100%;
        }
      `}
    >
      <label
        css={css`
          font-weight: bold;
        `}
      >
        {props.label}
      </label>
      {props.children}
    </div>
  )
}

export default SendFileComponent
