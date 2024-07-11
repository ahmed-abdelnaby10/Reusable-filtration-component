import React, { useState, useEffect } from 'react';
import FiltersModal from './components/filter/FiltersModal';
import ProductList from './components/products/ProductList';
import './index.css';
import { IoIosColorFilter } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './lib/rtk/slices/productsSlice';
import { BiSort } from 'react-icons/bi';


const App = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products)
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    filterProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, products]);

  const filterProducts = () => {
    let tempProducts = products;

    filters.forEach(filter => {
      switch (filter.method) {
        case 'contains':
          tempProducts = tempProducts.filter(product =>
            product[filter.field].toString().toLowerCase().includes(filter.value.toLowerCase())
          );
          break;
        case 'startsWith':
          tempProducts = tempProducts.filter(product =>
            product[filter.field].toString().toLowerCase().startsWith(filter.value.toLowerCase())
          );
          break;
        case 'endsWith':
          tempProducts = tempProducts.filter(product =>
            product[filter.field].toString().toLowerCase().endsWith(filter.value.toLowerCase())
          );
          break;
        case 'equal':
          tempProducts = tempProducts.filter(product =>
            product[filter.field].toString().toLowerCase() === filter.value.toLowerCase()
          );
          break;
        case 'greaterThan':
          tempProducts = tempProducts.filter(product =>
            +product[filter.field] > +filter.value
          );
          break;
        case 'lessThan':
          tempProducts = tempProducts.filter(product =>
            +product[filter.field] < +filter.value
          );
          break;
        default:
          break;
      }
    });

    setFilteredProducts(tempProducts);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col items-start">
      <h1 className="text-2xl font-bold mb-4 self-center text-center">Products Filter</h1>
      <div className='flex items-center justify-between w-full'>
        <button onClick={openModal} className="bg-primary-color text-white p-2 rounded mb-4 flex items-center gap-4">
          Filter
          <IoIosColorFilter className='text-lg'/>
        </button>
        <button className="bg-primary-color text-white p-2 rounded mb-4 flex items-center gap-4">
          Sort
          <BiSort  className='text-lg'/>
        </button>
      </div>
      <FiltersModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        filters={filters}
        setFilters={setFilters}
      />
      <ProductList 
        products={filteredProducts}
        setFilters={setFilters}
      />
    </div>
  );
};

export default App;