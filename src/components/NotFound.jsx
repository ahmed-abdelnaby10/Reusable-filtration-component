import React from 'react'

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center gap-2 self-center flex-1'>
            <h1 className='lg:text-3xl md:text-xl text-lg font-semibold text-black whitespace-nowrap'>Sorry results not found!</h1>
            <p className='text-danger-color text-sm sm:text-base font-semibold'>Try another filtration options.</p>
        </div>
    )
}
