export const formataPreco = (preco: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)

export const limitaTexto = (texto: string, max: number) =>
  texto.length > max ? texto.slice(0, max - 3).trimEnd() + '...' : texto

export const capitalizar = (texto: string) =>
  texto.charAt(0).toUpperCase() + texto.slice(1)
