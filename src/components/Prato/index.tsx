import * as S from './styles'
import { BotaoCarrinho } from '../../styles'

import { Prato as PratoType } from '../../models/Restaurante'
import { limitaTexto } from '../../utils'

type Props = {
  prato: PratoType
  aoClicar: (prato: PratoType) => void
}

const Prato = ({ prato, aoClicar }: Props) => (
  <S.Card>
    <img src={prato.foto} alt={prato.nome} />
    <h3>{prato.nome}</h3>
    <p>{limitaTexto(prato.descricao, 132)}</p>
    <BotaoCarrinho type="button" onClick={() => aoClicar(prato)}>
      Mais detalhes
    </BotaoCarrinho>
  </S.Card>
)

export default Prato
