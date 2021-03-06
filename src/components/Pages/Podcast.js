import React from 'react';
import kfgm from '../../images/kfgm.jpg';

const Podcast = ({ close, article, timeout }) => (
  <article
    id="podcast"
    className={`${article === 'podcast' ? 'active' : ''} ${
      timeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}
  >
    <h2 className="major">
      Podcast:
    </h2>    
    <div className="podcast">
      <div>
        <h3>KFGM Ballroom Sessions</h3>
        <p>
          Matt Olson recorded, produced and hosted the KFGM Ballroom Sessions 
          staged at the Union Hall theater. The program brought in Montana 
          bands as well as local familiar voices to host interview segments.
        </p>
        <a href="https://archive.org/details/@kfgm_ballroom_sessions">
          <h3>listen here</h3>
        </a>
      </div>
      <img src={kfgm} alt="kfgm" />
    </div>
    {close}
  </article>
)

export default Podcast