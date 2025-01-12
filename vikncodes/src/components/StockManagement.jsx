import React, { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const StockManagement = () => {
  const { products, updateStock } = useContext(ProductContext);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [stockCount, setStockCount] = useState(0);

  const handleUpdateStock = () => {
    updateStock(selectedProduct, stockCount);
    setStockCount(0);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-orange-600 mb-6 text-center">
        Stock Management
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Select Product:</label>
        <select
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Choose a product</option>
          {products.map((product, index) => (
            <option key={index} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Stock Count:</label>
        <input
          type="number"
          value={stockCount}
          onChange={(e) => setStockCount(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <button
        onClick={handleUpdateStock}
        className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition duration-300"
      >
        Update Stock
      </button>
    </div>
  );
};

export default StockManagement;
