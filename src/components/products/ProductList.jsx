import React from 'react';

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return <div>No results found</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <div>{`Price: $${product.price}`}</div>
          <div>{`Category: ${product.category}`}</div>
          <div>{`Brand: ${product.brand}`}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

