import { useEffect, useState } from 'react'
import type { Category } from '../types/category'
import { getCategories } from '../services/categories.service'

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p className="p-6">Carregando...</p>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Categorias</h1>

      <ul className="space-y-2">
        {categories.map(category => (
          <li
            key={category.id}
            className="p-3 bg-white rounded-lg shadow"
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
