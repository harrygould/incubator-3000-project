import { useEffect } from "react";
import axios from "axios";

export default function CurrentPrice({ price, setPrice }) {
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=aud"
        );
        console.log("API Response:", response.data); // Debug log
        if (response.data.bitcoin && response.data.bitcoin.aud) {
          setPrice(response.data.bitcoin.aud);
        } else {
          console.error("AUD price not found in response.");
        }
      } catch (error) {
        console.error("Error fetching price data", error);
      }
    };
    fetchPrice();
  }, [setPrice]);

  return (
    <div className="card">
      <h2>Current Bitcoin Price (AUD)</h2>
      <h3>{price !== null ? `$${price.toFixed(0)}` : "Loading..."}</h3>
    </div>
  );
}
