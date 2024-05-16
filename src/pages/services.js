import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features/Projects'

const Services = () => {
  return (
    <>
      <Layout>
        <Features
          title="Våra Tjänster"
          introduction="På AL Alltjänst erbjuder vi ett brett utbud av tjänster för att underhålla och förbättra din fastighet. Detta innebär att vi kan hjälpa till med allt från enklare underhållsarbete till mer omfattande renoveringar och förbättringar. Vårt mål är att se till att din fastighet inte bara bibehåller sitt värde, utan också förbättras över tid."
        />
      </Layout>
    </>
  )
}

export const data = graphql`
  query servicQuery($id: String) {
    contentfulServices(id: { eq: $id }) {
      show
      description {
        description
      }
      title
      img {
        gatsbyImageData(
          width: 2000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default Services
