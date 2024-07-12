import React, { useEffect, useState } from 'react'

export default function FilterActions({ localFilters, addFilter, applyFilters, clearFilters, isAddButtonDisabled, isFilters }) {
    const [isFilterEmpty, setIsFilterEmpty] = useState(true)
    useEffect(()=>{
        if (localFilters.length < 2) {
            const values = Object.values(localFilters[0])
            // eslint-disable-next-line array-callback-return
            values.map((value)=>{
                if (value.length > 0) {
                    setIsFilterEmpty(false)
                }else {
                    setIsFilterEmpty(true)
                }
            })
        }else {
            setIsFilterEmpty(false)
        }
    },[localFilters])
    return (
        <>
            <button 
                onClick={addFilter} 
                className="mx-auto w-28 bg-primary-color text-white p-2 rounded disabled:bg-border-color disabled:text-gray-500"
                disabled={isAddButtonDisabled ? true : false}
            >
                Add
            </button>
            <div className="flex justify-between gap-4 sm:flex-row flex-col">
                <button 
                    onClick={applyFilters} 
                    disabled={isFilterEmpty}
                    className="bg-main-color text-white p-2 w-full min-w-28 rounded disabled:bg-border-color disabled:text-gray-500"
                >
                    Apply
                </button>
                {isFilters &&(<button onClick={clearFilters} className="bg-danger-color text-white p-2 w-full min-w-28 rounded">Clear Filters</button>) }
            </div>
        </>
    )
}
