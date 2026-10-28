import { Link } from 'react-router-dom'

import * as S from './styles'
import { Container } from '../../styles'

import logo from '../../assets/logo.svg'

const HeaderPerfil = () => (
  <S.Barra>
    <Container>
      <Link to="/">Restaurantes</Link>
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
      <span>0 produto(s) no carrinho</span>
    </Container>
  </S.Barra>
)

export default HeaderPerfil
