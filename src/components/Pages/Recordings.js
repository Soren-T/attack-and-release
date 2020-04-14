import React from 'react';
import Carousel from 'nuka-carousel';

const studioRecordings = [
  {
    description: 'Rooster Sauce',
    link: 'https://roostersauce.bandcamp.com/album/live-ep-the-last-days-of-disco-fries'
  },
  {
    description: 'Hardwood Heart',
    link: 'https://hardwoodheart.bandcamp.com/album/the-longer-road-ep '
  },
  {
    description: 'Anything Bagel',
    link: 'https://anythingbagel.bandcamp.com/album/tormi'
  },
  {
    description: 'Secondhand Shenanigans',
    link: 'https://secondhandshenanigans.bandcamp.com/releases'
  }
];

const liveRecordings = [
  {
    title: 'Double Dirty Ocelot - Mad For The Money',
    link: 'https://www.youtube.com/embed/vBIEpiccPBc'
  },
  {
    title: 'Ocelot Wizard - Blind',
    link: 'https://www.youtube.com/embed/ydRuvSv4yXI'
  },
  {
    title: 'Jesse, The Ocelot - Grow Faster',
    link: 'https://www.youtube.com/embed/yM5ShM5Y0Oo'
  },
  {
    title: 'Super Cub - Parlor Sessions',
    link: 'https://www.youtube.com/embed/w2dpLgg-_Gg'
  }
];

const Recordings = ({ close, article, timeout }) => {  
  const renderLiveRecordings = () => {
    return (
      <React.Fragment>
        <ul className="center video-list">
          {liveRecordings.map((r, i) => {
            return (
              <li key={i}>        
                <a href={r.link}>{r.title}</a>
              </li>
            )
          })}
        </ul>
        <Carousel
          className="video"
          renderCenterLeftControls={({ previousSlide }) => (
            <button onClick={previousSlide}>
              <i className="fa fa-chevron-left" />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button onClick={nextSlide}>
              <i className="fa fa-chevron-right"/>
            </button>
          )}
          renderBottomCenterControls={() => null}
          wrapAround>
          {liveRecordings.map((r, i) => {
              return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column'}}>        
                  <iframe
                    style={{ alignSelf: 'center'}}
                    title={r.title}
                    width="100%"
                    height="360"
                    src={r.link} 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>      
                  </iframe>
                </div>
              )
            })}
        </Carousel>
      </React.Fragment>
    );   
  }

  return (
    <article
      id="recordings"
      className={`${article === 'recordings' ? 'active' : ''} ${
        timeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Recordings</h2>

      <h3>Studio:</h3>
      <ul className="center">
        {studioRecordings.map((r, i) => {
          return (
            <li key={i}>        
              <a href={r.link}>{r.description}</a>
            </li>
          )
        })}
      </ul>

      <h3>Live:</h3>
      {renderLiveRecordings()}
      {close}
    </article>
  );
}

export default Recordings