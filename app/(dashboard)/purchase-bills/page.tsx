import AddPurchaseBill from '@/app/Components/Tables/AddPurchaseBill'
import React from 'react'
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels
} from "@tremor/react";
import PurchaseBillList from '@/app/Components/Tables/PurchaseBillList';

const PurchaseBills = () => {
  return (
    <div className='h-auto p-5 bg-slate-100'>
      <TabGroup>
        <TabList className="bg-white">
          <Tab>Add Purchase Bill</Tab>
          <Tab>Purchase List</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AddPurchaseBill />
          </TabPanel>
          <TabPanel>
            <PurchaseBillList />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  )
}

export default PurchaseBills