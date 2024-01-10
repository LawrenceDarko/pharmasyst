export interface IMedicineList {
    _id: string;
    medicine_name: string;
    barcode: string;
    code: string;
    medicine_type: {
        _id: string;
        // Other properties from 'MedicineType' model
    };
    category: {
        _id: string;
        // Other properties from 'MedicineCategory' model
    };
    unit: {
        _id: string;
        // Other properties from 'Unit' model
    };
    box_size: {
        _id: string;
        // Other properties from 'BoxSize' model
    };
    brand: {
        _id: string;
        // Other properties from 'MedicineBrand' model
    };
    strength: string;
    current_qty: number;
    opening_stock: number;
    selling_price: number;
    purchase_price: number;
    tax: number;
    description: string;
    medicine_image: string;
    prescription: string;
    opening_date: Date;
    expiry_date: Date;
}

export interface IMedicineExpiryList {
    _id: string;
    product: string;
    MFD: Date;
    EXPD: Date;
    stock: number;
    batch_no: string;
}