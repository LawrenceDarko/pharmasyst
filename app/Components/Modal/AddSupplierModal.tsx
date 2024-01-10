'use client'
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useAddSupplierModalStore from "@/app/Context/useAddSupplierModalStore";
import BigModalTemplate from "./BigModalTemplate";


const AddSupplierModal = () => {
    const {control, handleSubmit, formState:{errors}} = useForm<FieldValues>()
    const {isOpen, onClose} = useAddSupplierModalStore();
    const [selectedOption, setSelectedOption] = useState(''); // State to track selected option

    const handleOptionChange = (event: any) => {
        setSelectedOption(event.target.value);
    };

    const onSubmit: SubmitHandler<FieldValues> = (data: any) => { 
        console.log(data)
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <div className='flex justify-between w-full gap-3'>
                Hey I am working
            </div>
        </div>  
    )

    return (
        <BigModalTemplate title="Add Supplier" body={bodyContent} secondaryActionLabel={'Cancel'} secondaryAction={onClose} onSubmit={handleSubmit(onSubmit)} actionlabel={'Create'} isOpen={isOpen} onClose={onClose} />
    )
}

export default AddSupplierModal