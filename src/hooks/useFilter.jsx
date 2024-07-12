import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useFilter = () => {
    const { products } = useSelector(state => state.products);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        filterProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters, products]);

    const filterProducts = () => {
        let tempProducts = [...products];

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

    return { filteredProducts, filters, setFilters };
};

export default useFilter;