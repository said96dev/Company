import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import Contact from '../components/Contact/Contact'
//import Seo from '../components/SEO'
import SimpleBanner from '../components/SimpleBanner/SimpleBanner'

const contact = () => {
  return (
    <>
      <Layout>
        <SimpleBanner title="Ta kontakt med oss">
          <StaticImage
            className="banner__image"
            src="../assets/images/hero5.jpg"
            alt="Apple Macbook Dark"
          />
        </SimpleBanner>
        <Contact />
      </Layout>
    </>
  )
}

export default contact
