// src/components/LawOfDiminishingReturns.jsx
import { Line } from "react-chartjs-2";

const DiminishingReturns = ({
  averageReturns11Years,
  averageReturns7Years,
  averageReturns3Years,
}) => {
  console.log("Received values in DiminishingReturns:", {
    averageReturns11Years,
    averageReturns7Years,
    averageReturns3Years,
  });

  // Data for the line graph
  const averageReturns = [
    { label: "11-Years", value: averageReturns11Years },
    { label: "7-Years", value: averageReturns7Years },
    { label: "3-Years", value: averageReturns3Years },
  ].filter((data) => data.value !== null);

  // Prevent graph from rendering empty
  if (averageReturns.length === 0) {
    return (
      <div className="card">
        <h2>Law of Diminishing Returns</h2>
        <p className="orange-text">
          Click the above buttons above to plot the Law of Diminishing Returns
          on a line graph.
        </p>
      </div>
    );
  }

  // Chart data
  const chartData = {
    labels: averageReturns.map((data) => data.label),
    datasets: [
      {
        label: "Bitcoin Average Returns (%)",
        data: averageReturns.map((data) => data.value),
        borderColor: "#f7931a",
        backgroundColor: "rgba(247, 147, 26, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    scales: {
      y: {
        type: "linear",
        min: Math.min(...averageReturns.map((data) => data.value)) - 50,
        max: Math.max(...averageReturns.map((data) => data.value)) + 10,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div className="card">
      <h2>Law of Diminishing Returns</h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default DiminishingReturns;
