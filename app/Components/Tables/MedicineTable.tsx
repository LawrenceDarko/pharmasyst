'use client'

import React, { useEffect } from 'react';
import DBLTable from 'dbl-table';
import useFetch from '@/app/hooks/useFetchh';
import { IoMdCreate, IoMdEye } from 'react-icons/io';
import Link from 'next/link';
import { IMedicineList } from '@/app/types/medicine.types';
import useAddProductModalStore from '@/app/Context/useAddProductModalStore';


interface MedicineInfo {
    success: boolean;
    data: IMedicineList[];
}

const MedicineTable = () => {
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

    return (
        <div>
            <DBLTable
                data={data && data.data}
                columns={columns}
                loading={isLoading}
                isError={isError}
                tableTitle="Medicine List"
                printTools
                toolbars={toolbars}
                // showActions={showActions}
            />
        </div>
    );
};

export default MedicineTable;
