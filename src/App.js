import logo from "./logo.svg";
import "./App.css";
import { ApiTest } from "./components/example/QuoteOfTheDay";
import { SparkLineInjectExample } from "./sparkline";
import { DynamicHeader } from "./components/dynamicHeader/DynamicHeader";
function App() {
  const it = [];
  return (
    <div className="App">
      <DynamicHeader />
    </div>
  );
}

export default App;
