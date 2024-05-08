import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import Features from '../components/Features/Projects'
import ProductTemplate from '../templates/service-template'

const ContentfulServices = ({ data: { contentfulServices } }) => {
  return (
    <>
      <Layout>
        <ProductTemplate {...contentfulServices} />
      </Layout>
    </>
  )
}

export default ContentfulServices
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
