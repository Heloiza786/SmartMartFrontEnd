import { Link } from "react-router-dom";
import { BarChart3 } from "lucide-react";

export function ButtomGraphic() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-4">
      <Link
        to="/chartHome"
        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-500 text-white font-semibold hover:bg-pink-400 transition"
      >
        <BarChart3 className="w-5 h-5" />
        Gráfico
      </Link>
    </div>
  );
}


