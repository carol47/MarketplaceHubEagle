import React from "react"
import { useEffect, useState } from "react"
import {
  Button,
  TextField,
  FormControlLabel,
  Switch,
  Radio,
  RadioGroup,
  Slide,
  Input,
} from "@material-ui/core"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Dialog from "@material-ui/core/Dialog"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

export default props => {
  const [initialContent, setInitialContent] = useState([])
  const [
    conciliacaoModalVisibility,
    setCreateConciliacaoModalVisibility,
  ] = useState(false)

  const handleCreateConciliacaoModalVisibility = () =>
    setCreateConciliacaoModalVisibility(!conciliacaoModalVisibility)

  useEffect(() => {
    fetch("http://127.0.0.1:9000/api/back/v1/comiss/emp/1/plat/2/")
      .then(response => response.json())
      .then(json => {
        console.log(json.results)
        setInitialContent(json.results)
      })
  }, [])

  return (
    <div>
      <h1>Comissão / Promoção</h1>
      <hr />
      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateConciliacaoModalVisibility}
      >
        Criar Comissão / Promoção
      </Button>
      <Dialog
        fullScreen
        open={conciliacaoModalVisibility}
        onClose={() => setCreateConciliacaoModalVisibility(false)}
      >
        <Button onClick={() => setCreateConciliacaoModalVisibility(false)}>
          Fechar
        </Button>
        <CreateConciliacao></CreateConciliacao>
      </Dialog>
      <table>
        <thead>
          <th>Valor</th>
          <th>Aplicação</th>
          <th>Tipo</th>
          <th>Data Início</th>
          <th>Data Fim</th>
          <th>Status</th>
          <th>Ações</th>
        </thead>
        <tbody>
          {initialContent.map(item => (
            <tr key={item.id}>
              <td>{item.valor}</td>
              <td>{item.loja_toda ? "Loja toda" : "SKU"}</td>
              <td>{item.registro_padrao ? "Padrão" : "Promoção"}</td>
              <td>{item.data_inicio}</td>
              <td>{item.data_fim}</td>
              <td>{item.status ? "Ativo" : "Inativo"}</td>
              <td>{!item.registro_padrao ? "Editar" : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const CreateConciliacao = props => {
  const [tipoComissao, setTipoComissao] = useState(true)
  const [valor, setValor] = useState(0)
  const [dataInicio, setDataInicio] = useState("")
  const [dataFim, setDataFim] = useState("")
  const [lojaToda, setLojaToda] = useState(true)

  const handleTipoComissao = () => setTipoComissao(!tipoComissao)

  const handleSubmit = e => {
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
      empresa_plataforma: 2,
      valor,
      data_inicio: dataInicio,
      data_fim: dataFim,
      registro_padrao: 1,
      loja_toda: 0,
    }

    const reqUrl = "http://127.0.0.1:9000/api/back/v1/comiss/comiss_emp_plat/"

    fetch(reqUrl, {
      method: "POST",
      body: formData,
      headers: headers,
    })
      .then(res => res.text())
      .then(json => {
        console.log(json)
      })
    //console.log(dataInicio)
  }

  return (
    <div>
      <h3>Cadastrar Comissão / Promoção</h3>
      <form>
        <TextField
          required
          value={valor}
          id="standard-required"
          label="Valor"
          variant="outlined"
          onChange={e => setValor(e.target.value)}
        ></TextField>
        <div>
          <FormControlLabel
            control={
              <Switch
                value={tipoComissao}
                checked={tipoComissao}
                onChange={handleTipoComissao}
                name="tipoComissao"
                color="primary"
              />
            }
            label="Padrão"
          />
          <div>
            <TextField
              value={dataInicio}
              required
              defaultValue=" "
              id="standard-required"
              label="Data Início"
              variant="outlined"
              onChange={e => setDataInicio(e.target.value)}
            ></TextField>
            <TextField
              value={dataFim}
              required
              defaultValue=" "
              id="standard-required"
              label="Data Fim"
              variant="outlined"
              onChange={e => setDataFim(e.target.value)}
            ></TextField>
          </div>
        </div>
        <Input name="file" id="fileCache" type="file" multiple />
        {!tipoComissao ? <NaoPadraoComponente /> : ""}
        <Button type="submit" color="primary" onClick={e => handleSubmit(e)}>
          Enviar
        </Button>
      </form>
    </div>
  )
}

const NaoPadraoComponente = props => {
  const [tipoComissao, setTipoComissao] = useState("")
  const [tipoInsercaoSKU, setTipoInsercaoSKU] = useState("upload")
  const [insereSKU, setInsereSKU] = useState("")
  const [skuList, setSKUList] = useState(["milo"])

  return (
    <div>
      <div>{tipoComissao}</div>
      <RadioGroup
        name="radio"
        onChange={e => setTipoComissao(e.target.value)}
        css={css`
          display: inline;
          border: 1px solid black;
        `}
      >
        <FormControlLabel
          value="lojaToda"
          control={<Radio />}
          label="Loja Toda"
        />
        <FormControlLabel value="SKUs" control={<Radio />} label="SKUs" />
      </RadioGroup>
      {tipoComissao === "SKUs" ? (
        <div>
          <RadioGroup
            name="radio"
            onChange={e => setTipoInsercaoSKU(e.target.value)}
          >
            <FormControlLabel
              value="upload"
              control={<Radio />}
              label="Upload de Arquivo"
            />
            <FormControlLabel
              value="manual"
              control={<Radio />}
              label="Inserir SKUs manualmente"
            />
          </RadioGroup>
          {tipoInsercaoSKU === "manual" ? (
            <div>
              <div>
                <TextField
                  required
                  value={insereSKU}
                  onChange={e => setInsereSKU(e.target.value)}
                  id="standard-required"
                  label="SKU"
                  variant="outlined"
                ></TextField>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setSKUList([...skuList, insereSKU])
                    setInsereSKU("")
                  }}
                >
                  Insere SKU
                </Button>
              </div>
              <h4>Lista de SKUs</h4>
              <List>
                {skuList.map(item => {
                  return (
                    <ListItem>
                      <ListItemText primary={item} />
                    </ListItem>
                  )
                })}
              </List>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
