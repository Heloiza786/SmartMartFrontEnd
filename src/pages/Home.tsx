import { Link } from 'react-router-dom'
import { ShoppingCart, Folder, DollarSign } from 'lucide-react'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-90">
      {/* Header com logo */}
      <Header />

      {/* Conteúdo central */}
      <div className="flex flex-col items-center justify-center gap-10 mt-8">
        <h2 className="text-3xl font-bold text-gray-800">Bem-vindo ao SmartMart seu sistema de gerenciamento de estoque </h2>

        <div className="flex gap-10">
          <Link
            to="/produtos"
            className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition"
          >
            <div className="w-20 h-20 flex justify-center items-center bg-blue-100 rounded-xl shadow-md">
              <ShoppingCart className="w-10 h-10" />
            </div>
            <span className="mt-2 font-semibold">Produtos</span>
          </Link>

          <Link
            to="/categorias"
            className="flex flex-col items-center text-gray-700 hover:text-green-600 transition"
          >
            <div className="w-20 h-20 flex justify-center items-center bg-blue-100 rounded-xl shadow-md">
              <Folder className="w-10 h-10" />
            </div>
            <span className="mt-2 font-semibold">Categorias</span>
          </Link>

          <Link
            to="/vendas"
            className="flex flex-col items-center text-gray-700 hover:text-purple-600 transition"
          >
            <div className="w-20 h-20 flex justify-center items-center bg-blue-100 rounded-xl shadow-md">
              <DollarSign className="w-10 h-10" />
            </div>
            <span className="mt-2 font-semibold">Vendas</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
