import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const ProductDetails = () => {
  const api_url = "https://fakestoreapi.com/products";
  const params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, []);
  // console.log(params)
  return (
    <>
      {/* <h1>Product Details - {product.title}</h1> */}
      <Product product={product} showButton={false}/>
    </>
  );
};

export default ProductDetails;
