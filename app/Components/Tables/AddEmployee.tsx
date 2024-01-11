'use client'

import React from 'react'

const AddEmployee = () => {
    return (
        <div className="w-full h-auto">
            <div className="flex flex-col w-full gap-3 p-3 bg-white rounded shadow-md">
                <div className='flex flex-col w-full gap-4'>
                    <div className='flex flex-col w-full gap-4 md:flex-row'>
                        <div className='flex flex-col w-full gap-1 mb-3 md:w-2/3'>
                            <label>Employee Name</label>
                            <input type='text' className='p-2 border border-gray-300 rounded focus:outline-none'/>
                        </div>

                        <div className='flex flex-col w-full gap-1 mb-3 md:w-1/3'>
                            <label>Employee code</label>
                            <input type='text' className='p-2 border border-gray-300 rounded focus:outline-none'/>
                        </div>
                    </div>

                    <div className='flex flex-col w-full gap-4 md:flex-row'>
                        <div className='flex flex-col w-full gap-1 mb-3 md:w-1/3'>
                            <label>Employee Name</label>
                            <input type='text' className='p-2 border border-gray-300 rounded focus:outline-none'/>
                        </div>

                        <div className='flex flex-col w-full gap-1 mb-3 md:w-1/3'>
                            <label>Date of Birth</label>
                            <input type='text' className='p-2 border border-gray-300 rounded focus:outline-none'/>
                        </div>

                        <div className='flex flex-col w-full gap-1 mb-3 md:w-1/3'>
                            <label>Marital Status</label>
                            <input type='text' className='p-2 border border-gray-300 rounded focus:outline-none'/>
                        </div>
                    </div>
                    
                    <div className='flex flex-col w-full gap-1 mb-3 md:w-2/3'>
                        <label>Date of Birth</label>
                        <input type='date' className='p-2 border border-gray-300 rounded focus:outline-none'/>
                    </div>

                    <hr />
                </div>

                <div className='flex flex-col w-full gap-4'>
                    <div className='flex flex-col w-full gap-4 md:flex-row'>
                        <div className='flex flex-col w-full gap-1 mb-3 md:w-1/3'>
                            <label>Employee Name</label>
                            <input type='text' className='p-2 border border-gray-300 rounded focus:outline-none'/>
                        </div>

                        <div className='flex flex-col w-full gap-1 mb-3 md:w-1/3'>
                            <label>Employee code</label>
                            <input type='text' className='p-2 border border-gray-300 rounded focus:outline-none'/>
                        </div>

                        <div className='flex flex-col w-full gap-1 mb-3 md:w-1/3'>
                            <label>Employee code</label>
                            <input type='text' className='p-2 border border-gray-300 rounded focus:outline-none'/>
                        </div>
                    </div>

                    <div className='flex flex-col w-full gap-4 md:flex-row'>
                        <div className='flex flex-col w-full gap-1 mb-3 md:w-1/3'>
                            <label>Employee Name</label>
                            <input type='text' className='p-2 border border-gray-300 rounded focus:outline-none'/>
                        </div>

                        <div className='flex flex-col w-full gap-1 mb-3 md:w-1/3'>
                            <label>Date of Birth</label>
                            <input type='text' className='p-2 border border-gray-300 rounded focus:outline-none'/>
                        </div>

                        <div className='flex flex-col w-full gap-1 mb-3 md:w-1/3'>
                            <label>Marital Status</label>
                            <input type='text' className='p-2 border border-gray-300 rounded focus:outline-none'/>
                        </div>
                    </div>
                    
                    <div className='flex gap-2'>
                        <button className='px-4 py-2 text-white bg-blue-500 rounded'>
                            Submit
                        </button>

                        <button className='px-4 py-2 text-gray-500 bg-gray-200 rounded'>
                            Cancel
                        </button>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default AddEmployee