import * as React from 'react'
import Button from '../Button/Button'
import { ContactStyles } from './ContactStyles'
import { useForm, ValidationError } from '@formspree/react'
import { Link } from 'gatsby'

const Contact = () => {
  const [state, handleSubmit] = useForm(process.env.GATSBY_CONTACT_FORM)
  if (state.succeeded) {
    return (
      <div className="section container container__tight">
        <h2>Tack för ditt meddelande!</h2>
        <p>Vi återkommer till dig så snart som möjligt.</p>
        <Link to={'/'}>
          <Button text="Tillbaka till startsidan" as="span" arrow={true} />
        </Link>
      </div>
    )
  }

  return (
    <ContactStyles className="section ">
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
