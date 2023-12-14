import React from 'react'
import { FaCalendarPlus, FaPlus } from 'react-icons/fa6'
import TableCompTwo from '../Components/Tables/TableCompTwo'
import { Text } from '@tremor/react'

const SalesInvoice = () => {
    return (
        <div className='flex flex-col gap-3 p-4'>
            <div>
                <Text className='text-4xl fon-semibold'>Sales Invoice</Text>
            </div>
            <div className="">
                <TableCompTwo />
            </div>
        </div>
    )
}

export default SalesInvoice