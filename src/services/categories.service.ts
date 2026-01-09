import api from './api'
import type { Category, CategoryCreate } from '../types/category'

export async function getCategories(): Promise<Category[]> {
  const response = await api.get<Category[]>('/categories/')
  return response.data
}

export async function createCategory(
  category: CategoryCreate
): Promise<Category> {
  const response = await api.post<Category>('/categories/', category)
  return response.data
}

export async function deleteCategory(id: number): Promise<void> {
  await api.delete(`/categories/${id}`)
}
