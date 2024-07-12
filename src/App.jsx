import { useState, useEffect } from 'react';
import './index.css';
import { IoIosColorFilter } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './lib/rtk/slices/productsSlice';
import useFilter from './hooks/useFilter';
import useSort from './hooks/useSort';
import SortMenu from './components/filter/SortMenu';
import FiltersModal from './components/filter/FiltersModal';
import ProductList from './components/products/ProductList';
import LoadingSpinner from './components/resource-states/Loading';
import ErrorPage from './components/resource-states/ErrorPage';


const App = () => {
  const dispatch = useDispatch();
  const { filters, setFilters, filteredProducts } = useFilter();
  const { sortCriteria, sortedProducts, setSortCriteria } = useSort(filteredProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const { error, loading } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleSortMenu = () => setIsSortMenuOpen(!isSortMenuOpen);

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
    setIsSortMenuOpen(false);
  };

  if (loading) {
    return <LoadingSpinner />
  }
  if (error) {
    return <ErrorPage error={error} />
  }
  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col items-start">
      <h1 className="text-2xl font-bold mb-4 self-center text-center">Products Filter</h1>
      <div className='flex items-center justify-between w-full'>
        <button onClick={openModal} className="bg-primary-color text-white p-2 rounded mb-4 flex items-center gap-4">
          Filter
          <IoIosColorFilter className='text-lg'/>
        </button>
        <SortMenu
          sortCriteria={sortCriteria}
          isSortMenuOpen={isSortMenuOpen}
          toggleSortMenu={toggleSortMenu}
          handleSortChange={handleSortChange}
        />
      </div>
      <FiltersModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        filters={filters}
        setFilters={setFilters}
      />
      <ProductList 
        products={sortedProducts}
      />
    </div>
  );
};

export default App;