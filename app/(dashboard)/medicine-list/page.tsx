import AddProduct from '@/app/Components/AddProduct'
import AddInvoice from '@/app/Components/Tables/AddInvoice'
import MedicineTable from '@/app/Components/Tables/MedicineTable'
import SalesInvoiceTable from '@/app/Components/Tables/SalesInvoiceTable'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@tremor/react'
import React from 'react'

const MedicineList = () => {
  return (
    // <div className='p-5'>
    //   <MedicineTable />
    // </div>
    <div className='h-auto p-5 bg-slate-100'>
        <TabGroup>
            <TabList className="font-semibold bg-white">
                <Tab>Medicine</Tab>
                <Tab>Add New Medicine</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                  <MedicineTable />
                </TabPanel>
                <TabPanel>
                    <AddProduct />
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </div>
  )
}

export default MedicineList