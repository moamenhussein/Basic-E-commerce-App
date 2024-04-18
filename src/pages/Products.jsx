import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../pages/products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProduct();
  }, []);
  const getAllProduct = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setProducts(data);
      });
  };
  return (
    <>
      <h1>Products Page</h1>
      <table className="table table-striped mt-5 products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-info btgn-sm ms-2"
                  >
                    View
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Products;
