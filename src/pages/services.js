import React from 'react'
import { graphql } from 'gatsby'
import ServiceTemplate from '../templates/service-template'
import Layout from '../components/Layout'
import Features from '../components/Features/Projects'

const Services = () => {
  return (
    <>
      <Layout>
        <Features
          title="Vivamus Interdum Neque Scelerisque"
          introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
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
