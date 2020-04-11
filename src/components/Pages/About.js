import React from 'react';
import matt from '../../images/matt.jpg';

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
      Matt Olson has been a part of the Montana music scene for many years.
      You can catch him doing sound around many venues in the area. 
      He has experience live streaming to radio, podcast recording and editing, 
      recording a live music set or editing and producing a full length album. 
      Some of his notable accomplishments are doing sound for The Moth radio hour at the Wilma, 
      Live Streaming the Butte Folk Festival and Producing, recording and editing the KFGM ballroom sessions. 
    </p>
    <span className="image main">
      <img src={matt} alt="matt" />
    </span>
    {close}
  </article>
)

export default About