import { useEffect, useState } from 'react'
import type { Category } from '../types/category'
import {
  getCategories,
  createCategory,
  deleteCategory,
} from '../services/categories.service'

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .finally(() => setLoading(false))
  }, [])

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault()

    if (!name.trim()) return

    const newCategory = await createCategory({ name })

    setCategories(prev => [...prev, newCategory])
    setName('')
  }

  async function handleDelete(id: number) {
    await deleteCategory(id)
    setCategories(prev => prev.filter(c => c.id !== id))
  }

  if (loading) return <p className="p-6">Carregando...</p>

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Categorias</h1>

      
      <form onSubmit={handleCreate} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Nova categoria"
          value={name}
          onChange={e => setName(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Adicionar
        </button>
      </form>

      
      <div className="grid grid-cols-1 gap-4">
        {categories.map(category => (
          <div
            key={category.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <span className="font-semibold">{category.name}</span>

            <button
              onClick={() => handleDelete(category.id)}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
