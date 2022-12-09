import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="bg-[url('https://api.lorem.space/image/car?w=1280&h=720')] w-full h-screen bg-cover bg-center bg-no-repeat">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Home />} />
        <Route path="/tvshows" element={<Home />} />
        <Route path="/news" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

