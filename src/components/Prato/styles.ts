import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.li`
  background-color: ${cores.principal};
  color: ${cores.fundo};
  padding: 8px;
  display: flex;
  flex-direction: column;

  img {
    display: block;
    width: 100%;
    height: 167px;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
    font-weight: 900;
    margin: 8px 0;
    color: ${cores.fundo};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
    color: ${cores.fundo};
    flex: 1;
  }
`
