import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import Contact from '../components/Contact/Contact'
//import Seo from '../components/SEO'
import SimpleBanner from '../components/SimpleBanner/SimpleBanner'
import BasicTextModule from '../components/AboutTextModule/AboutTextModule'

const about = () => {
  return (
    <>
      <Layout>
        <SimpleBanner title="About">
          <StaticImage
            className="banner__image"
            src="../assets/images/hero5.jpg"
            alt="Apple Macbook Dark"
          />
        </SimpleBanner>
        <BasicTextModule
          title=" Om AL Alltjänst: Vår Historia och Värderingar"
          content="
På AL Alltjänst är ditt nöje kärnan i vår verksamhet. Sedan starten har vi strävat efter att inte bara erbjuda tjänster, utan verkliga lösningar som möter våra kunders behov. Vårt företag har en framgångsrik historia där professionalism, kvalitetsarbete och kundnöjdhet alltid har varit våra ledande principer.

Vårt team består av högt kvalificerade proffs som kontinuerligt utbildar sig i de senaste teknikerna och metoderna. Denna expertis gör det möjligt för oss att ta oss an projekt av alla storlekar och komplexitetsgrader, samtidigt som vi alltid upprätthåller de högsta standarderna.

Vi förstår att varje byggnad och varje rum har sin egen historia och sina specifika behov. Därför tar vi oss tid att förstå dina önskemål och visioner innan vi börjar planera och genomföra. Vår omfattande rådgivning säkerställer att alla lösningar är perfekt anpassade till dina behov.

Förtroende för AL Alltjänst när det gäller att inte bara underhålla och förschöna din fastighet, utan även att göra den mer hållbar och funktionell för framtiden. Vi är stolta över att vår arbete bidrar till en mer hållbar och funktionell miljö. Låt oss tillsammans förverkliga din vision."
          link="/services"
          linkText="Visa tjänster"
        />
      </Layout>
    </>
  )
}

export default about
