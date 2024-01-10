'use client'

import React, { useState } from 'react';

interface MedicineDetails {
    name: string;
    batch: string;
    expiry: string;
    qty: number;
    price: number;
    discountPercentage: number;
    total: number;
}


const POSComp = () => {
    // State to track selected medicines and other input values
    const [selectedMedicines, setSelectedMedicines] = useState<MedicineDetails[]>([]);
    const [barcodeInput, setBarcodeInput] = useState('');
    const [manualBarcodeInput, setManualBarcodeInput] = useState('');
    const [selectedMedicine, setSelectedMedicine] = useState<MedicineDetails | null>(null);

// Function to handle adding medicine to the table
    const handleAddMedicine = () => {
        // Logic to fetch medicine details based on barcode or manual input
        // Update the selectedMedicines state with the fetched medicine details
        // You may need to implement this logic based on your backend or data source
        const medicineDetails: MedicineDetails = {
            name: 'Sample Medicine',
            batch: '12345',
            expiry: '2024-12-31',
            qty: 1,
            price: 10.99,
            discountPercentage: 5,
            total: 10.99 - (10.99 * 5) / 100,
        };

        setSelectedMedicines([...selectedMedicines, medicineDetails]);
        // setSelectedMedicines(prev=>([...prev, medicineDetails]))
        // Reset input values
        setBarcodeInput('');
        setManualBarcodeInput('');
    };

    // Function to handle making payment
    const handleMakePayment = () => {
        // Logic to handle payment
    };

    return (
        <div className="flex">
        {/* Left side column */}
        <div className="flex flex-col w-1/2 p-4">
            <input
                type="text"
                placeholder="Search Medicine"
                className="p-2 mb-4 border border-gray-300 focus:outline-none"
            />
            <div className="p-4 bg-gray-200">
            {/* Medicine list */}
            {/* Display medicine images and text here */}
            </div>
        </div>

        {/* Right side column */}
        <div className="flex flex-col w-1/2 p-4">
            <div className="flex mb-4">
                <input
                    type="text"
                    placeholder="Barcode or QR Scan here"
                    value={barcodeInput}
                    onChange={(e) => setBarcodeInput(e.target.value)}
                    className="w-1/2 p-2 mr-2 border border-gray-300"
                />
                <input
                    type="text"
                    placeholder="Manual Input Barcode"
                    value={manualBarcodeInput}
                    onChange={(e) => setManualBarcodeInput(e.target.value)}
                    className="w-1/2 p-2 border border-gray-300"
                />
            </div>

            {/* Dropdown and Plus button */}
            <div className="flex gap-2 mb-4">
                <select className="w-10/12 p-2 border border-gray-300">
                    {/* Dropdown options */}
                </select>

                <button className="w-2/12 p-2 text-white bg-green-500" onClick={handleAddMedicine}>
                    +
                </button>
            </div>

            {/* Medicine Table */}
            <table className="w-full mb-4">
            {/* Table headers */}
            <thead>
                <tr>
                    <th>Medicine Name</th>
                    <th>Batch</th>
                    <th>Expiry</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Disc %</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {/* Populate table rows based on selectedMedicines */}
                {selectedMedicines.map((medicine, index) => (
                <tr key={index}>
                    {/* Display medicine details */}
                    {/* Adjust based on your actual data structure */}
                </tr>
                ))}
            </tbody>
            </table>

            {/* Information columns */}
            <div className="mb-4">
            {/* Invoice Discount, Total Discount, Total Tax, Grand Total, Change */}
            {/* Display information based on calculations */}
            </div>

            {/* Payment section */}
            <div className="flex">
            {/* Net Total, Paid Amount, Due Amount */}
            {/* Display information based on calculations */}
            <button
                onClick={handleMakePayment}
                className="w-full p-2 text-white bg-blue-500"
            >
                Make Payment
            </button>
            </div>
        </div>
        </div>
    );
};

export default POSComp;
