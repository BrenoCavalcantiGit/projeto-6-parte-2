import { useEffect, useState } from 'react'

import { Restaurante } from '../models/Restaurante'
import { buscarRestaurantes } from '../services/api'

const useRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    buscarRestaurantes()
      .then((dados) => setRestaurantes(dados))
      .catch(() => setErro(true))
      .finally(() => setCarregando(false))
  }, [])

  return { restaurantes, carregando, erro }
}

export default useRestaurantes
