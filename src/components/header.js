import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      textAlign: "center",
    }}
  >
    <div style={{ padding: '1rem' }}>
      <Link
        to="/"
        style={{
          fontSize: '1.25rem',
          color: '#353535',
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </div>
    {/* <div>
      <Link to="/" style={{ margin: '0 0.5rem' }}>index</Link>
      <Link to="/something/">something</Link>
    </div> */}
    <hr></hr>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
