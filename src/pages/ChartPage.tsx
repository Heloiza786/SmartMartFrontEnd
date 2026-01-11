import PieSalesByMonth from "../components/Chart";

export default function ChartPage() {
  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Gráficos
      </h1>

      <PieSalesByMonth />
    </div>
  );
}
