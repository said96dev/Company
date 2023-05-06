import styled from 'styled-components'

export const BasicTextModuleStyles = styled.section`
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
    @media (min-width: 768px) {
    }
  }
`
