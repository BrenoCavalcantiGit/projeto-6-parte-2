import styled from 'styled-components'
import { cores } from '../../styles'

export const Lista = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: ${cores.principal};
  color: ${cores.fundo};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
`
