import { Link } from 'react-router-dom'
import { ShoppingCart, Folder, DollarSign } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-between p-6 bg-gray-100 gap-6">

    
      <div className="flex flex-col gap-6 max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800">
          Bem-vindo ao SmartMart
        </h1>
        <p className="text-gray-600 text-lg">
          Seu sistema de gerenciamento de estoque
        </p>
          <p className="text-1xl font-bold text-gray-800">
           Prezando sempre pela segurança, confiabilidade e economia de seus parceiros.
        </p>
 
       
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
      </div>

      
      <div className="flex justify-end">
        <img
          src="/img/composition.png"
          alt="Composição"
          className="w-150 "
        />
      </div>
    </div>
  )
}
