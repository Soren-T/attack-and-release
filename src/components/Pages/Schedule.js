import React, { useState } from 'react'

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

const Schedule = ({ close, article, timeout }) => {
  const [ name, setName ] = useState();
  const [ message, setMessage ] = useState();
  const [ email, setEmail ] = useState(); // eslint-disable-line no-unused-vars
  const [ metaphor ] = useState(getMetaphor);

  const handleForm = (e) => {
    let value = e.target.value;
    let type = e.target.id;
    switch (type) {
      case 'name':
        setName(value)
        break;
      case 'email':
        setEmail(value)
        break;
      default:
        //message
          setMessage(value);
        break;
    }
  }

  return (
    <article
    id="schedule"
    className={`${article === 'schedule' ? 'active' : ''} ${
      timeout ? 'timeout' : ''
    }`}
    style={{ display: 'none' }}>
      <h2 className="major">Schedule</h2>
      <form action={`mailto:matt.d.olson78@gmail.com?subject=Recording%20for%20${name}&body=${message}`}>
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={handleForm} id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" onChange={handleForm} id="email" />
        </div>
        <div className="field">
          <label htmlFor="body">Message</label>
          <textarea
            name="Body"
            onChange={handleForm}
            id="body" 
            rows="4"
            placeholder={`If you want Matt to make you sound like ${metaphor}, write him a message with your name and phone number...`} />
        </div>
        <ul className="actions">
          <li>
            <input
              type="submit"
              value="Send Email"
              className="special"
              disabled={!name || !message}
            />
          </li>
        </ul>
      </form>
      {close}
    </article>
  );  
}

export default Schedule
