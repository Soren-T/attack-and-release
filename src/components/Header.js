import PropTypes from 'prop-types';
import React from 'react';
import logo from '../images/logo.png';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">        
        <div className="logo">
          <span className="icon">
            <img src={logo} alt="logo" />
          </span>
        </div>
        <h1>Attack &amp; Release Sound &amp; Studio</h1>
        <p>
          Engineered by Matt Olson
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('services')
            }}
          >
            Services
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('recordings')
            }}
          >
            Recordings
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('podcast')
            }}
          >
            Podcast
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('schedule')
            }}
          >
            Schedule a Session
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
