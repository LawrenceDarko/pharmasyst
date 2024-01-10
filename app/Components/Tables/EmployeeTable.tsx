'use client'

import React, { useEffect, useState } from 'react';
// import DBLTable from '../Tables/DBLTable';
import DBLTable from 'dbl-table'
import useFetch from '@/app/hooks/useFetchh';
import axios from 'axios';
import { IoMdCreate, IoMdEye } from 'react-icons/io';
import Link from 'next/link';

interface EmployeeData {
    _id: string;
    employee_name: string;
    email: string;
    role: {
        _id: string;
        // You might want to include other properties from the 'EmployeeRole' model
    };
    DOB: Date;
    marital_status: 'single' | 'married';
    gender: 'Male' | 'Female';
    qualification: string;
    address: string;
    phone: string;
    joining_date: Date;
    salary_type: 'Daily' | 'Monthly' | 'Quartarly' | 'Yearly';
    salary: number;
}

interface EmployeeInfo {
    success: boolean,
    data: EmployeeData
}

const EmployeeTable = () => {
    const apiEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/employees`;

    const { data, isLoading, isSuccess, isError, isRefetching, refetchData } = useFetch<EmployeeInfo>(apiEndpoint, 'GET', null, {});


    // console.log("Data:", data)

    const columns = [
        { key: 'employee_name', label: 'Employee Name'},
        { key: 'email', label: 'Email' },
        { 
            key: 'role', 
            label: 'Role',
            renderCell: (params: any) => {
                return <p>{params?.role_name}</p>
            }
        },
        { key: 'DOB', label: 'Date of Birth'},
        { key: 'marital_status', label: 'Marital Status' },
        { key: 'gender', label: 'Gender' },
        { key: 'qualification', label: 'Qualification'},
        { key: 'address', label: 'Address' },
        { key: 'phone', label: 'Phone' },
        { key: 'joining_date', label: 'Joining Date', type: 'date' },
        { key: 'salary_type', label: 'Salary Type' },
        { key: 'salary', label: 'Salary' },
    ];


    const toolbars: React.ReactNode[] = [
        <button key="newMerchant" className="px-3 py-1 text-white bg-[#0256D5] rounded">
            <Link href="/merchants/add-merchant">Add Employee</Link>
        </button>,

        <button onClick={()=> refetchData && refetchData()} key="newMedicine" className="px-3 py-1 text-gray-500 bg-[#f1f1f1] rounded">
            Refresh
        </button>,
    ];
    
    const showActions = (rowData: any) => (
        <div className='flex items-center justify-center gap-3'>
            <IoMdCreate onClick={()=>console.log(rowData.item)} className="text-blue-500 cursor-pointer" title="Edit" />
            <IoMdEye className="ml-2 text-purple-500 cursor-pointer" title="View" />
        </div>
    );


    return (
        <div>
            <DBLTable
                data={data && data.data}
                columns={columns}
                loading={isLoading}
                isError={isError}
                tableTitle='Employee List'
                printTools
                toolbars={toolbars}
                // onRowSelection={()=>{}}
                // enableStripStyle={false}
                removeStraightLines
                // renderRowDetails={()=>{}}
                showActions={showActions}
                customStyles={{tableCell: {whiteSpace: 'nowrap'}, component: {border: '1px solid #ECECEC', boxShadow: 'none', borderRadius: 0, padding: '20px !important'}}}
            />
        </div>
    );
};

export default EmployeeTable;
