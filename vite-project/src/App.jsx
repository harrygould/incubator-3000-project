// src/App.jsx
import { useState } from "react";
import CurrentPrice from "./components/CurrentPrice";
import CurrentHoldings from "./components/CurrentHoldings";
import NumberOfCoins from "./components/NumberOfCoins";
import AverageReturns from "./components/AverageReturns";
import incubator from "./assets/incubator.png";
import NavBar from "./components/NavBar";
import FutureGrowth from "./components/FutureGrowth";

export default function App() {
  const [coins, setCoins] = useState(0);
  const [price, setPrice] = useState(null);
  const [holdings, setHoldings] = useState(null);

  console.log("App State - Holdings:", holdings);

  return (
    <div className="container">
      <NavBar />
      <div>
        <br></br>
      </div>
      <img className="header-image" src={incubator} />
      <div className="card2">
        <h1 className="stage-headers">~ Stage 1 ~</h1>
        <h2 className="card-descriptions">Your Current Position</h2>
        <p>
          "You can't really know where you're going until you know where you
          have been."<br></br>Maya Angelou
        </p>
        <NumberOfCoins setCoins={setCoins} />
        <CurrentPrice price={price} setPrice={setPrice} />
        <CurrentHoldings
          coins={coins}
          price={price}
          setHoldings={setHoldings}
          holdings={holdings}
        />
      </div>
      <div className="card2">
        <h1 className="stage-headers">~ Stage 2 ~</h1>
        <h2 className="card-descriptions">A Historical Context</h2>
        <p>
          "Bee’s don’t waste their time explaining to flies that honey tastes
          better than s**t."<br></br>The Game
        </p>
        <AverageReturns />
      </div>

      <div className="card2">
        <h1 className="stage-headers">~ Stage 3 ~</h1>
        <h2 className="card-descriptions">The Fun Part</h2>
        <p>
          "It is predicted that Bitcoins volatility will decrease over time,
          returning 29% Compound Annual Growth Rate." <br></br>Michael Saylor
          (CEO, MicroStrategy)
        </p>
        <FutureGrowth currentHoldings={holdings} />
      </div>
      <footer>&copy; 2025, Crash Nuts. All rights reserved.</footer>
    </div>
  );
}
