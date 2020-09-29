import React, { useState } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import {
  FormControl,
  Button,
  TextField,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Input,
  Snackbar,
} from "@material-ui/core"
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers"
import MomentUtils from "@date-io/moment"
import "moment/locale/pt-br"
import { Alert } from "@material-ui/lab"

const Box = styled.div`
  margin: 20px;
  & > * {
    margin: 20px 0px;
  }
`

const SendFileComponent = props => {
  const [tipoTabela, setTipoTabela] = useState("1")
  const [dataInicio, setDataInicio] = useState(null)
  const [dataFim, setDataFim] = useState(null)

  //Handle SnackBar
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackbarText, setSnackbarText] = useState("")
  const [snackbarSeverity, setSnackbarSeverity] = useState("")

  const handleSnackbarClick = () => {
    setOpenSnackbar(true)
  }

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpenSnackbar(false)
  }

  const handleSubmit = e => {
    const reqUrl = "http://localhost:9000/api/back/v1/uploadDados/"
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

    const convertMomentDateToDate = date =>
      date.year() + "-" + date.month() + "-" + date.day()

    const json = {
      pessoa: 1,
      tipo_tabela: parseInt(tipoTabela),
      empresa_plataforma: 3, //TODO: WHAT??
      plataforma_origem: 1,
      data_inicio: convertMomentDateToDate(dataInicio),
      data_fim: convertMomentDateToDate(dataFim),
    }

    console.log(json)

    formData.append("informacoes_json", JSON.stringify(json))
    formData.append("arquivo", file, file.name)

    fetch(reqUrl, {
      method: "POST",
      body: formData,
      headers: headers,
    })
      .then(res => res.text())
      .then(json => {
        if (json.categoria === "erro") {
          setSnackbarSeverity("error")
          setSnackbarText(json.mensagem)
        } else {
          setSnackbarSeverity("success")
          setSnackbarText(json.mensagem)
        }
        setOpenSnackbar(true)
        console.log(json)
      })
      .catch(error => console.log(error))
  }

  return (
    <FormControl component="fieldset">
      <form id="filesForm" onSubmit={handleSubmit}>
        <Box>
          {/* <form
      id="filesForm"
      method="POST"
      encType="multipart/form-data"
      onSubmit={e => sendData(e)}
    > */}
          <h1>{props.nomePlataforma}</h1>
          <h2>Upload de arquivos</h2>
          <TableTypeComponent
            data={tipoTabela}
            callback={e => setTipoTabela(e.target.value)}
          />
          <DatePanel
            dataInicio={dataInicio}
            dataFim={dataFim}
            setDataInicio={setDataInicio}
            setDataFim={setDataFim}
          />
          <Input name="file" id="fileCache" type="file" multiple />
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
          <Snackbar
            open={openSnackbar}
            onClose={handleSnackbarClose}
            autoHideDuration={6000}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Alert
              css={css`
                padding: 32px;
              `}
              variant="filled"
              severity={snackbarSeverity}
            >
              {snackbarText}
            </Alert>
          </Snackbar>
        </Box>
      </form>
    </FormControl>
  )
}

const TableTypeComponent = ({ data, callback }) => {
  return (
    <div>
      <FormLabel component="legend">Tipo de Tabela</FormLabel>
      <RadioGroup
        row
        aria-label="Tipo de Tabela"
        name="tipoTabela"
        value={data}
        onClick={callback}
      >
        <FormControlLabel
          value="1"
          control={<Radio />}
          label="Ciclo de Pagamento"
        />
        <FormControlLabel
          value="2"
          control={<Radio />}
          label="Pedido de Vendas"
        />
      </RadioGroup>
    </div>
  )
}

//http://localhost:9000/api/back/v1/uploadDados/
//https://webhook.site/61dbed38-a99f-4b1b-b0f3-f275f607ec71

const DatePanel = ({ dataInicio, dataFim, setDataInicio, setDataFim }) => {
  return (
    <div>
      <FormLabel component="legend">Intervalo de Data</FormLabel>
      <MuiPickersUtilsProvider row locale="pt" utils={MomentUtils}>
        <DatePicker
          label="Início"
          value={dataInicio}
          onChange={setDataInicio}
          format="DD/MM/yyyy"
        />

        <DatePicker
          label="Fim"
          value={dataFim}
          onChange={setDataFim}
          format="DD/MM/yyyy"
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

export default SendFileComponent
