import { useState, useEffect } from 'react';

const useSort = (initialProducts) => {
    const [sortedProducts, setSortedProducts] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('nameAsc');

    useEffect(() => {
        sortProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortCriteria, initialProducts]);

    const sortProducts = () => {
        let tempProducts = [...initialProducts];
        switch (sortCriteria) {
            case 'priceAsc':
                tempProducts.sort((a, b) => a.price - b.price);
                break;
            case 'priceDesc':
                tempProducts.sort((a, b) => b.price - a.price);
                break;
            case 'nameAsc':
                tempProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'nameDesc':
                tempProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'categoryAsc':
                tempProducts.sort((a, b) => a.category.localeCompare(b.category));
                break;
            case 'categoryDesc':
                tempProducts.sort((a, b) => b.category.localeCompare(a.category));
                break;
            case 'brandAsc':
                tempProducts.sort((a, b) => a.brand.localeCompare(b.brand));
                break;
            case 'brandDesc':
                tempProducts.sort((a, b) => b.brand.localeCompare(a.brand));
                break;
            default:
                break;
        }
        setSortedProducts(tempProducts);
    };

    return { sortedProducts, sortCriteria, setSortCriteria };
};

export default useSort;
