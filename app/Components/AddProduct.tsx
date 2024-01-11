'use client'

import React, { useState } from 'react';

interface Item {
    id: number;
    itemInfo: string;
    searchId: string;
    expiryDate: string;
    stock: number;
    quantity: number;
    manufacturerPrice: number;
    total: number;
}

const AddProduct: React.FC = () => {

    return (
        <div className="flex w-full h-auto">
        <div className="w-full bg-white border-gray-200 rounded shadow-md">
        <div className="flex flex-wrap">
      {/* First Column - Identification and Reference Information */}
        <div className="w-full p-4 md:w-1/3">
            <h2 className="mb-4 text-lg font-semibold">Identification and Reference Information</h2>

            <div className="mb-4">
            <label htmlFor="medicineName" className="block text-sm font-medium text-gray-600">Medicine Name:</label>
            <input type="text" id="medicineName" className="w-full p-2 mt-1 border rounded" />
            </div>

            <div className="mb-4">
            <label htmlFor="barcode" className="block text-sm font-medium text-gray-600">Barcode:</label>
            <input type="text" id="barcode" className="w-full p-2 mt-1 border rounded" />
            </div>

            <div className="mb-4">
            <label htmlFor="medicineType" className="block text-sm font-medium text-gray-600">Medicine Type:</label>
            <input type="text" id="medicineType" className="w-full p-2 mt-1 border rounded" />
            </div>

            <div className="mb-4">
            <label htmlFor="medicineSupplier" className="block text-sm font-medium text-gray-600">Medicine Supplier:</label>
            <input type="text" id="medicineSupplier" className="w-full p-2 mt-1 border rounded" />
            </div>

            <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-600">Category:</label>
            <input type="text" id="category" className="w-full p-2 mt-1 border rounded" />
            </div>

            <div className="mb-4">
            <label htmlFor="unit" className="block text-sm font-medium text-gray-600">Unit:</label>
            <input type="text" id="unit" className="w-full p-2 mt-1 border rounded" />
            </div>

            <div className="mb-4">
            <label htmlFor="boxSize" className="block text-sm font-medium text-gray-600">Box Size:</label>
            <input type="text" id="boxSize" className="w-full p-2 mt-1 border rounded" />
            </div>

            {/* Add more labels and input fields for this category as needed */}
        </div>

        {/* Second Column - Inventory and Pricing Information */}
        <div className="w-full p-4 md:w-1/3">
            <h2 className="mb-4 text-lg font-semibold">Inventory and Pricing Information</h2>

            <div className="mb-4">
            <label htmlFor="strength" className="block text-sm font-medium text-gray-600">Strength:</label>
            <input type="text" id="strength" className="w-full p-2 mt-1 border rounded" />
            </div>

            <div className="mb-4">
            <label htmlFor="currentQty" className="block text-sm font-medium text-gray-600">Current Quantity:</label>
            <input type="number" id="currentQty" className="w-full p-2 mt-1 border rounded" />
            </div>

            <div className="mb-4">
            <label htmlFor="openingStock" className="block text-sm font-medium text-gray-600">Opening Stock:</label>
            <input type="number" id="openingStock" className="w-full p-2 mt-1 border rounded" />
            </div>

            {/* Add more labels and input fields for this category as needed */}
        </div>

        {/* Third Column - Additional Details and Dates */}
        <div className="w-full p-4 md:w-1/3">
            <h2 className="mb-4 text-lg font-semibold">Additional Details and Dates</h2>

            <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description:</label>
            <input type="text" id="description" className="w-full p-2 mt-1 border rounded" />
            </div>

            <div className="mb-4">
            <label htmlFor="medicineImage" className="block text-sm font-medium text-gray-600">Medicine Image:</label>
            <input type="image" id="medicineImage" className="w-full p-2 mt-1 border rounded" />
            </div>

            <div className="mb-4">
            <label htmlFor="prescription" className="block text-sm font-medium text-gray-600">Prescription:</label>
            <input type="text" id="prescription" className="w-full p-2 mt-1 border rounded" />
            </div>

            <div className="mb-4">
            <label htmlFor="openingDate" className="block text-sm font-medium text-gray-600">Opening Date:</label>
            <input type="date" id="openingDate" className="w-full p-2 mt-1 border rounded" />
            </div>

            <div className="mb-4">
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-600">Expiry Date:</label>
            <input type="date" id="expiryDate" className="w-full p-2 mt-1 border rounded" />
            </div>

            {/* Add more labels and input fields for this category as needed */}
        </div>
            </div>

            <div className='p-4'>
                <div className='overflow-auto'>
                <table className="w-full mb-4 border-collapse">
                    {/* Table Header */}
                    <thead>
                        <tr className="font-semibold bg-gray-50">
                            <th className="p-2">Sell Price</th>
                            <th className="p-2">Purchase Price</th>
                            <th className="p-2">Batch No</th>
                            <th className="p-2">Tax %</th>
                            <th className="p-2">Supplier</th>
                            <th className="p-2">Manufacturer</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        <tr className="border-b">
                            <td className="p-2 border-r">
                                <input
                                    type="text"
                                    className="w-full p-1 border"
                                />
                            </td>
                            <td className="p-2 border-r">
                                <input
                                    type="text"
                                    className="w-full p-1 border"
                                />
                            </td>
                            <td className="p-2 border-r">
                                <input
                                    type="text"
                                    className="w-full p-1 border"
                                />
                            </td>
                            <td className="p-2 border-r">
                                <input
                                    type="number"
                                    className="w-full p-1 border"
                                />
                            </td>
                            <td className="p-2 border-r">
                                {/* <input
                                    type="number"
                                    className="w-full p-1 border"
                                /> */}
                                <select id="medicine_supplier" className="w-full p-2 border">
                                <option value="">Select Supplier</option>
                                {/* Map over suppliers to generate options */}
                                </select>
                            </td>
                            <td className="p-2 border-r">
                                <input
                                    type="number"
                                    className="w-full p-1 border"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AddProduct;
