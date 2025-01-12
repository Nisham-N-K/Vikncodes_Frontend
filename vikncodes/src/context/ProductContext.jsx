import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateStock = (productName, stockCount) => {
    setProducts(
      products.map((product) =>
        product.name === productName
          ? { ...product, stock: stockCount }
          : product
      )
    );
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateStock }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
