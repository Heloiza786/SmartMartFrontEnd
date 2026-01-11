import { Link } from "react-router-dom";
import { Layers } from "lucide-react";
import chartImage from "../../public/img/Cover 1.png";

export default function ChartHome() {
  return (
    <div className="w-full min-h-screen flex items-center justify-start p-6 bg-gray-100 gap-6">
      
      <Link
        to="/chart/products"
        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-700 transition"
      >
        <Layers className="w-5 h-5" />
        Gráfico por Produtos
      </Link>

      <Link
        to="/chart/sales"
        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-700 transition"
      >
        <Layers className="w-5 h-5" />
        Gráfico por Vendas
      </Link>

      <Link
        to="/chart/categories"
        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-700 transition"
      >
        <Layers className="w-5 h-5" />
        Gráfico por Categorias
      </Link>

       <div className="w-full md:w-1/2 flex justify-end">
         <img
           src={chartImage}
           alt="Ilustração de gráficos"
          className="max-w-lg w-full object-contain"
        />
      </div>
    </div>
  );
}
