import React from 'react'
import SalesInvoiceModal from './Modal/SalesInvoiceModal'
import AddCategoryModal from './Modal/AddCategoryModal'
import AddSupplierModal from './Modal/AddSupplierModal'
import AddProductModal from './Modal/AddProductModal'
import AddEmployeeModal from './Modal/AddEmployeeModal'

const AllModals = () => {
    return (
        <>
            <SalesInvoiceModal />
            <AddCategoryModal />
            <AddSupplierModal />
            <AddProductModal />
            <AddEmployeeModal />
        </>
    )
}

export default AllModals