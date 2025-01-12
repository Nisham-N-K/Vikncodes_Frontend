import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const StockManagement = ({ products, updateProductStock }) => {
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product
  const [productName, setProductName] = useState("");
  const [stockCount, setStockCount] = useState(0);
  const [productColor, setProductColor] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productPrice, setProductPrice] = useState("");

  // When a product is selected, populate the form fields
  useEffect(() => {
    if (selectedProduct) {
      setProductName(selectedProduct.name);
      setStockCount(selectedProduct.count);
      setProductColor(selectedProduct.color || "");
      setProductSize(selectedProduct.size || "");
      setProductPrice(selectedProduct.price || "");
    } else {
      setProductName("");
      setStockCount(0);
      setProductColor("");
      setProductSize("");
      setProductPrice("");
    }
  }, [selectedProduct]);

  // Handle product update
  const handleUpdateProduct = () => {
    if (productName && productPrice) {
      // Perform product update logic here
      updateProductStock({
        name: productName,
        price: parseFloat(productPrice),
        count: stockCount,
        color: productColor,
        size: productSize,
      });

      // Reset form after updating
      setProductName("");
      setStockCount(0);
      setProductColor("");
      setProductSize("");
      setProductPrice("");

      // Show success message
      Swal.fire({
        title: "Success!",
        text: "Product updated successfully!",
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
      <h2 className="text-xl font-semibold mb-4 text-white">Edit Product</h2>
      <p>Select a product to edit its details:</p>
      <select
        className="w-full p-2 mt-2 mb-4 rounded-lg bg-gray-800 text-white border-none"
        value={selectedProduct ? selectedProduct.name : ""}
        onChange={(e) => {
          const product = products.find(p => p.name === e.target.value);
          setSelectedProduct(product); // Set selected product
        }}
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

      {selectedProduct && (
        <>
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
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-300">Color:</label>
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-gray-800 text-white border-none"
              placeholder="Enter product Color"
              value={productColor}
              onChange={(e) => setProductColor(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-300">Size:</label>
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-gray-800 text-white border-none"
              placeholder="Enter product size"
              value={productSize}
              onChange={(e) => setProductSize(e.target.value)}
            />
          </div>
          <button
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-white"
            onClick={handleUpdateProduct}
          >
            Update Product
          </button>
        </>
      )}
    </div>
  );
};

export default StockManagement;
