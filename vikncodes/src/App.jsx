import React from "react";
import ProductForm from "./components/ProductForm";
import ProductProvider from "./context/ProductContext";
import "./index.css";

const App = () => {
  return (
    <ProductProvider>
      <div>
        <div className="space-y-10">
          <ProductForm />
        </div>
      </div>
    </ProductProvider>
  );
};

export default App;
