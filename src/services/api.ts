import { Restaurante } from '../models/Restaurante'

export const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

export const buscarRestaurantes = async (): Promise<Restaurante[]> => {
  const resposta = await fetch(API_URL)

  if (!resposta.ok) {
    throw new Error('Erro ao buscar restaurantes')
  }

  return resposta.json()
}
