import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import FilterFields from './FilterFields';
import FilterActions from './FilterActions';
import { FaXmark } from 'react-icons/fa6';
import { useSelector } from 'react-redux';

Modal.setAppElement('#root'); // Add this line to avoid accessibility issues

const FiltersModal = ({ isOpen, closeModal, filters, setFilters }) => {
  const { products } = useSelector(state => state.products)
  const [localFilters, setLocalFilters] = useState([{ field: '', method: '', value: '' }]);
  const [filterFields, setFilterFields] = useState([])
  const [isFilterValue, setIsFilterVallue] = useState(false)

  useEffect(()=> {
    if (products) {
      setFilterFields(Object.keys(products[0]))
    }
  },[products])
  
  useEffect(() => {
    if (filters.length > 0) {
      setLocalFilters(filters);
    }
  }, [filters]);

  const handleFieldChange = (index, e) => {
    const newFilters = [...localFilters];
    newFilters[index].field = e.target.value;
    newFilters[index].method = ''; // Reset method when field changes
    newFilters[index].value = ''; // Reset value when field changes
    setLocalFilters(newFilters);
  };

  const handleMethodChange = (index, e) => {
    const newFilters = [...localFilters];
    newFilters[index].method = e.target.value;
    setLocalFilters(newFilters);
  };

  const handleValueChange = (index, e) => {
    const newFilters = [...localFilters];
    newFilters[index].value = e.target.value;
    setLocalFilters(newFilters);
  };

  const addFilter = () => {
    setLocalFilters([...localFilters, { field: '', method: '', value: '' }]);
  };

  const removeFilter = (index) => {
    const newFilters = localFilters.filter((_, i) => i !== index);
    setLocalFilters(newFilters);
  };

  const applyFilters = () => {
    setFilters(localFilters);
    closeModal();
  };

  const clearFilters = () => {
    setLocalFilters([{ field: '', method: '', value: '' }]);
    setFilters([]);
    closeModal();
  };
  
  useEffect(()=>{
    const lastFilter = localFilters[localFilters.length - 1];
    if (!lastFilter.value) {
      setIsFilterVallue(true)
    }else {
      setIsFilterVallue(false)
    }
  },[localFilters])

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className="bg-white p-4 shadow-lg max-w-lg mx-auto border-main-color border-2 border-solid max-h-96 flex flex-col items-stretch gap-4">
      <div className='w-full flex items-center justify-between'>
        <h2 className="text-xl font-bold">Apply Filters</h2>
        <button onClick={closeModal} className='hover:text-danger-color duration-300'>
          <FaXmark/>
        </button>
      </div>
      {localFilters.map((filter, index) => (
        <FilterFields 
          key={index}
          index={index} 
          filter={filter}
          filterFields={filterFields}
          handleFieldChange={handleFieldChange}
          handleMethodChange={handleMethodChange}
          handleValueChange={handleValueChange}
          removeFilter={removeFilter}
        />
      ))}
      <FilterActions 
        applyFilters={applyFilters}
        addFilter={addFilter}
        clearFilters={clearFilters}
        isAddButtonDisabled={isFilterValue}
        isFilters={filters.length > 0 ? true : false}
      />
    </Modal>
  );
};

export default FiltersModal;
