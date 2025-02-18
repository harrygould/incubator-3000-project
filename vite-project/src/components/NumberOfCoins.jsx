import { useState } from "react";

export default function NumberOfCoins({ setCoins }) {
  const [coins, setLocalCoins] = useState(0);

  return (
    <div className="card">
      <h2>Fraction of Bitcoin Owned</h2>
      <div className="input-container">
        <input
          type="number"
          value={coins}
          onChange={(e) => {
            const value = parseFloat(e.target.value) || 0;
            setLocalCoins(value);
            setCoins(value);
          }}
          className="input-field"
          step="0.1"
        />
      </div>
    </div>
  );
}
