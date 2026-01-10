import { useEffect, useState } from 'react'
import type { Sale, SaleCreate } from '../types/sale'
import type { Product } from '../types/product'
import { getSales, createSale, deleteSale } from '../services/sales.service'
import { getProducts } from '../services/products.service'

export default function Sales() {
  const [sales, setSales] = useState<Sale[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [form, setForm] = useState<SaleCreate>({
    product_id: 0,
    sale_date: '',
    quantity: 1,
    total_price: 0,
  })

 
  const loadSales = async () => {
    const data = await getSales()
    setSales(data)
  }

  
  const loadProducts = async () => {
    const data = await getProducts()
    setProducts(data)
  }

  useEffect(() => {
    loadSales()
    loadProducts()
  }, [])

  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setForm(prev => {
      const updated = {
        ...prev,
        [name]: name === 'sale_date' ? value : Number(value),
      }

      if (name === 'product_id' || name === 'quantity') {
        const product = products.find(p => p.id === updated.product_id)
        updated.total_price = product ? product.price * updated.quantity : 0
      }

      return updated
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await createSale(form)
    setForm({
      product_id: 0,
      sale_date: '',
      quantity: 1,
      total_price: 0,
    })
    loadSales()
  }

  const handleDelete = async (id: number) => {
    if (confirm('Deseja deletar esta venda?')) {
      await deleteSale(id)
      loadSales()
    }
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Vendas</h1>

   
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-xl shadow mb-6 space-y-3"
      >
       
        <select
          name="product_id"
          value={form.product_id}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value={0}>Selecione um produto</option>
          {products.map(p => (
            <option key={p.id} value={p.id}>
              {p.name} - R$ {p.price.toFixed(2)}
            </option>
          ))}
        </select>

     
        <input
          type="date"
          name="sale_date"
          value={form.sale_date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

      
        <input
          type="number"
          name="quantity"
          placeholder="Quantidade"
          min={1}
          value={form.quantity}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="number"
          step="0.01"
          name="total_price"
          placeholder="Preço total"
          value={form.total_price.toFixed(2)}
          className="w-full border p-2 rounded bg-gray-100"
          readOnly
        />

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Registrar Venda
        </button>
      </form>

  
      <ul className="space-y-3">
        {sales.map(sale => (
          <li
            key={sale.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <p>
                <strong>Produto:</strong>{' '}
                {products.find(p => p.id === sale.product_id)?.name ||
                  sale.product_id}
              </p>
              <p><strong>Data:</strong> {sale.sale_date}</p>
              <p><strong>Qtd:</strong> {sale.quantity}</p>
              <p>
                <strong>Total:</strong> R$ {sale.total_price.toFixed(2)}
              </p>
            </div>

            <button
              onClick={() => handleDelete(sale.id)}
              className="text-red-600 hover:text-red-800 font-semibold"
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
