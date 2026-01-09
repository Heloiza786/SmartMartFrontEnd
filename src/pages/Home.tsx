import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6">
      <h1 className="text-3xl font-bold text-gray-800">
        SmartMart
      </h1>

      <div className="flex gap-4">
        <Link
          to="/produtos"
          className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Produtos
        </Link>

        <Link
          to="/categorias"
          className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
        >
          Categorias
        </Link>

        <Link
          to="/vendas"
          className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
        >
          Vendas
        </Link>
      </div>
    </div>
  )
}
