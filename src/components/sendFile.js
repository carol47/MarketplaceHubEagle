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
    </div>
  )
}

//http://localhost:9000/api/back/v1/uploadDados/
//https://webhook.site/61dbed38-a99f-4b1b-b0f3-f275f607ec71

const SendFileForm = props => {
  const reqUrl = "http://localhost:9000/api/back/v1/uploadDados/"
  const sendData = e => {
    e.preventDefault()

    const fileInput = document.getElementById("fileCache")
    const file = fileInput.files.item(0)
    if (!file) {
      alert("Não há arquivo carregado!")
      return
    }

    const formData = new FormData()
    const headers = new Headers({
      Authorization: "token f9470fede3f26b7d12a8d78d617cd637e661d0f6",
      file: file.name,
      "Content-Disposition": `attachment; filename=${file.name}`,
    })

    const json = {
      pessoa: 1,
      tipo_tabela: 1,
      empresa_plataforma: 3,
      plataforma_origem: 1,
      data_inicio: "2020-07-01",
      data_fim: "2020-07-16",
    }

    formData.append("informacoes_json", JSON.stringify(json))
    formData.append("arquivo", file, file.name)

    console.log(file)
    fetch(reqUrl, {
      method: "POST",
      body: formData,
      headers: headers,
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
