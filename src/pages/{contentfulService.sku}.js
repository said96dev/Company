import React from 'react'
import { graphql } from 'gatsby'
import ServiceTemplate from '../templates/service-template'
import Layout from '../components/Layout'

const Services = ({ data: { contentfulServices } }) => {
  console.log(contentfulServices)
  return (
    <>
      <Layout></Layout>
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
