import { Construction } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotImplemented() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <Construction className="w-16 h-16 text-gray-400 mb-4" />

      <h1 className="text-2xl font-bold mb-2">
        Página em desenvolvimento
      </h1>

      <p className="text-gray-600 mb-6 max-w-md">
        Esta funcionalidade ainda está sendo implementada.
       
      </p>

      <Link
        to="/"
        className="px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-700 transition"
      >
        Voltar para Home
      </Link>
    </div>
  );
}
