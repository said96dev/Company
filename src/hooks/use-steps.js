import { graphql, useStaticQuery } from 'gatsby'

const useSteps = () => {
  const data = useStaticQuery(query)
  const {
    allContentfulSteps: { nodes: steps },
  } = data
  return steps
}
const query = graphql`
  {
    allContentfulSteps(sort: { index: ASC }) {
      nodes {
        index
        steps {
          steps
        }
        title
        description
      }
    }
  }
`

export default useSteps
