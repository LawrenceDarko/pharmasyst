'use client'

import React from 'react';
import DBLTable from 'dbl-table';
import useFetch from '@/app/hooks/useFetchh';
import { IoMdCreate, IoMdEye } from 'react-icons/io';
import Link from 'next/link';

interface SupplierData {
    _id: string;
    supplier_name: string;
    supplier_address: string;
    phone: string;
    country: string;
    city: string;
    email: string;
    // Include other properties from the 'Supplier' model if needed
}

interface SupplierInfo {
    success: boolean;
    data: SupplierData[];
}

const SupplierListTable = () => {
    const apiEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/suppliers`;

    const { data, isLoading, isError, refetchData, setCustomHeaders } = useFetch<SupplierInfo>(
        apiEndpoint,
        'GET',
        null,
        {}
    );

    console.log('Data:', data);

    const columns = [
        { key: 'supplier_name', label: 'Supplier Name' },
        { key: 'supplier_address', label: 'Supplier Address' },
        { key: 'phone', label: 'Phone' },
        { key: 'country', label: 'Country' },
        { key: 'city', label: 'City' },
        { key: 'email', label: 'Email' },
        // Include other columns based on the 'Supplier' model properties
    ];

    const toolbars: React.ReactNode[] = [
        <button key="newSupplier" className="px-3 py-1 text-white bg-[#0256D5] rounded">
            <Link href="/suppliers/add-supplier">Add Supplier</Link>
        </button>,
    ];

    return (
        <div>
            <DBLTable
                data={data && data.data}
                columns={columns}
                loading={isLoading}
                isError={isError}
                tableTitle="Supplier List"
                printTools
                toolbars={toolbars}
            />
        </div>
    );
};

export default SupplierListTable;
