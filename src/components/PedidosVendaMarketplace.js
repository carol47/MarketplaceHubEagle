import React from "react"
import { useEffect, useState } from "react"
import {
  AccordionSummary,
  AccordionDetails,
  Accordion,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

export default () => {
  const [intervals, setIntervals] = useState([])
  const [intervalDetails, setIntervalDetails] = useState("")

  useEffect(() => {
    const headers = new Headers({
      Authorization: "token f9470fede3f26b7d12a8d78d617cd637e661d0f6",
    })
    fetch(
      "http://localhost:9000/api/back/v1/getPv_pag_cic_int/emp/1/plat/2/tip_tab/2/",
      { method: "GET", headers }
    )
      .then(response => response.json())
      .then(json => {
        console.log(json.results)
        setIntervals(json.results)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h1>Pedidos de Venda/Pagamento</h1>
      <div>
        {intervals.map((interval, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              onClick={async () =>
                interval.pedidos_venda.forEach(async pedido =>
                  setIntervalDetails(await loadIntervalDetails(pedido.url))
                )
              }
            >
              {interval.cabecalho.slice(12, interval.length)}
            </AccordionSummary>
            <AccordionDetails>{intervalDetails}</AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  )
}

const loadIntervalDetails = async url => {
  const data = await fetch(url)
  const json = await data.json()

  console.log(json)

  return (
    <table>
      <thead>
        <th>Número do Pedido</th>
        <th>Data da Compra</th>
        <th>SKU</th>
        <th>Qtde SKU</th>
        <th>Comissão</th>
        <th>Valor Comissão</th>
        <th>Comissão Cancelamento</th>
        <th>Frete</th>
        <th>Desconto</th>
        <th>Subtotal</th>
        <th>Total</th>
        <th>Repasse</th>
        <th>Status</th>
      </thead>
      <tbody>
        {json.results[0].pedidos_venda.map(pedido => (
          <tr key={pedido.numeroPedido}>
            <td>{pedido.numero_pedido}</td>
            <td>{pedido.data_compra}</td>
            <td>???</td>
            <td>???</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
