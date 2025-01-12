import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-orange-600 mb-4 text-center">
        Product List
      </h2>
      {products.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {products.map((product, index) => (
            <li key={index} className="py-4 flex justify-between items-center">
              <span className="text-gray-700 font-medium">{product.name}</span>
              <span className="text-gray-500">${product.price}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
