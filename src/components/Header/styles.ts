import styled from 'styled-components'
import { cores } from '../../styles'

export const Hero = styled.header`
  background-color: ${cores.secundaria};
  text-align: center;
  padding: 40px 0;

  img {
    display: block;
    margin: 0 auto 80px;
  }

  h2 {
    font-size: 36px;
    font-weight: 900;
    line-height: 42px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 24px;
      line-height: 30px;
      padding: 0 16px;
    }
  }
`
