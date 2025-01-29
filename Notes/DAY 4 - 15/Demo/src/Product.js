import React from "react";

export const ProductList = ({ addToCart }) => {
  const products = ["Laptop", "Smartphone", "Headphones"];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product}{" "}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
