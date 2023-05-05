import { graphql, useStaticQuery } from 'gatsby'

const usePorject = () => {
  const data = useStaticQuery(query)
  const {
    allContentfulProjects: { nodes: projects },
  } = data

  return projects
}

const query = graphql`
  {
    allContentfulProjects {
      nodes {
        github
        title
        url
        stack {
          stack
        }
        description {
          description
        }
        image {
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
export default usePorject
