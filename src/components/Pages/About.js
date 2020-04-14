import React from 'react';
import matt2 from '../../images/matt2.jpg';

const About = ({ close, article, timeout }) => (
  <article
    id="about"
    className={`${article === 'about' ? 'active' : ''} ${
      timeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}
  >
    <h2 className="major">About</h2>
    <p>
      Matt Olson is a musician, producer, live and recorded audio engineer. 
      He has been an avid member of the Missoula music scene since 2006. 
      He has worked with countless bands providing them with opportunities to play, 
      record, promote and connect to a larger audience.
    </p>
    <span className="image main">
      <img src={matt2} alt="matt" />
    </span>
    {close}
  </article>
)

export default About