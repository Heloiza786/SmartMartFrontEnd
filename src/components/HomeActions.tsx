import { Link } from 'react-router-dom'
import { ShoppingCart, Folder, DollarSign } from 'lucide-react'

export function HomeActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-4">
      <Link
        to="/produtos"
        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-700 transition"
      >
        <ShoppingCart className="w-5 h-5" />
        Produtos
      </Link>

      <Link
        to="/categorias"
        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-700 transition"
      >
        <Folder className="w-5 h-5" />
        Categorias
      </Link>

      <Link
        to="/vendas"
        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-700 transition"
      >
        <DollarSign className="w-5 h-5" />
        Vendas
      </Link>
    </div>
  )
}
