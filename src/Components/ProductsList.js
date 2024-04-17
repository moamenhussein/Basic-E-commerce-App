import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductsList = () => {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setProducts(data);
      });
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setCategories(data);
      });
  };
  const getProductInCategories = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container text-center">
        <button
          className="btn btn-info me-4 mb-4"
          onClick={() => getProducts()}
        >
          All
        </button>
        {categories.map((categorie, index) => {
          return (
            <button
              key={categorie}
              className="btn btn-info me-4 mb-4"
              onClick={() => getProductInCategories(categorie)}
            >
              {categorie}
            </button>
          );
        })}
        <div className="row">
          {products.map((product) => {
            return (
              <Product product={product} key={product.id} showButton={true} />
            );
          })}
          {/* <Product />
          <Product />
          <Product />
          <Product /> */}
        </div>
      </div>
    </>
  );
};

export default ProductsList;
