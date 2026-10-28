import styled from 'styled-components'
import { cores } from '../../styles'

export const Rodape = styled.footer`
  background-color: ${cores.secundaria};
  padding: 40px 0;
  text-align: center;
  margin-top: 120px;

  img {
    display: block;
    margin: 0 auto 32px;
  }

  p {
    font-size: 10px;
    max-width: 480px;
    margin: 80px auto 0;
    padding: 0 16px;
  }
`

export const Redes = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${cores.principal};
    color: ${cores.secundaria};
    font-size: 12px;
    font-weight: bold;
  }
`
