import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import HeaderPerfil from '../../components/HeaderPerfil'
import Modal from '../../components/Modal'
import Prato from '../../components/Prato'
import useRestaurantes from '../../hooks/useRestaurantes'
import { Prato as PratoType } from '../../models/Restaurante'
import { Aviso, Container } from '../../styles'
import { capitalizar } from '../../utils'

import * as S from './styles'

const Perfil = () => {
  const { id } = useParams()
  const { restaurantes, carregando, erro } = useRestaurantes()
  const [pratoSelecionado, setPratoSelecionado] = useState<PratoType | null>(
    null
  )

  const restaurante = restaurantes.find((r) => r.id === Number(id))

  if (!carregando && !erro && !restaurante) return <Navigate to="/" />

  return (
    <>
      <HeaderPerfil />
      {carregando && <Aviso>Carregando...</Aviso>}
      {erro && <Aviso>Não foi possível carregar o restaurante.</Aviso>}
      {restaurante && (
        <>
          <Banner
            categoria={capitalizar(restaurante.tipo)}
            titulo={restaurante.titulo}
            imagem={restaurante.capa}
          />
          <Container>
            <S.Lista>
              {restaurante.cardapio.map((p) => (
                <Prato key={p.id} prato={p} aoClicar={setPratoSelecionado} />
              ))}
            </S.Lista>
          </Container>
        </>
      )}
      <Modal
        prato={pratoSelecionado}
        aoFechar={() => setPratoSelecionado(null)}
      />
    </>
  )
}

export default Perfil
