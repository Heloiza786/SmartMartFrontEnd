import { useEffect, useState } from 'react'
import type { Product, ProductCreate } from '../types/product'
import {
  getProducts,
  createProduct,
  deleteProduct,
} from '../services/products.service'

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const [form, setForm] = useState<ProductCreate>({
    name: '',
    price: 0,
    description: '',
    brand: '',
    category_id: 0,
  })

  const loadProducts = async () => {
    const data = await getProducts()
    setProducts(data)
    setLoading(false)
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'category_id'
        ? Number(value)
        : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await createProduct(form)
    setForm({
      name: '',
      price: 0,
      description: '',
      brand: '',
      category_id: 0,
    })
    loadProducts()
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

      {/* FORM */}
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
          type="number"
          step="0.01"
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

        <input
          type="number"
          name="category_id"
          placeholder="ID da categoria"
          value={form.category_id}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Cadastrar Produto
        </button>
      </form>

      {/* LISTA */}
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
                Categoria ID: {product.category_id}
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
