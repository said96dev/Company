import styled from 'styled-components'

export const AboutTextModuleStyles = styled.section`
  .container {
    p {
      font-size: 1.2rem;
    }
    display: grid;
    grid-template-columns: 1fr;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
    @media (min-width: 768px) {
    }
  }
`
