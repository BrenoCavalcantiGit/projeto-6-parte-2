import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

export const cores = {
  principal: '#E66767',
  secundaria: '#FFEBD9',
  fundo: '#FFF8F2',
  branco: '#FFFFFF'
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.fundo};
    color: ${cores.principal};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`

export const Aviso = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin: 80px 0;
`

export const BotaoLink = styled(Link)`
  display: inline-block;
  background-color: ${cores.principal};
  color: ${cores.fundo};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
`

export const BotaoCarrinho = styled.button`
  display: block;
  width: 100%;
  background-color: ${cores.fundo};
  color: ${cores.principal};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
  border: none;
  cursor: pointer;
`
