import React, { useState } from "react";
import Swal from "sweetalert2";

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

      Swal.fire({
        title: "Success!",
        text: "Product added successfully!",
        icon: "success",
        confirmButtonText: "OK",
            customClass: {
              popup: "bg-gray-800 text-white",
              confirmButton: "bg-green-500 hover:bg-green-600 text-white",
            },
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Please fill out all fields.",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          popup: "bg-gray-800 text-white",
          confirmButton: "bg-red-500 hover:bg-red-600 text-white",
        },
      });
    }
  };

  return (
    <div className="p-6 bg-gray-700 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-white">Add New Product</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-gray-300">Product Name:</label>
        <input
          type="text"
          className="w-full p-2 rounded-lg bg-gray-800 text-white border-none"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-gray-300">Price:</label>
        <input
          type="number"
          className="w-full p-2 rounded-lg bg-gray-800 text-white border-none"
          placeholder="Enter product price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-gray-300">Stock Count:</label>
        <input
          type="number"
          className="w-full p-2 rounded-lg bg-gray-800 text-white border-none"
          placeholder="Enter stock count"
          value={stockCount}
          onChange={(e) => setStockCount(parseInt(e.target.value) || 0)}
        />
      </div>
      <button
        className="w-full py-2 bg-green-500 hover:bg-green-600 rounded-lg font-semibold text-white"
        onClick={handleAddProduct}
      >
        Add Product
      </button>
    </div>
  );
};

export default ProductForm;
