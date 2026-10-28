import * as S from './styles'
import { Container } from '../../styles'

type Props = {
  categoria: string
  titulo: string
  imagem: string
}

const Banner = ({ categoria, titulo, imagem }: Props) => (
  <S.Imagem style={{ backgroundImage: `url(${imagem})` }}>
    <Container className="container">
      <span>{categoria}</span>
      <h2>{titulo}</h2>
    </Container>
  </S.Imagem>
)

export default Banner
