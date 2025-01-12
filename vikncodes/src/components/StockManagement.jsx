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
    <div>
      <h2>Stock Management</h2>
      <div>
        <label>Select Product:</label>
        <select onChange={(e) => setSelectedProduct(e.target.value)}>
          {products.map((product, index) => (
            <option key={index} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Stock Count:</label>
        <input
          type="number"
          value={stockCount}
          onChange={(e) => setStockCount(e.target.value)}
        />
      </div>
      <button onClick={handleUpdateStock}>Update Stock</button>
    </div>
  );
};

export default StockManagement;
