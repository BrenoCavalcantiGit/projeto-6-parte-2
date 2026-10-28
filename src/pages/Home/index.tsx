import Header from '../../components/Header'
import Restaurante from '../../components/Restaurante'
import useRestaurantes from '../../hooks/useRestaurantes'
import { Aviso, Container } from '../../styles'

import * as S from './styles'

const Home = () => {
  const { restaurantes, carregando, erro } = useRestaurantes()

  return (
    <>
      <Header />
      <Container>
        {carregando && <Aviso>Carregando...</Aviso>}
        {erro && <Aviso>Não foi possível carregar os restaurantes.</Aviso>}
        <S.Lista>
          {restaurantes.map((r) => (
            <Restaurante key={r.id} restaurante={r} />
          ))}
        </S.Lista>
      </Container>
    </>
  )
}

export default Home
