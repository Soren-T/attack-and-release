import React from 'react';
import Carousel from 'nuka-carousel';

const studioRecordings = [
  {
    title: 'Emzee & Silas - Flower',
    link: 'https://emzeemusik.bandcamp.com/track/flower',
    embed: 'https://bandcamp.com/EmbeddedPlayer/track=581555488/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/',
    style: { border: "0", width: "350px", height: "470px", alignSelf: 'center' },
    bandcamp: true
  },
  {
    title: 'Emzee & Silas - White',
    link: 'hhttps://emzeemusik.bandcamp.com/track/white',
    embed: 'https://bandcamp.com/EmbeddedPlayer/track=1919622105/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/',
    style: { border: "0", width: "350px", height: "470px", alignSelf: 'center' },
    bandcamp: true
  },
  {
    title: 'Emzee & Silas - Deserve',
    link: 'https://emzeemusik.bandcamp.com/track/deserve',
    embed: 'https://bandcamp.com/EmbeddedPlayer/track=722767516/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/',
    style: { border: "0", width: "350px", height: "470px", alignSelf: 'center' },
    bandcamp: true
  },
  {
    title: 'Hardwood Heart - Sail My Sins',
    link: 'https://hardwoodheart.bandcamp.com/album/sail-my-sins-ep',
    embed: 'https://bandcamp.com/EmbeddedPlayer/album=4097054213/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/',
    style: { border: "0", width: "350px", height: "470px", alignSelf: 'center' },
    bandcamp: true
  },
  {
    title: 'The Malicious Obfuscator - Disasters',
    link: 'https://themaliciousobfuscator.bandcamp.com/track/disasters',
    embed: 'https://bandcamp.com/EmbeddedPlayer/track=296830323/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/',
    style: { border: "0", width: "350px", height: "470px", alignSelf: 'center' },
    bandcamp: true
  },
  {
    title: 'FUULS - Blood Mouth',
    link: 'https://fuuls.bandcamp.com/track/blood-mouth',
    embed: 'https://bandcamp.com/EmbeddedPlayer/track=29295002/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/',
    style: { border: "0", width: "350px", height: "470px", alignSelf: 'center' },
    bandcamp: true
  },
  {
    title: 'Emzee & Silas - Road',
    link: 'https://emzeemusik.bandcamp.com/track/road',
    embed: 'https://bandcamp.com/EmbeddedPlayer/track=117656226/size=large/bgcol=333333/linkcol=0687f5/tracklist=false/transparent=true/',
    style: { border: "0", width: "350px", height: "470px", alignSelf: 'center' },
    bandcamp: true
  },
  {
    title: 'Emzee & Silas - Run',
    link: 'https://emzeemusik.bandcamp.com/track/run',
    embed: 'https://bandcamp.com/EmbeddedPlayer/track=3214838386/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/',
    style: { border: "0", width: "350px", height: "470px", alignSelf: 'center' },
    bandcamp: true
  },
  {
    title: 'Emzee & Silas - Bear and the Bull',
    link: 'https://emzeemusik.bandcamp.com/track/bear-and-the-bull-2',
    embed: 'https://bandcamp.com/EmbeddedPlayer/track=883289638/size=large/bgcol=333333/linkcol=0687f5/tracklist=false/transparent=true/',
    style: { border: "0", width: "350px", height: "470px", alignSelf: 'center' },
    bandcamp: true
  },
  {
    title: 'Emzee & Silas - Only Because',
    link: 'http://emzeemusik.bandcamp.com/track/only-because-2',
    embed: 'https://bandcamp.com/EmbeddedPlayer/track=3825144018/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/',
    style: { border: "0", width: "350px", height: "470px", alignSelf: 'center' },
    bandcamp: true
  },
  {
    title: 'Emzee & Silas Live from Freecycles',
    link: 'http://emzeemusik.bandcamp.com/album/emzee-silas-live-from-freecycles',
    embed: 'https://bandcamp.com/EmbeddedPlayer/album=1967543748/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/',
    style: { border: "0", width: "350px", height: "470px", alignSelf: 'center' },
    bandcamp: true
  },
  {
    title: 'Hardwood Heart - The Longer Road',
    link: 'http://hardwoodheart.bandcamp.com/album/the-longer-road-ep',
    embed: 'https://bandcamp.com/EmbeddedPlayer/album=3319738604/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/',
    style: { border: "0", width: "350px", height: "470px", alignSelf: 'center' },
    bandcamp: true
  },
  {
    title: 'Anything Bagel - Tormi',
    link: 'http://anythingbagel.bandcamp.com/album/tormi',
    embed: 'https://bandcamp.com/EmbeddedPlayer/album=3605030031/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/',
    style: { border: "0", width: "350px", height: "470px", alignSelf: 'center' },
    bandcamp: true
  },
  {
    title: 'Secondhand Shenanigans - operating from the subconscious',
    link: 'http://secondhandshenanigans.bandcamp.com/album/operating-from-the-subconscious',
    embed: 'https://bandcamp.com/EmbeddedPlayer/album=983656720/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/',
    style: { border: "0", width: "350px", height: "470px", alignSelf: 'center' },
    bandcamp: true
  }
];

const liveRecordings = [
  {
    title: 'Hellgate Music Series - Shakewell',
    link: 'https://youtube.com/watch?v=MY96p-mn42Y',
    embed: 'https://www.youtube.com/embed/MY96p-mn42Y',
    style: { alignSelf: 'center'},
    bandcamp: false
  },
  {
    title: 'Hellgate Music Series - Mirror Gods, Red Onion Purple, Transcendental Express',
    link: 'https://youtube.com/watch?v=ZPQv8S_hrQA',
    embed: 'https://www.youtube.com/embed/ZPQv8S_hrQA',
    style: { alignSelf: 'center'},
    bandcamp: false
  },
  {
    title: 'Hellgate Music Series - Letter B',
    link: 'https://www.youtube.com/watch?v=p1xUNjxOirg',
    embed: 'https://www.youtube.com/embed/p1xUNjxOirg',
    style: { alignSelf: 'center'},
    bandcamp: false
  },
  {
    title: 'Hellgate Music Series - Emze & Silas with Hardwood Heart',
    link: 'https://www.youtube.com/watch?v=WiV-BBpruSY',
    embed: 'https://www.youtube.com/embed/WiV-BBpruSY',
    style: { alignSelf: 'center'},
    bandcamp: false
  },
  {
    title: 'Hellgate Music Series - Arrowleaf',
    link: 'https://www.youtube.com/watch?v=WfkIxSb9YRo',
    embed: 'https://www.youtube.com/embed/WfkIxSb9YRo',
    style: { alignSelf: 'center'},
    bandcamp: false
  },
  {
    title: 'Double Dirty Ocelot - Mad For The Money',
    link: 'https://www.youtube.com/watch?v=vBIEpiccPBc',
    embed: 'https://www.youtube.com/embed/vBIEpiccPBc',
    style: { alignSelf: 'center'},
    bandcamp: false
  },
  {
    title: 'Jesse, The Ocelot - Grow Faster',
    link: 'https://www.youtube.com/watch?v=yM5ShM5Y0Oo',
    embed: 'https://www.youtube.com/embed/yM5ShM5Y0Oo',
    style: { alignSelf: 'center'},
    bandcamp: false
  },
  {
    title: 'Super Cub at Ponyfest Parlor Sessions',
    link: 'https://www.youtube.com/channel/UCwKB6PG98bVjU1UjdHfDcJg',
    embed: 'https://www.youtube.com/embed/w2dpLgg-_Gg',
    style: { alignSelf: 'center'},
    bandcamp: false
  },
  {
    title: 'Shahs Live at Freecycles',
    link: 'http://shahs.bandcamp.com/album/pleasures-etc-live-free-cycles-5-4-18',
    embed: 'https://bandcamp.com/EmbeddedPlayer/album=1498826153/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/',    
    style: { border: "0", width: "350px", height: "470px", alignSelf: 'center' },
    bandcamp: true
  }
];

const Recordings = ({ close, article, timeout }) => {  
  const renderRecordings = (recordings) => {
    return (
      <React.Fragment>
        <ul className="center video-list">
          {recordings.map((r, i) => {
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
          {recordings.map((r, i) => {
              return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', margin: '5px' }}>        
                  {r.bandcamp ? (
                    <iframe
                      style={r.style}
                      title={r.title}
                      src={r.embed} />
                  ) : (
                    <iframe
                      style={r.style}
                      title={r.title}
                      width="100%"
                      height="360"
                      src={r.embed} 
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen />
                  )}
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
      {renderRecordings(studioRecordings)}

      <h3>Live:</h3>
      {renderRecordings(liveRecordings)}
      {close}
    </article>
  );
}

export default Recordings