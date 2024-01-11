import React from 'react'
import SalesInvoiceTable from '@/app/Components/Tables/SalesInvoiceTable'
import AddPurchaseBill from '@/app/Components/Tables/AddPurchaseBill'
import PurchaseBillList from '@/app/Components/Tables/PurchaseBillList'
import { TabGroup, TabList, Tab, TabPanels, TabPanel, Text } from '@tremor/react'
import AddInvoice from '@/app/Components/Tables/AddInvoice'

const SalesInvoice = () => {
    return (
        <div className='h-auto p-5 bg-slate-100'>
            <div className='h-12 p-2 mb-2'>
                <Text className='text-2xl'>Sales Invoice</Text>
            </div>
            <TabGroup>
                <TabList className="font-semibold bg-white">
                    <Tab>Sales Invoice</Tab>
                    <Tab>Add New Invoice</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <SalesInvoiceTable />
                    </TabPanel>
                    <TabPanel>
                        <AddInvoice />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    )
}

export default SalesInvoice