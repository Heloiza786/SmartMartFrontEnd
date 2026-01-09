import api from './api'
import type { Product, ProductCreate } from '../types/product'

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get('/products')
  return response.data
}

export const createProduct = async (
  product: ProductCreate
): Promise<Product> => {
  const response = await api.post('/products', product)
  return response.data
}

export const deleteProduct = async (id: number) => {
  await api.delete(`/products/${id}`)
}
