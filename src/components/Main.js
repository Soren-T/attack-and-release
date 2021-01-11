import PropTypes from 'prop-types';
import React from 'react';
import Recordings from './Pages/Recordings';
import Podcast from './Pages/Podcast';
import About from './Pages/About';
import Schedule from './Pages/Schedule';
import Services from './Pages/Services';

const renderArticles = (close, article, articleTimeout) => {
  switch (article) {
    case 'recordings':
      return <Recordings close={close} article={article} timeout={articleTimeout} />;
    case 'podcast':
      return <Podcast close={close} article={article} timeout={articleTimeout} />;
    case 'about':
      return <About close={close} article={article} timeout={articleTimeout} />;
    case 'schedule':
      return <Schedule close={close} article={article} timeout={articleTimeout} />;
    case 'services':
      return <Services close={close} article={article} timeout={articleTimeout} />;
    default:
      return null;
  }
}

class Main extends React.Component {
  render() {
    let close = (
      <div
        aria-label='close'
        role='button'
        tabIndex={0}
        className="close"
        onKeyDown={() => {
          this.props.onCloseArticle()
        }}
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    const { articleTimeout, article, setWrapperRef, timeout } = this.props;

    return (
      <div
        ref={setWrapperRef}
        id="main"
        style={timeout ? { display: 'flex' } : { display: 'none' }}>
        {renderArticles(close, article, articleTimeout)}
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
