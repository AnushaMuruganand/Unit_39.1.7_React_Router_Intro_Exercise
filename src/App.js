import './App.css';
import VendingMachine from './VendingMachine';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";

function App() {
  return (
    <div className="App">
      {/* <VendingMachine /> */}
      <Routes>
        <Route exact="true" path="/" element={<VendingMachine />} />
        <Route exact="true" path="/soda" element={<Soda />} />
        <Route exact="true" path="/chips" element={<Chips />} />
        <Route exact="true" path="/sardines" element={<Sardines />} />
      </Routes>
    </div>
  );
}

export default App;
