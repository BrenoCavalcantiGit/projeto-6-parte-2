import styled from 'styled-components'
import { cores } from '../../styles'

export const Barra = styled.header`
  background-color: ${cores.secundaria};
  padding: 40px 0;

  > div {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }

  a,
  span {
    font-size: 18px;
    font-weight: 900;
  }

  span {
    text-align: right;
  }

  @media (max-width: 768px) {
    a,
    span {
      font-size: 12px;
    }
  }
`
