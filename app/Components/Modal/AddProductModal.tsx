'use client'
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useAddProductModalStore from "@/app/Context/useAddProductModalStore";
import BigModalTemplate from "./BigModalTemplate";
import CustomInput from "../Inputs/CustomInput";


const AddProductModal = () => {
    const {control, handleSubmit, formState:{errors}} = useForm<FieldValues>()
    const {isOpen, onClose} = useAddProductModalStore();
    const [selectedOption, setSelectedOption] = useState(''); // State to track selected option

    const handleOptionChange = (event: any) => {
        setSelectedOption(event.target.value);
    };

    const onSubmit: SubmitHandler<FieldValues> = (data: any) => { 
        console.log(data)
    }

    // Modal body with arranged inputs
    const bodyContent = (
        <form>
            <div className="grid grid-cols-2 gap-4">
                <CustomInput name="medicine_name" placeholder="Medicine Name" control={control} type="text" rules={{ required: 'Medicine name is required' }} />
                <CustomInput name="barcode" placeholder="Barcode" control={control} type="text" rules={{ required: 'Barcode is required' }} />
                <CustomInput name="code" placeholder="Code" control={control} type="text" />
                <CustomInput name="medicine_type" placeholder="Medicine Type" control={control} type="text" />
                <CustomInput name="category" placeholder="Category" control={control} type="text" />
                <CustomInput name="unit" placeholder="Unit" control={control} type="text" />
                <CustomInput name="box_size" placeholder="Box Size" control={control} type="text" />
                <CustomInput name="brand" placeholder="Brand" control={control} type="text" />
                <CustomInput name="strength" placeholder="Strength" control={control} type="text" />
                <CustomInput name="current_qty" placeholder="Current Quantity" control={control} type="number" />
                <CustomInput name="opening_stock" placeholder="Opening Stock" control={control} type="number" />
                <CustomInput name="selling_price" placeholder="Selling Price" control={control} type="number" />
                <CustomInput name="purchase_price" placeholder="Purchase Price" control={control} type="number" />
                <CustomInput name="tax" placeholder="Tax" control={control} type="number" />
                <CustomInput name="description" placeholder="Description" control={control} type="text" />
                <CustomInput name="medicine_image" placeholder="Medicine Image URL" control={control} type="text" />
                <CustomInput name="prescription" placeholder="Prescription" control={control} type="text" />
                <CustomInput name="opening_date" placeholder="Opening Date" control={control} type="text" />
                <CustomInput name="expiry_date" placeholder="Expiry Date" control={control} type="text" />
            </div>
        </form>
    );

    return (
        <BigModalTemplate title="Add Product" body={bodyContent} secondaryActionLabel={'Cancel'} secondaryAction={onClose} onSubmit={handleSubmit(onSubmit)} actionlabel={'Create'} isOpen={isOpen} onClose={onClose} />
    )
}

export default AddProductModal