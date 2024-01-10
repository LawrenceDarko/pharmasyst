'use client'

import React from 'react';
import DBLTable from 'dbl-table';
import useFetch from '@/app/hooks/useFetchh';
import { IoMdCreate, IoMdEye } from 'react-icons/io';
import Link from 'next/link';

interface CategoryData {
    _id: string;
    category_name: string;
    category_image: string;
    // Include other properties from the 'Category' model if needed
}

interface CategoryInfo {
    success: boolean;
    data: CategoryData[];
}

const MedicineCategoryTable = () => {
    const apiEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/medicine-categories`;

    const { data, isLoading, isError, refetchData, setCustomHeaders } = useFetch<CategoryInfo>(
        apiEndpoint,
        'GET',
        null,
        {}
    );

    console.log('Data:', data);

    const columns = [
        { key: 'category_name', label: 'Category Name' },
        { key: 'category_image', label: 'Category Image' },
        // Include other columns based on the 'Category' model properties
    ];

    const toolbars: React.ReactNode[] = [
        <button key="newCategory" className="px-3 py-1 text-white bg-[#0256D5] rounded">
            <Link href="/categories/add-category">Add Category</Link>
        </button>,
    ];

    return (
        <div>
            <DBLTable
                data={data && data.data}
                columns={columns}
                loading={isLoading}
                isError={isError}
                tableTitle="Category List"
                printTools
                toolbars={toolbars}
            />
        </div>
    );
};

export default MedicineCategoryTable;
