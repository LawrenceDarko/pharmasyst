'use client'

import React from 'react';
import DBLTable from 'dbl-table';
import useFetch from '@/app/hooks/useFetchh';
import { IoMdCreate, IoMdEye } from 'react-icons/io';
import Link from 'next/link';

interface RoleData {
    _id: string;
    role_name: string;
    // Include other properties from the 'Role' model if needed
}

interface RoleInfo {
    success: boolean;
    data: RoleData[];
}

const EmployeeRoleTable = () => {
    const apiEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/employee-roles`;

    const { data, isLoading, isError, refetchData, setCustomHeaders } = useFetch<RoleInfo>(
        apiEndpoint,
        'GET',
        null,
        {}
    );

    console.log('Data:', data);

    const columns = [
        { key: 'role_name', label: 'Role Name' },
        // Include other columns based on the 'Role' model properties
    ];

    const toolbars: React.ReactNode[] = [
        <button key="newRole" className="px-3 py-1 text-white bg-[#0256D5] rounded">
            <Link href="/roles/add-role">Add Role</Link>
        </button>,
    ];

    return (
        <div>
            <DBLTable
                data={data && data.data}
                columns={columns}
                loading={isLoading}
                isError={isError}
                tableTitle="Role List"
                printTools
                toolbars={toolbars}
            />
        </div>
    );
};

export default EmployeeRoleTable;
