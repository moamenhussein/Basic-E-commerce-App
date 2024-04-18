import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="p-3 pb-0">
        <div className="row">
          <div className="col-2 sidebar">
            <Sidebar />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<ProductDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
