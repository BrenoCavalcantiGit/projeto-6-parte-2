import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.li`
  background-color: ${cores.branco};
  border: 1px solid ${cores.principal};
  position: relative;
  display: flex;
  flex-direction: column;

  > img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`

export const Conteudo = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;

  p {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0;
    flex: 1;
  }
`

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    font-weight: bold;
  }
`
