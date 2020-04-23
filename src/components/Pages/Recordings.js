import React from 'react';
import Carousel from 'nuka-carousel';

const studioRecordings = [
  {
    title: 'Hardwood Heart',
    embed: 
      <iframe
        title="Hardwood Heart"
        style={{ border: 0, width: '350px', height: '470px' }}
        src="https://bandcamp.com/EmbeddedPlayer/album=3319738604/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/"
        seamless>
        <a href="http://hardwoodheart.bandcamp.com/album/the-longer-road-ep">
          The Longer Road EP by Hardwood Heart
        </a>
      </iframe>,
  },
  {
    title: 'Anything Bagel',
    embed: 
      <iframe
        title="Anything Bagel"
        style={{ border: 0, width: '350px', height: '470px' }}
        src="https://bandcamp.com/EmbeddedPlayer/album=3605030031/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/"
        seamless>
        <a href="http://anythingbagel.bandcamp.com/album/tormi">
          Tormi by Tormi
        </a>
      </iframe>,
  },
  {
    title: 'Secondhand Shenanigans',
    embed:
      <iframe
        title="Secondhand Shenanigans"
        style={{ border: 0, width: '350px', height: '470px' }}
        src="https://bandcamp.com/EmbeddedPlayer/album=983656720/size=large/bgcol=333333/linkcol=0687f5/tracklist=false/transparent=true/"
        seamless>
        <a href="http://secondhandshenanigans.bandcamp.com/album/operating-from-the-subconscious">
          Operating from the Subconscious by Secondhand Shenanigans
        </a>
      </iframe>,
  },  
  {
    title: 'Emzee & Silas',
    embed:
      <iframe
        title="Emzee & Silas"
        style={{ border: 0, width: '350px', height: '470px' }}
        src="https://bandcamp.com/EmbeddedPlayer/track=388941043/size=large/bgcol=333333/linkcol=0687f5/tracklist=false/transparent=true/"
        seamless>
        <a href="http://emzeemusik.bandcamp.com/track/spine">
          Spine by Emzee
        </a>
      </iframe>,
  }
];

const liveRecordings = [
  {
    title: 'Double Dirty Ocelot - Mad For The Money',
    link: "https://www.youtube.com/watch?v=vBIEpiccPBc",
    embed: 'https://www.youtube.com/embed/vBIEpiccPBc'
  },
  {
    title: 'Ocelot Wizard - Blind',
    link: 'https://www.youtube.com/watch?v=ydRuvSv4yXI',
    embed: 'https://www.youtube.com/embed/ydRuvSv4yXI'
  },
  {
    title: 'Jesse, The Ocelot - Grow Faster',
    link: 'https://www.youtube.com/watch?v=yM5ShM5Y0Oo',
    embed: 'https://www.youtube.com/embed/yM5ShM5Y0Oo'
  },
  {
    title: 'Super Cub - Parlor Sessions',
    link: 'https://www.youtube.com/watch?v=w2dpLgg-_Gg',
    embed: 'https://www.youtube.com/embed/w2dpLgg-_Gg'
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
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer">
                  {r.title}
                </a>
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
                    src={r.embed} 
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
      <ul className="content" style={{ listStyle: 'none', paddingLeft: 0 }}>
        {studioRecordings.map((r, i) => {
          return (
            <li key={i} className="center">
              {r.embed}
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