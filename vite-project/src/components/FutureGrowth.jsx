import { useState, useEffect } from "react";

const FutureGrowth = ({ currentHoldings }) => {
  const [futureValue3Year, setFutureValue3Year] = useState("");
  const [futureValue5Year, setFutureValue5Year] = useState("");
  const [futureValue10Year, setFutureValue10Year] = useState("");
  const [futureValue20Year, setFutureValue20Year] = useState("");
  const [futureValue30Year, setFutureValue30Year] = useState("");

  useEffect(() => {
    console.log("FutureGrowth - Received Holdings:", currentHoldings); // catch any errors in console
  }, [currentHoldings]);

  // Static CAGR of 29%
  const staticCAGR = 29 / 100;

  const calculateFutureGrowth = (years, setFutureValue) => {
    if (!currentHoldings) {
      alert("Please complete you current holdings Calculation in Stage 1");
      return;
    }

    const futureGrowth = currentHoldings * Math.pow(1 + staticCAGR, years);
    setFutureValue(futureGrowth.toFixed(0));
  };

  return (
    <div className="card">
      <h2>Future Growth Projections</h2>

      <h3 className="orange-text">
        Current Holdings: {""}
        {currentHoldings ? `$${currentHoldings}` : "Not Available"}
      </h3>
      <h3 className="orange-text">Predicted Annual Compound Growth: {"29%"}</h3>

      <button onClick={() => calculateFutureGrowth(3, setFutureValue3Year)}>
        3 Year Projection
      </button>
      {futureValue3Year && (
        <h3 className="orange-text">
          Projected Value in 3 Years: ${futureValue3Year}
        </h3>
      )}

      <button onClick={() => calculateFutureGrowth(5, setFutureValue5Year)}>
        5 Year Projection
      </button>
      {futureValue5Year && (
        <h3 className="orange-text">
          Projected Value in 5 Years: ${futureValue5Year}
        </h3>
      )}

      <button onClick={() => calculateFutureGrowth(10, setFutureValue10Year)}>
        10 Year Projection
      </button>
      {futureValue10Year && (
        <h3 className="orange-text">
          Projected Value in 10 Years: ${futureValue10Year}
        </h3>
      )}

      <button onClick={() => calculateFutureGrowth(20, setFutureValue20Year)}>
        20 Year Projection
      </button>
      {futureValue20Year && (
        <h3 className="orange-text">
          Projected Value in 20 Years: ${futureValue20Year}
        </h3>
      )}

      <button onClick={() => calculateFutureGrowth(30, setFutureValue30Year)}>
        30 Year Projection
      </button>
      {futureValue30Year && (
        <h3 className="orange-text">
          Projected Value in 30 Years: ${futureValue30Year}
        </h3>
      )}
    </div>
  );
};

export default FutureGrowth;
