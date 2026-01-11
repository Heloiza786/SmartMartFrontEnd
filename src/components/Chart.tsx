import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

type SalesChartResponse = {
  date: string;          
  total_revenue: number;
};


const COLORS = [
  "#CB4335",
  "#1F618D",
  "#F1C40F",
  "#27AE60",
  "#884EA0",
  "#D35400",
  "#5DADE2",
  "#F39C12",
  "#48C9B0",
  "#EC7063",
];

export default function PieSalesByMonth() {
  const [chartData, setChartData] = useState<ChartData<"pie"> | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/charts/sales")
      .then((res) => res.json())
      .then((data: SalesChartResponse[]) => {
       
        const grouped: Record<string, number> = {};

        data.forEach((item) => {
          const month = item.date.slice(0, 7); 
          grouped[month] = (grouped[month] || 0) + item.total_revenue;
        });

        const labels = Object.keys(grouped);
        const values = Object.values(grouped);

        setChartData({
          labels,
          datasets: [
            {
              label: "Faturamento por Mês",
              data: values,
              backgroundColor: labels.map(
                (_, i) => COLORS[i % COLORS.length]
              ),
              borderWidth: 1,
            },
          ],
        });
      });
  }, []);

  
  const handleHover = (evt: any, item: any, legend: any) => {
    const colors = legend.chart.data.datasets[0].backgroundColor as string[];

    colors.forEach((color, index) => {
      colors[index] =
        index === item.index || color.length === 9
          ? color
          : color + "4D";
    });

    legend.chart.update();
  };

  const handleLeave = (evt: any, item: any, legend: any) => {
    const colors = legend.chart.data.datasets[0].backgroundColor as string[];

    colors.forEach((color, index) => {
      colors[index] =
        color.length === 9 ? color.slice(0, -2) : color;
    });

    legend.chart.update();
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        onHover: handleHover,
        onLeave: handleLeave,
      },
      title: {
        display: true,
        text: "Faturamento por Mês",
      },
    },
  };

  if (!chartData) return <p>Carregando gráfico...</p>;

  return <Pie data={chartData} options={options} />;
}
