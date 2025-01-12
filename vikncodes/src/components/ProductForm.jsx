import React, { useState } from "react";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [stockCount, setStockCount] = useState(0);
  const [showProductList, setShowProductList] = useState(false);

  const handleAddProduct = () => {
    if (productName && productPrice) {
      setProducts([
        ...products,
        { name: productName, price: parseFloat(productPrice), count: stockCount },
      ]);
      setProductName("");
      setProductPrice("");
      setStockCount(0);
    }
  };

  return (
    <div
      className="min-h-screen px-8 py-8 border-none bg-gradient-to-br from-gray-800 to-black sm:rounded-lg text-white"
    >
      <h1 className="text-2xl font-bold mb-4">Product Management Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

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
              onChange={(e) => setStockCount(parseInt(e.target.value))}
            />
          </div>
          <button
            className="w-full py-2 bg-green-500 hover:bg-green-600 rounded-lg font-semibold"
            onClick={handleAddProduct}
          >
            Add Product
          </button>
        </div>

        <div className="p-6 bg-gray-700 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Stock Management</h2>
           <p>Select a product to update its stock:</p>
          <select className="w-full p-2 mt-2 mb-4 rounded-lg bg-gray-800 text-white border-none"
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
    onClick={() => {
      if (productName) {
        const updatedProducts = products.map((product) =>
          product.name === productName
            ? { ...product, count: stockCount }
            : product
        );
        setProducts(updatedProducts);
        setProductName("");
        setStockCount(0);
        alert("Stock count updated successfully!");
      } else {
        alert("Please select a product to update.");
      }
    }}
  >
    Update Stock
  </button>
</div>
      </div>

      <div className="mt-6 text-right">
        <button
          className="py-2 px-4 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-semibold"
          onClick={() => setShowProductList(!showProductList)}
        >
          {showProductList ? "Hide Product List" : "View All Product List"}
        </button>
      </div>

      {showProductList && (
        <div className="mt-6 bg-gray-700 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Product List</h2>
          {products.length > 0 ? (
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-800">
                  <th className="py-2 px-4">Product</th>
                  <th className="py-2 px-4">Count</th>
                  <th className="py-2 px-4">Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-600" : "bg-gray-700"}
                  >
                    <td className="py-2 px-4">{product.name}</td>
                    <td className="py-2 px-4">{product.count}</td>
                    <td className="py-2 px-4">₹{product.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-400">No products available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
