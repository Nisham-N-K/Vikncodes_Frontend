import React, { useState } from "react";

const ProductForm = ({ addProduct }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [stockCount, setStockCount] = useState(0);

  const handleAddProduct = () => {
    if (productName && productPrice) {
      addProduct({
        name: productName,
        price: parseFloat(productPrice),
        count: stockCount,
      });
      setProductName("");
      setProductPrice("");
      setStockCount(0);
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="p-6 bg-gray-700 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Product Name:</label>
        <input
          type="text"
          className="w-full p-2 rounded-lg bg-gray-800 text-white border-none"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Price:</label>
        <input
          type="number"
          className="w-full p-2 rounded-lg bg-gray-800 text-white border-none"
          placeholder="Enter product price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>
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
        className="w-full py-2 bg-green-500 hover:bg-green-600 rounded-lg font-semibold"
        onClick={handleAddProduct}
      >
        Add Product
      </button>
    </div>
  );
};

export default ProductForm;
