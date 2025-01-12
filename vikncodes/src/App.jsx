import React from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import StockManagement from "./components/StockManagement";
import ProductProvider from "./context/ProductContext";

const App = () => {
  return (
    <ProductProvider>
      <div>
        <h1>Product Management</h1>
        <ProductForm />
        <ProductList />
        <StockManagement />
      </div>
    </ProductProvider>
  );
};

export default App;
