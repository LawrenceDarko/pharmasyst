'use client'

import DBLTable from '@/app/Components/Tables/DBLTable'
// import DBLTable from 'dbl-table'
import Link from 'next/link';
import React, { useState } from 'react'
import { IoMdCreate, IoMdEye } from 'react-icons/io';

// Define type for columns
type TableColumn = {
  key: string;
  label: string;
  renderCell?: (cellData: any) => any; 
};

const ExpiryInfo = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 1,
    pageSize: 15,
  });

  const [globalFilter, setGlobalFilter] = useState("");

  const handlePaginationChange = (newPagination: { pageIndex: number; pageSize: number }) => {
    setPagination(newPagination);
  };

  const handleGlobalTableSearchChange = (newGlobalFilter: string) => {
    setGlobalFilter(newGlobalFilter);
  };

  const renderRowDetails = ({ row }: any) => (
    <div>
      <div>Your expanded row details component here {row.name} </div>
      <div>User is: {row.user} </div>
      <div>Status is: {row.status} </div>
      <div>Amount is: {row.amount} </div>
    </div>
  );

  // Define data for the MerchantList component
const merchantListData = [
  {
    transactionID: "#123456",
    user: "Lena Mayer",
    item: "Under Armour Shorts",
    status: "Ready for dispatch",
    amount: "$ 49.90",
    link: "#",
    },
    {
    transactionID: "#234567",
    user: "Max Smith",
    item: "Book - Wealth of Nations",
    status: "Ready for dispatch",
    amount: "$ 19.90",
    link: "#",
    },
    {
    transactionID: "#345678",
    user: "Anna Stone",
    item: "Garmin Forerunner 945",
    status: "Cancelled",
    amount: "$ 499.90",
    link: "#",
    },
    {
    transactionID: "#4567890",
    user: "Truls Cumbersome",
    item: "Running Backpack",
    status: "Shipped",
    amount: "$ 89.90",
    link: "#",
    },
    {
    transactionID: "#5678901",
    user: "Peter Pikser",
    item: "Rolex Submariner Replica",
    status: "Cancelled",
    amount: "$ 299.90",
    link: "#",
    },
    {
    transactionID: "#6789012",
    user: "Phlipp Forest",
    item: "On Clouds Shoes",
    status: "Ready for dispatch",
    amount: "$ 290.90",
    link: "#",
    },
    {
    transactionID: "#78901234",
    user: "Mara Pacemaker",
    item: "Ortovox Backpack 40l",
    status: "Shipped",
    amount: "$ 150.00",
    link: "#",
    },
    {
    transactionID: "#89012345",
    user: "Sev Major",
    item: "Oakley Jawbreaker",
    status: "Ready for dispatch",
    amount: "$ 190.90",
    link: "#",
    },
    {
      transactionID: "#5678901",
      user: "Peter Pikser",
      item: "Rolex Submariner Replica",
      status: "Cancelled",
      amount: "$ 299.90",
      link: "#",
    },
    {
      transactionID: "#5678901",
      user: "Peter Pikser",
      item: "Rolex Submariner Replica",
      status: "Cancelled",
      amount: "$ 299.90",
      link: "#",
    },
    {
      transactionID: "#5678901",
      user: "Peter Pikser",
      item: "Rolex Submariner Replica",
      status: "Cancelled",
      amount: "$ 299.90",
      link: "#",
    },
];

const colors: { [key: string]: string; } = {
  "Ready for dispatch": "gray",
  Cancelled: "rose",
  Shipped: "emerald",
};

// Define columns for the MerchantList component
const columns: TableColumn[] = [
  { key: 'transactionID', label: 'ID' },
  { key: 'user', label: 'Name' },
  { key: 'item', label: 'Email' },
  { 
    key: 'status', 
    label: 'Status',
    renderCell: (cellData) => {
      return (
        <div className='flex'>
          <div className={`px-2 text-${colors[cellData]}-500 bg-${colors[cellData]}-200`}>{cellData}</div>
        </div>
      )
    }
  },
  { key: 'amount', label: 'Phone' },
  // Add more columns as needed
];

// Define custom toolbars for the MerchantList component
const toolbars: React.ReactNode[] = [
  <button key="newMerchant" className="px-3 py-1 text-white bg-indigo-500 rounded">
    <Link href="/merchants/add-merchant">New Merchant</Link>
  </button>,
];

const showActions = (rowData: any) => (
  <div className='flex items-center justify-center gap-3'>
    <IoMdCreate onClick={()=>console.log(rowData.item)} className="text-blue-500 cursor-pointer" title="Edit" />
    <IoMdEye className="ml-2 text-purple-500 cursor-pointer" title="View" />
  </div>
);
  return (
    <div className='p-5'>
    <DBLTable
      data={merchantListData}
      columns={columns}
      toolbars={toolbars}
      // enableServerPagination
      onPaginationChange={handlePaginationChange}
      // onGlobalTableSearchChange={handleGlobalTableSearchChange}
      loading={false} // Set to true when data is loading
      renderRowDetails={renderRowDetails}
      showActions={showActions}
      tableTitle = 'Table Title'
      // enableStripStyle = {false}
      // removeStraightLines
      printTools
      onRowSelection={(rowData)=>{console.log('New RowData:', rowData)}}
      customStyles={{header: {position: 'static'}}}
    />
    </div>
  );
};

export default ExpiryInfo

