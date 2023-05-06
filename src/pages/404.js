import * as React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import Button from '../components/Button/Button'

const error = () => {
  return (
    <>
      <Layout>
        <div className='section'>
          <div className='container container__tight'>
            <h1>Sorry.</h1>
            <h3>Diese Seite ist nicht mehr vorhanden oder wurde verschoben.</h3>
            <p>
              Bitte wählen Sie eine andere Option aus dem obigen Menü, oder
              drücken Sie auf die Schaltfläche unten, um zur Startseite
              zurückzukehren.
            </p>
            <Button text='Home Seite' to='/' as={Link} />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default error
