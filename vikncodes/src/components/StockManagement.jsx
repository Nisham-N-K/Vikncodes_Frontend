import React, { useState } from "react";

const StockManagement = ({ products, updateProductStock }) => {
  const [productName, setProductName] = useState("");
  const [stockCount, setStockCount] = useState(0);

  const handleUpdateStock = () => {
    if (productName) {
      updateProductStock(productName, stockCount);
      setProductName("");
      setStockCount(0);
      alert("Stock count updated successfully!");
    } else {
      alert("Please select a product to update.");
    }
  };

  return (
    <div className="p-6 bg-gray-700 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Stock Management</h2>
      <p>Select a product to update its stock:</p>
      <select
        className="w-full p-2 mt-2 mb-4 rounded-lg bg-gray-800 text-white border-none"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      >
        <option value="" disabled>
          Select a product
        </option>
        {products.map((product, index) => (
          <option key={index} value={product.name}>
            {product.name}
          </option>
        ))}
      </select>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Stock Count:</label>
        <input
          type="number"
          className="w-full p-2 rounded-lg bg-gray-800 text-white border-none"
          placeholder="Enter stock count"
          value={stockCount}
          onChange={(e) => setStockCount(parseInt(e.target.value) || 0)}
        />
      </div>
      <button
        className="w-full py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold"
        onClick={handleUpdateStock}
      >
        Update Stock
      </button>
    </div>
  );
};

export default StockManagement;
