import PieSalesByMonth from "../components/Chart";

export default function ChartPage() {
  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Gráfico de Vendas
      </h1>

      <p className="text-base mb-6 text-center text-gray-700">
        O gráfico abaixo apresenta a quantidade de vendas por ano.
        Para ocultar os dados de um ano específico, clique sobre ele na legenda.
      </p>

      <PieSalesByMonth />
    </div>
  );
}
