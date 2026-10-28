import { useEffect } from 'react'

import * as S from './styles'

import { Prato } from '../../models/Restaurante'
import { formataPreco } from '../../utils'

type Props = {
  prato: Prato | null
  aoFechar: () => void
}

const Modal = ({ prato, aoFechar }: Props) => {
  useEffect(() => {
    if (!prato) return

    const fecharComEsc = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') aoFechar()
    }

    window.addEventListener('keydown', fecharComEsc)
    return () => window.removeEventListener('keydown', fecharComEsc)
  }, [prato, aoFechar])

  if (!prato) return null

  const porcao = prato.porcao.includes(' a ') ? `de ${prato.porcao}` : prato.porcao

  return (
    <S.Overlay onClick={aoFechar}>
      <S.Janela
        role="dialog"
        aria-modal="true"
        onClick={(evento) => evento.stopPropagation()}
      >
        <S.Fechar type="button" aria-label="Fechar" onClick={aoFechar}>
          ✕
        </S.Fechar>
        <img src={prato.foto} alt={prato.nome} />
        <div>
          <h3>{prato.nome}</h3>
          <p>{prato.descricao}</p>
          <p>Serve: {porcao}</p>
          <S.BotaoComprar type="button">
            Adicionar ao carrinho - {formataPreco(prato.preco)}
          </S.BotaoComprar>
        </div>
      </S.Janela>
    </S.Overlay>
  )
}

export default Modal
