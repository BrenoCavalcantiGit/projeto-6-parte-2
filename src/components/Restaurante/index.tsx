import * as S from './styles'
import { BotaoLink } from '../../styles'
import Tags from '../Tags'

import { Restaurante as RestauranteType } from '../../models/Restaurante'
import { capitalizar, limitaTexto } from '../../utils'

type Props = {
  restaurante: RestauranteType
}

const Restaurante = ({ restaurante }: Props) => {
  const tags = restaurante.destacado
    ? ['Destaque da semana', capitalizar(restaurante.tipo)]
    : [capitalizar(restaurante.tipo)]

  return (
    <S.Card>
      <img src={restaurante.capa} alt={restaurante.titulo} />
      <Tags tags={tags} />
      <S.Conteudo>
        <S.Cabecalho>
          <h3>{restaurante.titulo}</h3>
          <div>
            <span>{restaurante.avaliacao}</span>
            <span>⭐</span>
          </div>
        </S.Cabecalho>
        <p>{limitaTexto(restaurante.descricao, 230)}</p>
        <BotaoLink to={`/perfil/${restaurante.id}`}>Saiba mais</BotaoLink>
      </S.Conteudo>
    </S.Card>
  )
}

export default Restaurante
