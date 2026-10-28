import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  overflow-y: auto;
`

export const Janela = styled.div`
  position: relative;
  width: 100%;
  max-width: 1024px;
  background-color: ${cores.principal};
  color: ${cores.fundo};
  padding: 32px;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;

  img {
    display: block;
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
    color: ${cores.fundo};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
    color: ${cores.fundo};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 16px;

    img {
      width: 100%;
      height: 200px;
    }
  }
`

export const Fechar = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: ${cores.fundo};
  font-size: 18px;
  cursor: pointer;
`

export const BotaoComprar = styled.button`
  background-color: ${cores.fundo};
  color: ${cores.principal};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
  border: none;
  cursor: pointer;
`
