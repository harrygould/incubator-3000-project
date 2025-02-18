const CurrentHoldings = ({ coins, price, setHoldings, holdings }) => {
  const calculateHoldings = () => {
    if (!coins || !price) {
      alert(
        "Please enter a valid coin amount and ensure Bitcoin price is available."
      );
      return;
    }
    const totalHoldings = (coins * price).toFixed(0);
    setHoldings(totalHoldings);
    console.log("Current Holdings Updated:", totalHoldings);
  };

  return (
    <div className="card">
      <h2>Current Holdings Value</h2>
      <button onClick={calculateHoldings}>Calculate</button>
      {holdings && <h3>${holdings}</h3>}
    </div>
  );
};

export default CurrentHoldings;
