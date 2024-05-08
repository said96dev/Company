import * as React from 'react'
import Button from '../Button/Button'
import { ContactStyles } from './ContactStyles'
import { useForm, ValidationError } from '@formspree/react'
import { Link } from 'gatsby'

const Contact = () => {
  const [state, handleSubmit] = useForm('mrgnjnyo')

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
    <ContactStyles className="section">
      <form onSubmit={handleSubmit} name="contact">
        <label htmlFor="name">Namn:</label>
        <input
          id="name"
          placeholder="Ditt namn..."
          type="text"
          name="name"
          required
        />
        <ValidationError field="name" errors={state.errors} />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          placeholder="Ditt Email..."
          type="email"
          name="email"
          required
        />
        <ValidationError field="email" errors={state.errors} />

        <label htmlFor="message">Meddelande:</label>
        <textarea
          id="message"
          placeholder="Ditt meddelande..."
          name="message"
          rows="5"
          required
        ></textarea>
        <ValidationError field="message" errors={state.errors} />

        <Button text="Skicka meddelande" disabled={state.submitting} />
      </form>
    </ContactStyles>
  )
}

export default Contact
