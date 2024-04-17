import Navbar from "./Components/Navbar";
import ProductsList from "./Components/ProductsList";
import Slider from "./Components/Slider";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import ProductDetails from "./Components/ProductDetails";
// import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
