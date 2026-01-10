import { useEffect, useState } from 'react'
import type { Sale, SaleCreate } from '../types/sale'
import { getSales, createSale, deleteSale } from '../services/sales.service'

export default function Sales() {
  const [sales, setSales] = useState<Sale[]>([])
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

  useEffect(() => {
    loadSales()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: name === 'sale_date' ? value : Number(value),
    }))
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

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-xl shadow mb-6 space-y-3"
      >
        <input
          type="number"
          name="product_id"
          placeholder="ID do Produto"
          value={form.product_id}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

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
          value={form.total_price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-100 transition"
        >
          Registrar Venda
        </button>
      </form>

      {/* LISTA */}
      <ul className="space-y-3">
        {sales.map(sale => (
          <li
            key={sale.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <p><strong>ID Produto:</strong> {sale.product_id}</p>
              <p><strong>Data:</strong> {sale.sale_date}</p>
              <p><strong>Qtd:</strong> {sale.quantity}</p>
              <p><strong>Total:</strong> R$ {sale.total_price.toFixed(2)}</p>
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
