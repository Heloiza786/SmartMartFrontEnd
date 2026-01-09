import { useEffect, useState } from 'react'
import type { Product } from '../types/product'
import { getProducts } from '../services/products.service'

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p className="p-6">Carregando...</p>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Produtos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow"
          >
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="mt-2 font-bold">
              R$ {product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
