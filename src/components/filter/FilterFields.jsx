import React from 'react'

export default function FilterFields(
    {
        filter, 
        index, 
        handleFieldChange, 
        filterFields, 
        handleMethodChange, 
        handleValueChange,
        removeFilter,
    }
) {

    const getHelperText = (field) => {
        switch (field) {
            case 'price':
                return 'Enter a numeric value.';
            case 'category':
            case 'brand':
            case 'name':
                return `Enter the value of ${field}.`;
            default:
                return '';
        }
    };
    
    return (
        <div>
            <div className="flex">
                <select 
                    value={filter.field} 
                    onChange={(e) => handleFieldChange(index, e)} 
                    className="p-2 border rounded w-1/2 mr-2 focus:outline-none focus:ring-2 focus:ring-main-color text-black"
                >
                    <option value="" disabled>Select Field</option>
                    {
                    filterFields.map((field)=> {
                        if (field === 'id') {
                        return false;
                        }
                        return (
                        <option key={field} className='capitalize' value={field}>{field}</option>
                        )
                    })
                    }
                </select>
                <select 
                    value={filter.method} 
                    onChange={(e) => handleMethodChange(index, e)} 
                    className="p-2 border rounded w-1/2 focus:outline-none focus:ring-2 disabled:bg-border-color focus:ring-main-color text-black"
                    disabled={filter.field ? false : true}
                >
                    <option value="" disabled>Select Method</option>
                    {filter.field === 'price' ? (
                        <>
                        <option value="greaterThan">Greater Than</option>
                        <option value="lessThan">Less Than</option>
                        <option value="equal">Equal</option>
                        </>
                    ) : (
                        <>
                        <option value="contains">Contains</option>
                        <option value="startsWith">Starts With</option>
                        <option value="endsWith">Ends With</option>
                        <option value="equal">Equal</option>
                        </>
                    )}
                </select>
            </div>
            {filter.method && (
                <div className="flex flex-col mt-4">
                    <input 
                        type={filter.field === 'price' ? 'number' : 'text'}
                        value={filter.value} 
                        onChange={(e) => handleValueChange(index, e)} 
                        className="p-2 border rounded w-full mb-1 focus:outline-none focus:ring-2 focus:ring-main-color" 
                    />
                    <p className="text-gray-500 text-xs">{getHelperText(filter.field)}</p>
                </div>
            )}
            {index > 0 && 
                <div className='w-full flex items-center justify-end'>
                    <button onClick={() => removeFilter(index)} className=" text-sm text-black hover:text-danger-color font-semibold duration-300 p-2 rounded mt-4">Remove</button>
                </div>
            }
        </div>
    )
}
