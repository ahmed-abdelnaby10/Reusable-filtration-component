import React from 'react';
import { BiSort } from 'react-icons/bi';

const SortMenu = ({ isSortMenuOpen, toggleSortMenu, handleSortChange, sortCriteria }) => {
    const getButtonClass = (criteria) => (
        `block w-full text-left p-2 ${sortCriteria === criteria ? 'bg-main-color text-white' : 'hover:bg-main-color hover:text-white text-primary-color'} font-semibold`
    );
    return (
        <div className="relative">
            <button onClick={toggleSortMenu} className="bg-primary-color text-white p-2 rounded mb-4 flex items-center gap-4">
                Sort
                <BiSort className='text-lg' />
            </button>
            {isSortMenuOpen && (
                <div className="absolute right-0 w-48 bg-white border rounded-xl shadow-xl z-50 overflow-hidden">
                    <button onClick={() => handleSortChange('nameAsc')} className={getButtonClass('nameAsc')}>Name: A to Z</button>
                    <button onClick={() => handleSortChange('nameDesc')} className={getButtonClass('nameDesc')}>Name: Z to A</button>
                    <button onClick={() => handleSortChange('priceAsc')} className={getButtonClass('priceAsc')}>Price: Low to High</button>
                    <button onClick={() => handleSortChange('priceDesc')} className={getButtonClass('priceDesc')}>Price: High to Low</button>
                    <button onClick={() => handleSortChange('categoryAsc')} className={getButtonClass('categoryAsc')}>Category: A to Z</button>
                    <button onClick={() => handleSortChange('categoryDesc')} className={getButtonClass('categoryDesc')}>Category: Z to A</button>
                    <button onClick={() => handleSortChange('brandAsc')} className={getButtonClass('brandAsc')}>Brand: A to Z</button>
                    <button onClick={() => handleSortChange('brandDesc')} className={getButtonClass('brandDesc')}>Brand: Z to A</button>
                </div>
            )}
        </div>
    );
};

export default SortMenu;