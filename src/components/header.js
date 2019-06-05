import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from 'gatsby-image'

const Header = ({ siteLogo, menuImg }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      zIndex: 100,
      backgroundColor: 'white',
    }}
  className = {'sticky'}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
        zIndex: 100,
        position: 'relative',
      }}> 
      {/* <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
      <Img style={{width:'20px', position: 'absolute', margin: 'auto', top: '35%'}} fluid={menuImg} />
      </Link> */}
        <div style={{
          margin: 'auto',
          maxWidth: '30px'}}>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
          <Img fluid={siteLogo} />
        </Link>
        </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
