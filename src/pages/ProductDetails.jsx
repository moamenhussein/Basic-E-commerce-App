import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, []);
  return (
    <>
      <h1>{product.title}</h1>
      <h2>{product.category}</h2>
      <img src={product.image} className="w-25" />
      <p>{product.description}</p>
      <h2>{product.price}$</h2>
    </>
  );
};

export default ProductDetails;
