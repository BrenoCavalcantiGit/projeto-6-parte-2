import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;
  color: ${cores.branco};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.56);
  }

  .container {
    position: relative;
    z-index: 1;
    height: 100%;
    padding-top: 25px;
    padding-bottom: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  span {
    font-size: 32px;
    font-weight: 100;
    color: ${cores.branco};
  }

  h2 {
    font-size: 32px;
    font-weight: 900;
    color: ${cores.branco};
  }
`
