import * as S from './styles'

import logo from '../../assets/logo.svg'

const anoAtual = new Date().getFullYear()

const Footer = () => (
  <S.Rodape>
    <img src={logo} alt="efood" />
    <S.Redes>
      <li>
        <a href="https://instagram.com">i</a>
      </li>
      <li>
        <a href="https://facebook.com">f</a>
      </li>
      <li>
        <a href="https://twitter.com">t</a>
      </li>
    </S.Redes>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado. © {anoAtual}
    </p>
  </S.Rodape>
)

export default Footer
