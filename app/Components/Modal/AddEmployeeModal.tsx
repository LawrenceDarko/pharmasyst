'use client'

import React, { useState } from "react";
import ModalTemplate from "./ModalTemplate"
import useModalStore from "@/app/Context/useModalStore";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";


const AddEmployee = () => {
    const {control, handleSubmit, formState:{errors}} = useForm<FieldValues>()
    const {isOpen, onClose} = useModalStore();
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
        <ModalTemplate title="Add Sales Invoice" body={bodyContent} secondaryActionLabel={'Cancel'} secondaryAction={onClose} onSubmit={handleSubmit(onSubmit)} actionlabel={'Create'} isOpen={isOpen} onClose={onClose} />
    )
}

export default AddEmployee