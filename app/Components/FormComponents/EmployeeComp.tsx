'use client'

import React, { useEffect, useState } from 'react';
import DBLTable from '../Tables/DBLTable';
import useFetch from '@/app/hooks/useFetch';
import axios from 'axios';

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

const EmployeeComp = () => {
    // const apiEndpoint = 'https://api.example.com/employees';

    // const [data, setData] = useState()

    // Example usage
const { data, loading, error, errorState, refetch } = useFetch('https://api.example.com/data', 'GET');


    // useEffect(() => {
    //     const getData = async() => {
    //         const response = await axios.get(apiEndpoint, {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             }
    //         })

    //     const newRes = response.data
    //     setData(newRes)
    //     }

    //     getData()
    // }, [])
    

    const columns = [
        { key: 'employee_name', label: 'Employee Name' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Role', renderCell: (params: any) => params.row.role.name },
        { key: 'DOB', label: 'Date of Birth', type: 'date' },
        { key: 'marital_status', label: 'Marital Status' },
        { key: 'gender', label: 'Gender' },
        { key: 'qualification', label: 'Qualification' },
        { key: 'address', label: 'Address' },
        { key: 'phone', label: 'Phone' },
        { key: 'joining_date', label: 'Joining Date', type: 'date' },
        { key: 'salary_type', label: 'Salary Type' },
        { key: 'salary', label: 'Salary' },
    ];

    // Additional code for handling pagination, row selection, etc.
    // if(isError){
    //     return;
    // }

    return (
        <div>
            <DBLTable
                data={data}
                columns={columns}
                loading={loading}
                isError={errorState}
            />
        </div>
    );
};

export default EmployeeComp;
