'use client'

import React from 'react';
import DBLTable from 'dbl-table';
import useFetch from '@/app/hooks/useFetchh';
import Link from 'next/link';

interface UnitData {
    _id: string;
    unit_name: string;
    decimal_places: number;
    // Include other properties from the 'Unit' model if needed
}

interface UnitInfo {
    success: boolean;
    data: UnitData[];
}

const UnitMeasurementTable = () => {
    const apiEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/units`;

    const { data, isLoading, isError, refetchData, setCustomHeaders } = useFetch<UnitInfo>(
        apiEndpoint,
        'GET',
        null,
        {}
    );

    // console.log('Data:', data);

    const columns = [
        { key: 'unit_name', label: 'Unit Name' },
        { key: 'decimal_places', label: 'Decimal Places' },
        // Include other columns based on the 'Unit' model properties
    ];

    const toolbars: React.ReactNode[] = [
        <button key="newUnit" className="px-3 py-1 text-white bg-[#0256D5] rounded">
            <Link href="/units/add-unit">Add Unit</Link>
        </button>,
    ];

    return (
        <div>
            <DBLTable
                data={data && data.data}
                columns={columns}
                loading={isLoading}
                isError={isError}
                tableTitle="Unit Measurement"
                printTools
                toolbars={toolbars}
            />
        </div>
    );
};

export default UnitMeasurementTable;
