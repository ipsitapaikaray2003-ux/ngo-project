import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Leadership from "./pages/Leadership";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leadership" element={<Leadership />} />
    </Routes>
  );
}

export default App;