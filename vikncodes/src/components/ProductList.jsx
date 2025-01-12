import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="p-6 bg-gray-700 rounded-lg">
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
  );
};

export default ProductList;
