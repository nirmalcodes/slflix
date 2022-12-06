import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="min-h-screen bg-slate-800 ">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
