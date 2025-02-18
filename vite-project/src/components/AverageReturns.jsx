import { useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import DiminishingReturns from "./DiminishingReturns"; // Import the new component

const AverageReturns = () => {
  const [averageReturns3Years, setAverageReturns3Years] = useState(null);
  const [averageReturns7Years, setAverageReturns7Years] = useState(null);
  const [averageReturns11Years, setAverageReturns11Years] = useState(null);

  const annualReturns = [
    { year: 2014, return: -58.0 },
    { year: 2015, return: 35.0 },
    { year: 2016, return: 125.0 },
    { year: 2017, return: 1331.0 },
    { year: 2018, return: -72.0 },
    { year: 2019, return: 94.0 },
    { year: 2020, return: 302.0 },
    { year: 2021, return: 60.0 },
    { year: 2022, return: -64.0 },
    { year: 2023, return: 156.0 },
    { year: 2024, return: 120.0 },
  ];

  // Calculate 11-year average CAGR
  const calculateAverageReturns11Years = () => {
    const recentData = annualReturns.slice(-11);
    const totalReturns = recentData.reduce((acc, data) => acc + data.return, 0);
    const average = totalReturns / recentData.length;
    setAverageReturns11Years(average.toFixed(2));
  };

  // Calculate 7-year average CAGR
  const calculateAverageReturns7Years = () => {
    const recentData = annualReturns.slice(-7);
    const totalReturns = recentData.reduce((acc, data) => acc + data.return, 0);
    const average = totalReturns / recentData.length;
    setAverageReturns7Years(average.toFixed(2));
  };

  // Calculate 3-year average CAGR
  const calculateAverageReturns3Years = () => {
    const recentData = annualReturns.slice(-3);
    const totalReturns = recentData.reduce((acc, data) => acc + data.return, 0);
    const average = totalReturns / recentData.length;
    setAverageReturns3Years(average.toFixed(2));
  };

  // Chart data
  const chartData = {
    labels: annualReturns.map((data) => data.year),
    datasets: [
      {
        label: "Bitcoin Annual Returns (%)",
        data: annualReturns.map((data) => data.return),
        backgroundColor: annualReturns.map((data) =>
          data.return < 0 ? "#ff4d4d" : "#f7931a"
        ),
      },
    ],
  };

  // Chart options (back to linear scale)
  const chartOptions = {
    scales: {
      y: {
        type: "linear",
        min: -100, // Extend the negative Y-axis to make it more visible
        max: Math.max(...annualReturns.map((data) => data.return)) + 50, // Add padding above max value
        ticks: {
          stepSize: 100, // Adjust step size for better readability
        },
      },
    },
  };

  return (
    <div className="card">
      <h2>Bitcoins Annual Returns (2014-2024)</h2>
      <Bar data={chartData} options={chartOptions} />
      <button onClick={calculateAverageReturns11Years}>
        Find 11-year Average Returns
      </button>
      {averageReturns11Years && (
        <h3>11-Year Average Returns: {averageReturns11Years}%</h3>
      )}
      <button onClick={calculateAverageReturns7Years}>
        Find 7-year Average Returns
      </button>
      {averageReturns7Years && (
        <h3>7-Year Average Returns: {averageReturns7Years}%</h3>
      )}
      <button onClick={calculateAverageReturns3Years}>
        Find 3-Year Average Returns
      </button>
      {averageReturns3Years && (
        <h3>3-Year Average Returns: {averageReturns3Years}%</h3>
      )}

      <DiminishingReturns
        averageReturns11Years={averageReturns11Years}
        averageReturns7Years={averageReturns7Years}
        averageReturns3Years={averageReturns3Years}
      />
    </div>
  );
};

export default AverageReturns;
