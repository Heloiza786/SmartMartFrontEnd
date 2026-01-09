import api from './api'
import type{ Sale } from '../types/sale'

export const getSales = async (): Promise<Sale[]> => {
  const response = await api.get('/sales')
  return response.data
}
