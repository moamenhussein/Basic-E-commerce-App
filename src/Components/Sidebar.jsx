import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <ul className="list-unstyled">
        <li>
          <Link to="/products" className="text-decoration-none">
            Get All Products
          </Link>
        </li>
        <li>
          <a href="/#" className="text-decoration-none">
            Get All Categories
          </a>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
