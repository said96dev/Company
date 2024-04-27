import { graphql, useStaticQuery } from 'gatsby'

const useServices = () => {
  const data = useStaticQuery(query)
  const {
    allContentfulServices: { nodes: services },
  } = data
  return services
}

const query = graphql`
  {
    allContentfulServices {
      nodes {
        id
        show
        title
        description {
          description
        }
        img {
          gatsbyImageData(
            width: 500
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`
export default useServices
