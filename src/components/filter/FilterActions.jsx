import React from 'react'

export default function FilterActions({ addFilter, applyFilters, clearFilters, isAddButtonDisabled, isFilters }) {
    return (
        <>
        <button 
            onClick={addFilter} 
            className="mx-auto w-28 bg-main-color text-white p-2 rounded disabled:bg-border-color disabled:text-gray-500"
            disabled={isAddButtonDisabled ? true : false}
        >
            Add
        </button>
        <div className="flex justify-between gap-4">
            <button onClick={applyFilters} className="bg-primary-color text-white p-2 w-full min-w-28 rounded">Apply</button>
            {isFilters &&(<button onClick={clearFilters} className="bg-danger-color text-white p-2 w-full min-w-28 rounded">Clear Filters</button>) }
        </div>
        </>
    )
}
