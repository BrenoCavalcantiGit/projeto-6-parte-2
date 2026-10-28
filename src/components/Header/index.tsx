import * as S from './styles'

import logo from '../../assets/logo.svg'

const Header = () => (
  <S.Hero>
    <img src={logo} alt="efood" />
    <h2>
      Viva experiências gastronômicas
      <br />
      no conforto da sua casa
    </h2>
  </S.Hero>
)

export default Header
