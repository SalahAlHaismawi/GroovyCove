import Navbar from "./components/Navbar";
import Carousell from "./components/Carousell";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Store from "./Routes/Store";
import Whyus from "./Routes/Whyus";

function App() {
  return (
    <div className="bg-gradient-to-t from-[#83bd75] to-[#a8eb12]">
      
      <Router>

      <Routes>

      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/store" element={<Store/>}/>
      </Routes>
      
      </Router>
    </div>
    
  );
}

export default App; 
