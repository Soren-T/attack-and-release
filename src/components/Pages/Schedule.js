import React from 'react'

const metaphors = [
  'audio gold',
  'Montana summer',
  'a million bucks',
  'Frank Sinatra and Miley Cyrus had a baby'
];

const getMetaphor = () => {
  let randomInt = Math.floor(Math.random() * Math.floor(4));
  return metaphors[randomInt];
}

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
        <label htmlFor="body">Message</label>
        <textarea
          name="Body"
          id="body" 
          rows="4"
          placeholder={`If you want Matt to make you sound like ${getMetaphor()}, write him a message with your name and phone number...`} />
      </div>
      <ul className="actions">
        <li>
          <input type="submit" value="Send Email" className="special" />
        </li>
      </ul>
    </form>
    {close}
  </article>
)

export default Schedule
