import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
const Product = (props) => {
  const { product, showButton } = props;
  // console.log(props);
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card container-card">
          <img
            src={product.image}
            className="card-img-top img"
            alt={product.title}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text paragraph">{product.description}</p>
            <p>Price: {product.price}$</p>
            {showButton && <Link className="btn btn-primary" to={`/product/${product.id}`}>Details</Link>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
