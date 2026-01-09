import { useEffect, useState } from 'react'
import type { Sale } from '../types/sale'
import { getSales } from '../services/sales.service'

export default function Sales() {
  const [sales, setSales] = useState<Sale[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getSales()
      .then(setSales)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p className="p-6">Carregando...</p>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Vendas</h1>

      <ul className="space-y-2">
        {sales.map(sale => (
          <li
            key={sale.id}
            className="p-3 bg-white rounded-lg shadow"
          >
            Produto ID: {sale.product_id} <br />
            Quantidade: {sale.quantity} <br />
            Total: R$ {sale.total_price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  )
}
