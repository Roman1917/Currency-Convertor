import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
const url = "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11";

function App() {
  const [currency, setCurrency] = useState([]);
  const [buyStatus, setBuyStatus] = useState(false);

  useEffect(() => {
    const requestData = () => fetch(url).then((res) => res.json());
    requestData().then((data) => {
      data.pop();

      return setCurrency(data);
    });
  }, []);

  return (
    <div className="App">
      <Header currency={currency} buyStatus={buyStatus} />

      <h1>Currency Exchange</h1>

      <Body
        currency={currency}
        buyStatus={buyStatus}
        setBuyStatus={setBuyStatus}
      />
    </div>
  );
}

export default App;
