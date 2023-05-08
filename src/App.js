import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dogs from "./pages/Dogs";
import Cats from "./pages/Cats";
import NavBars from "./components/NavBars";
function App() {
  return (
    <Router>
      <NavBars />
      <Routes>
        <Route path="/" exact element={<Dogs />} />
        <Route path="/cats" element={<Cats />} />
      </Routes>
    </Router>
  );
}

export default App;
