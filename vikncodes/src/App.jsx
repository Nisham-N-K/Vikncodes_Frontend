import React from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import StockManagement from "./components/StockManagement";
import ProductProvider from "./context/ProductContext";
import "./index.css";

const App = () => {
  return (
    <ProductProvider>
      <div className="min-h-screen bg-gray-100 py-10">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">
          Product Management Dashboard
        </h1>
        <div className="space-y-10">
          <ProductForm />
          <ProductList />
          <StockManagement />
        </div>
      </div>
    </ProductProvider>
  );
};

export default App;
