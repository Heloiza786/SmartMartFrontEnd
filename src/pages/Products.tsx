import { useEffect, useState } from 'react'
import type { Product, ProductCreate } from '../types/product'
import type { Category } from '../types/category'
import {
  getProducts,
  createProduct,
  deleteProduct,
} from '../services/products.service'
import { getCategories } from '../services/categories.service'
import { SuccessMessage } from '../components/SucessMessage'

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [success, setSuccess] = useState(false)

  const [form, setForm] = useState<ProductCreate>({
    name: '',
    price: '',
    description: '',
    brand: '',
    category_id: 0,
  })

  const loadProducts = async () => {
    const data = await getProducts()
    setProducts(data)
    setLoading(false)
  }

  const loadCategories = async () => {
    const data = await getCategories()
    setCategories(data)
  }

  useEffect(() => {
    loadProducts()
    loadCategories()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await createProduct({
      ...form,
      price: Number(form.price.toString().replace(',', '.')),
      category_id: Number(form.category_id),
    })

    setForm({
      name: '',
      price: '',
      description: '',
      brand: '',
      category_id: 0,
    })

    setSuccess(true)
    loadProducts()

    setTimeout(() => setSuccess(false), 3000)
  }

  const handleDelete = async (id: number) => {
    if (confirm('Deseja excluir este produto?')) {
      await deleteProduct(id)
      loadProducts()
    }
  }

  if (loading) return <p className="p-6">Carregando...</p>

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Produtos</h1>

      {success && (
        <div className="mb-4">
          <SuccessMessage message="Produto cadastrado com sucesso!" />
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-xl shadow mb-6 space-y-3"
      >
        <input
          name="name"
          placeholder="Nome do produto"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="price"
          placeholder="Preço"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="brand"
          placeholder="Marca"
          value={form.brand}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <textarea
          name="description"
          placeholder="Descrição"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <select
          name="category_id"
          value={form.category_id}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value={0} disabled>
            Selecione a categoria
          </option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Cadastrar Produto
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between"
          >
            <div>
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="font-bold mt-1">
                R$ {product.price.toFixed(2)}
              </p>
              <p className="text-xs text-gray-500">
                Categoria:{' '}
                {categories.find(c => c.id === product.category_id)?.name ||
                  product.category_id}
              </p>
            </div>

            <button
              onClick={() => handleDelete(product.id)}
              className="text-red-600 hover:text-red-800 font-semibold"
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
