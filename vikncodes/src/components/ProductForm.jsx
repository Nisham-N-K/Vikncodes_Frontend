import React, { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductForm = () => {
  const { addProduct } = useContext(ProductContext);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name: productName, price: productPrice });
    setProductName("");
    setProductPrice("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold text-orange-600 mb-4 text-center">
        Add New Product
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="productName"
            className="block text-gray-700 font-medium mb-2"
          >
            Product Name:
          </label>
          <input
            id="productName"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Enter product name"
          />
        </div>
        <div>
          <label
            htmlFor="productPrice"
            className="block text-gray-700 font-medium mb-2"
          >
            Price:
          </label>
          <input
            id="productPrice"
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Enter product price"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
