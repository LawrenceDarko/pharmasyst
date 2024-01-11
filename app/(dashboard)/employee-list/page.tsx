import AddEmpolyee from '@/app/Components/Tables/AddEmployee'
import AddPurchaseBill from '@/app/Components/Tables/AddPurchaseBill'
import EmployeeTable from '@/app/Components/Tables/EmployeeTable'
import PurchaseBillList from '@/app/Components/Tables/PurchaseBillList'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@tremor/react'
import React from 'react'

const EmployeeList = () => {
  return (
    <div className='h-auto p-5 bg-slate-100'>
      <TabGroup>
        <TabList className="bg-white">
          <Tab>Employee List</Tab>
          <Tab>Add Employee</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <EmployeeTable />
          </TabPanel>
          <TabPanel>
          {/* <AddPurchaseBill /> */}
          <AddEmpolyee />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  )
}

export default EmployeeList