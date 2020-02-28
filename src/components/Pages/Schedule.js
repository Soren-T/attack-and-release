import React from 'react'

const Schedule = ({ close, article, timeout }) => (
  <article
    id="schedule"
    className={`${article === 'schedule' ? 'active' : ''} ${
      timeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}
  >
    <h2 className="major">Schedule</h2>
    <form method="post" action="#">
      <div className="field half first">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="field half">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="4"></textarea>
      </div>
      <ul className="actions">
        <li>
          <input type="submit" value="Send Message" className="special" />
        </li>
        <li>
          <input type="reset" value="Reset" />
        </li>
      </ul>
    </form>
    <ul className="icons">
      <li>
        <a
          href="https://twitter.com/HuntaroSan"
          className="icon fa-twitter"
        >
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://codebushi.com" className="icon fa-facebook">
          <span className="label">Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://codebushi.com" className="icon fa-instagram">
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/codebushi/gatsby-starter-dimension"
          className="icon fa-github"
        >
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>
    {close}
  </article>
)

export default Schedule
