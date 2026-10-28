import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  max-width: 960px;
  margin: 80px auto 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
