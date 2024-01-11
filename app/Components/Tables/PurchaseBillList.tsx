'use client'

import React, { useEffect } from 'react';
// import DBLTable from 'dbl-table';
import DBLTable from './DBLTable'
import useFetch from '@/app/hooks/useFetchh';
import { IoMdCreate, IoMdEye } from 'react-icons/io';
import Link from 'next/link';
import { IMedicineList } from '@/app/types/medicine.types';
import useAddProductModalStore from '@/app/Context/useAddProductModalStore';


interface MedicineInfo {
    success: boolean;
    data: IMedicineList[];
}

const PurchaseBillList = () => {
    // const { onOpen } = useAddProductModalStore()
    const apiEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/medicines`;

    const { data, isLoading, isError, refetchData, } = useFetch<MedicineInfo>(apiEndpoint,'GET',null,{});

    // console.log('Data:', data);

    const columns = [
        { key: 'medicine_name', label: 'Medicine Name' },
        { key: 'barcode', label: 'Barcode' },
        { key: 'code', label: 'Code' },
        {
            key: 'medicine_type',
            label: 'Medicine Type',
            renderCell: (params: any) => <p>{params?.medicine_type_name}</p>,
        },
        // Repeat similar patterns for other ref properties
        { key: 'strength', label: 'Strength' },
        { key: 'current_qty', label: 'Current Quantity' },
        { key: 'selling_price', label: 'Selling Price' },
        { key: 'purchase_price', label: 'Purchase Price' },
        { key: 'tax', label: 'Tax' },
        { key: 'description', label: 'Description' },
        { key: 'opening_date', label: 'Opening Date', type: 'date' },
        { key: 'expiry_date', label: 'Expiry Date', type: 'date' },
    ];

    const toolbars: React.ReactNode[] = [
        <button key="newMedicine" className="px-3 py-1 text-white bg-[#0256D5] rounded">
            <Link href='/medicine-list/add-medicine'>Add Medicine</Link>
        </button>,

        <button onClick={refetchData} key="newMedicine" className="px-3 py-1 text-gray-500 bg-[#f1f1f1] rounded">
            Refresh
        </button>,
    ];

    const userComponent: React.ReactNode = (
        <div className="flex w-full pt-4 border-t">
            {/* Left side */}
            <div className="w-1/2 pr-4">

                {/* Manufacturer */}
                <div className="flex items-center mb-4">
                    <label htmlFor="manufacturer" className="w-1/3">Manufacturer</label>
                    <select id="manufacturer" name="manufacturer" className="w-2/3 p-2 border border-gray-300 rounded">
                    {/* Add manufacturer options here */}
                    </select>
                </div>

                {/* Invoice No. */}
                <div className="flex items-center mb-4">
                    <label htmlFor="invoiceNo" className="w-1/3">Invoice No.</label>
                    <input type="text" id="invoiceNo" name="invoiceNo" className="w-2/3 p-2 border border-gray-300 rounded" />
                </div>

                {/* Payment Type */}
                <div className="flex items-center mb-4">
                    <label htmlFor="paymentType" className="w-1/3">Payment Type</label>
                    <select id="paymentType" name="paymentType" className="w-2/3 p-2 border border-gray-300 rounded">
                    {/* Add payment type options here */}
                    </select>
                </div>

            </div>

            {/* Right side */}
            <div className="w-1/2 pl-4">

                {/* Purchase Date */}
                <div className="flex items-center mb-4">
                    <label htmlFor="purchaseDate" className="w-1/3">Purchase Date</label>
                    <input type="date" id="purchaseDate" name="purchaseDate" className="w-2/3 p-2 border border-gray-300 rounded" />
                </div>

                {/* Details */}
                <div className="flex items-center mb-4">
                    <label htmlFor="details" className="w-1/3">Details</label>
                    <textarea id="details" name="details" className="w-2/3 p-2 border border-gray-300 rounded"></textarea>
                </div>

            </div>

        </div>
    )

    return (
        <div>
            <DBLTable
                data={data && data.data}
                columns={columns}
                loading={isLoading}
                isError={isError}
                tableTitle="Purchase Bill List"
                printTools
                toolbars={toolbars}
                // userComponents={userComponent}
                // showActions={showActions}
            />
        </div>
    );
};

export default PurchaseBillList;
