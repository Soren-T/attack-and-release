import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    <ul className="icons">
      <li>
        <a href="https://www.facebook.com/attackandreleasesound/" className="icon fa-facebook">
          <span className="label">Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/attackandreleasesound/?hl=en" className="icon fa-instagram">
          <span className="label">Instagram</span>
        </a>
      </li>
    </ul>
    <p className="copyright"> &copy; attack and release sound and studio</p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool
}

export default Footer
