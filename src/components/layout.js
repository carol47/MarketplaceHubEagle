import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import "normalize.css"
import "../pages/layout.css"
import Header from "./header"
import { css } from "@emotion/core"
import { Provider } from "react-redux"
import store from "../components/store"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Provider store={store}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 100vw;
          line-height: 1;
          * {
            box-sizing: border-box;
          }
        `}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <footer></footer>
        </div>
      </div>
    </Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
