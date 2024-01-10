'use client'

import React from 'react';
import DBLTable from 'dbl-table';
import useFetch from '@/app/hooks/useFetchh';
import { IoMdCreate, IoMdEye } from 'react-icons/io';
import Link from 'next/link';

interface InvoiceData {
    _id: string;
    invoice_number: string;
    customer: {
        _id: string;
        // Include other properties from the 'Customer' model if needed
    };
    invoice_date: Date;
    due_date: Date;
    product_name: string;
    description: string;
    sub_total: number;
    discount: number;
    taxable_total: number;
    grand_total: number;
    // Include other properties from the 'Invoice' model if needed
}

interface InvoiceInfo {
    success: boolean;
    data: InvoiceData[];
}

const SalesInvoiceTable = () => {
    const apiEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/sales-invoices`;

    const { data, isLoading, isError, refetchData, setCustomHeaders } = useFetch<InvoiceInfo>(
        apiEndpoint,
        'GET',
        null,
        {}
    );

    console.log('Data:', data);

    const columns = [
        { key: 'invoice_number', label: 'Invoice Number' },
        {
            key: 'customer',
            label: 'Customer',
            renderCell: (params: any) => <p>{params?.customer?.customer_name}</p>,
        },
        { key: 'invoice_date', label: 'Invoice Date', type: 'date' },
        { key: 'due_date', label: 'Due Date', type: 'date' },
        { key: 'product_name', label: 'Product Name' },
        { key: 'description', label: 'Description' },
        { key: 'sub_total', label: 'Sub Total' },
        { key: 'discount', label: 'Discount' },
        { key: 'taxable_total', label: 'Taxable Total' },
        { key: 'grand_total', label: 'Grand Total' },
        // Include other columns based on the 'Invoice' model properties
    ];

    const toolbars: React.ReactNode[] = [
        <button key="newInvoice" className="px-3 py-1 text-white bg-[#0256D5] rounded">
            <Link href="/invoices/add-invoice">Add Invoice</Link>
        </button>,
    ];

    return (
        <div>
            <DBLTable
                data={data && data.data}
                columns={columns}
                loading={isLoading}
                isError={isError}
                tableTitle="Invoice List"
                printTools
                toolbars={toolbars}
            />
        </div>
    );
};

export default SalesInvoiceTable;
