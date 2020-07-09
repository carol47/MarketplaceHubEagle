import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import "normalize.css"
import "../pages/layout.css"
import Header from "./header"
import { css } from "@emotion/core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

/////////////////////////////////////////////////////////////////////////////////////
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false
/////////////////////////////////////////////////////////////////////////////////////

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
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 100vw;
        line-height: 1;
        overflow: hidden;
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
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
