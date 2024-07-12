import React from 'react';
import NotFound from '../resource-states/NotFound';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return <NotFound/>;
  }

  const size = products.length

  return (
    <div className={`grid grid-cols-1 gap-4 self-center w-full ${size > 2 ? 'sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3' : size === 2 ? 'sm:grid-cols-2 md:grid-cols-2' : 'sm:grid-cols-1 md:grid-cols-1' } ${size < 2 ? "sm:w-[300px] md:w-[300px] w-full" : 'sm:w-fit'}`}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductList;

