import * as React from 'react'
import Button from '../Button/Button'
import { ContactStyles } from './ContactStyles'
import { useForm, ValidationError } from '@formspree/react'

const Contact = () => {
  const [state, handleSubmit] = useForm('mrgnjnyo')

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>
  }
  return (
    <ContactStyles className="section">
      <form onSubmit={handleSubmit} name="contact" netlify>
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
