import ReportItems from '@/app/Components/Reports/ReportItems'
import { Card, Text } from '@tremor/react'
import React from 'react'

// Icons
import { FcLineChart } from "react-icons/fc";
import { FcSalesPerformance } from "react-icons/fc";
import { FaDollarSign, FaChartBar, FaBullhorn, FaUsers, FaWarehouse, FaUserTie, FaDesktop, FaClipboardList, FaFirstAid, FaCheckCircle } from 'react-icons/fa';

const Reports = () => {


    const reportList = [
        {
            icon: <FaDollarSign color="#3498db" />,
            label: 'Sales Reports',
            subLists: [
            { name: 'Monthly Sales', href: '/monthly-sales' },
            { name: 'Yearly Sales', href: '/yearly-sales' },
            ],
        },
        {
            icon: <FaChartBar color="#2ecc71" />,
            label: 'Financial Reports',
            subLists: [
            { name: 'Balance Sheet', href: '/balance-sheet' },
            { name: 'Profit and Loss', href: '/profit-loss' },
            ],
        },
        {
            icon: <FaBullhorn color="#e74c3c" />,
            label: 'Marketing Reports',
            subLists: [
            { name: 'Campaign Performance', href: '/campaign-performance' },
            { name: 'ROI Analysis', href: '/roi-analysis' },
            ],
        },
        {
            icon: <FaUsers color="#f39c12" />,
            label: 'Customer Reports',
            subLists: [
            { name: 'Customer Segmentation', href: '/customer-segmentation' },
            { name: 'Customer Satisfaction', href: '/customer-satisfaction' },
            ],
        },
        {
            icon: <FaWarehouse color="#9b59b6" />,
            label: 'Inventory Reports',
            subLists: [
            { name: 'Stock Levels', href: '/stock-levels' },
            { name: 'Product Turnover', href: '/product-turnover' },
            ],
        },
        {
            icon: <FaUserTie color="#e67e22" />,
            label: 'Employee Reports',
            subLists: [
            { name: 'Attendance Records', href: '/attendance-records' },
            { name: 'Performance Reviews', href: '/performance-reviews' },
            ],
        },
        {
            icon: <FaDesktop color="#3498db" />,
            label: 'IT Reports',
            subLists: [
            { name: 'Network Performance', href: '/network-performance' },
            { name: 'Security Audits', href: '/security-audits' },
            ],
        },
        {
            icon: <FaClipboardList color="#2ecc71" />,
            label: 'Project Reports',
            subLists: [
            { name: 'Task Completion', href: '/task-completion' },
            { name: 'Project Timelines', href: '/project-timelines' },
            ],
        },
        {
            icon: <FaFirstAid color="#e74c3c" />,
            label: 'Health and Safety Reports',
            subLists: [
            { name: 'Incident Reports', href: '/incident-reports' },
            { name: 'Emergency Procedures', href: '/emergency-procedures' },
            ],
        },
        {
            icon: <FaCheckCircle color="#27ae60" />,
            label: 'Quality Assurance Reports',
            subLists: [
            { name: 'Product Inspections', href: '/product-inspections' },
            { name: 'Compliance Audits', href: '/compliance-audits' },
            ],
        },
    ];
    

    return (
        <div className='p-5 space-y-5'>
            <Text className='text-2xl'>Reports</Text>
            <div className='flex flex-col flex-wrap gap-10 p-6 bg-gray-100 rounded shadow-md h-[77vh]'>
                {reportList.map((report, index) => (
                    <ReportItems key={index} {...report} />
                ))}
            </div>
        </div>
    )
}

export default Reports