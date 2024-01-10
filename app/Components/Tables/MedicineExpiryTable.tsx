'use client'

import React from 'react';
import DBLTable from 'dbl-table';
import useFetch from '@/app/hooks/useFetchh';
import { IMedicineExpiryList } from '@/app/types/medicine.types';


interface ProductInfo {
    success: boolean;
    data: IMedicineExpiryList[];
}

const MedicineExpiryTable = () => {
    const apiEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/medicine-expiry`;

    const { data, isLoading, isError, refetchData } = useFetch<ProductInfo>(
        apiEndpoint,
        'GET',
        null,
        {}
    );

    console.log('Data:', data);

    const columns = [
        { key: 'product', label: 'Product' },
        { key: 'MFD', label: 'Manufacturing Date', type: 'date' },
        { key: 'EXPD', label: 'Expiry Date', type: 'date' },
        { key: 'stock', label: 'Stock' },
        { key: 'batch_no', label: 'Batch Number' },
    ];


    return (
        <div>
            <DBLTable
                data={data && data.data}
                columns={columns}
                loading={isLoading}
                isError={isError}
                tableTitle="Expiry Medicine List"
                printTools
                // toolbars={toolbars}
                // showActions={showActions}
            />
        </div>
    );
};

export default MedicineExpiryTable;
