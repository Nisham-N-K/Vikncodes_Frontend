import React, { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import StockManagement from "./components/StockManagement";

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateProductStock = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.name === updatedProduct.name ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <div className="min-h-screen px-8 py-8 bg-gradient-to-br from-gray-800 to-black text-white">
      <h1 className="text-2xl font-bold mb-4">Product Management Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ProductForm addProduct={addProduct} />
        <StockManagement
          products={products}
          updateProductStock={updateProductStock}
        />
      </div>
      <div className="mt-6">
        <ProductList products={products} deleteProduct={deleteProduct} />
      </div>
    </div>
  );
};

export default App;
