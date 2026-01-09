import api from './api'
import type { Sale, SaleCreate } from '../types/sale'

export const getSales = async (): Promise<Sale[]> => {
  const response = await api.get('/sales')
  return response.data
}

export const createSale = async (sale: SaleCreate): Promise<Sale> => {
  const response = await api.post('/sales', sale)
  return response.data
}

export const deleteSale = async (id: number) => {
  await api.delete(`/sales/${id}`)
}
