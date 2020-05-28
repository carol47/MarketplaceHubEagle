import React, { useState } from "react";
import { css } from "@emotion/core";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "./layout.css";

const IndexPage = () => {
  
  let [fileList, setFileList] = useState([]);
  let [reqUrl, setReqUrl] = useState("")

  const sendData = (e) => {

    e.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById("fileCache");
    
    formData.append("file1", fileInput.files.item(0));
    formData.append("file2", fileInput.files.item(1));

    fetch(reqUrl, {
      method: "POST",
      body: formData
    })
    .then(res => console.log(res))
    .catch(error => console.error(error));

  }

  return (
    <Layout>
      <SEO title="Home" />
      <h2>Envio de arquivos para Servidor:</h2>
      <label css={css`
          margin:  5px;
          padding: 5px;
        `}>
          URL para a requisição:&nbsp;
        <input type="text" name="reqDestiny" value = {reqUrl} placeholder="Endereço"
        css={css`padding:5px;margin:5px;`} onChange={(event) => setReqUrl(event.target.value)}
          />
      </label>
      <form
        id="filesForm"
        method="POST" encType="multipart/form-data"    
        css={css`
          display: flex;
          flex-direction: column;
        `}
        onSubmit={(e) => sendData(e)}>
        <label
        css={css`
          padding: 5px;
          margin: 5px;
        `}>Inserir Tabelas &nbsp;
          <input id="fileCache" type="file" name="file" multiple/>
        </label>
        <button type="submit" css={css`
          padding: 5px;
          margin: 5px;
          width:fit-content;
        `}>Enviar</button>
      </form>
     
    </Layout>
  )


}

export default IndexPage
