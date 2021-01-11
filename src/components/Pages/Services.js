import React from 'react';
import studio2 from '../../images/studio2.jpg';

const Services = ({ close, article, timeout }) => (
  <article
    id="services"
    className={`${article === 'services' ? 'active' : ''} ${
      timeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}>
    <h2 className="major">Services</h2>
    <ul>
      <li>        
        Live Sound
      </li>
      <li>        
        Studio Recording
      </li>
      <li>        
        Mixing
      </li>
      <li>        
        Mastering
      </li>
    </ul>
    <span className="image main content">
      <img src={studio2} alt="studio2" />
    </span>
    {close} 
  </article>
)

export default Services