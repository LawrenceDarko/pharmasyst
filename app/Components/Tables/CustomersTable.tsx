'use client'

import React from 'react';
import DBLTable from 'dbl-table';
import useFetch from '@/app/hooks/useFetchh';
import Link from 'next/link';

interface CustomerData {
    _id: string;
    customer_name: string;
    customer_address: string;
    phone: string;
    country: string;
    email: string;
    // Include other properties from the 'Customer' model if needed
}

interface CustomerInfo {
    success: boolean;
    data: CustomerData[];
}

const CustomersTable = () => {
    const apiEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/customers`;

    const { data, isLoading, isError, refetchData, setCustomHeaders } = useFetch<CustomerInfo>(
        apiEndpoint,
        'GET',
        null,
        {}
    );

    // console.log('Data:', data);

    const columns = [
        { key: 'customer_name', label: 'Customer Name' },
        { key: 'customer_address', label: 'Customer Address' },
        { key: 'phone', label: 'Phone' },
        { key: 'country', label: 'Country' },
        { key: 'email', label: 'Email' },
        // Include other columns based on the 'Customer' model properties
    ];

    const toolbars: React.ReactNode[] = [
        <button key="newCustomer" className="px-3 py-1 text-white bg-[#0256D5] rounded">
            <Link href="/customers/add-customer">Add Customer</Link>
        </button>,
    ];

    return (
        <div>
            <DBLTable
                data={data && data.data}
                columns={columns}
                loading={isLoading}
                isError={isError}
                tableTitle="Customer List"
                printTools
                toolbars={toolbars}
            />
        </div>
    );
};

export default CustomersTable;
