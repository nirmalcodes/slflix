import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-800 text-white">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
