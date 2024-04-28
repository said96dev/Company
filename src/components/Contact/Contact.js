import * as React from 'react'
import Button from '../Button/Button'
import { ContactStyles } from './ContactStyles'

const Contact = () => {
  return (
    <ContactStyles className="section">
      <form name="contact" netlify>
        <input placeholder="Ditt namn..." type="text" name="name" />
        <input placeholder="Ditt Emai..." type="email" name="email" />
        <textarea
          placeholder="Ditt meddelande..."
          name="message"
          rows="5"
        ></textarea>
        <Button text="Skicka meddelande" />
      </form>
    </ContactStyles>
  )
}

export default Contact
