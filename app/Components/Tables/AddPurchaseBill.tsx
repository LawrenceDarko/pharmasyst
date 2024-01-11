'use client'

import React, { useState } from 'react';

interface Item {
    id: number;
    itemInfo: string;
    searchId: string;
    expiryDate: string;
    stock: number;
    quantity: number;
    manufacturerPrice: number;
    total: number;
}

const YourComponent: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [grandTotal, setGrandTotal] = useState<number>(0);

    const handleAddRow = () => {
        const newRow: Item = {
        id: Date.now(),
        itemInfo: '',
        searchId: '',
        expiryDate: '',
        stock: 0,
        quantity: 0,
        manufacturerPrice: 0,
        total: 0,
        };
        setItems((prevItems) => [...prevItems, newRow]);
    };

    const handleRemoveRow = (id: number) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const handleInputChange = (id: number, field: keyof Item, value: any) => {
        setItems((prevItems) =>
        prevItems.map((item) => {
            if (item.id === id) {
            let updatedItem = { ...item, [field]: value };
    
            // Recalculate total based on quantity and manufacturerPrice
            if (field === 'quantity' || field === 'manufacturerPrice') {
                updatedItem.total = updatedItem.quantity * updatedItem.manufacturerPrice;
            }
    
            return updatedItem;
            } else {
            return item;
            }
        })
        );
    };
    

    // Calculate Grand Total whenever items change
    React.useEffect(() => {
        const total = items.reduce((acc, item) => acc + item.total, 0);
        setGrandTotal(total);
    }, [items]);

    return (
        <div className="flex w-full h-auto">
        <div className="w-full bg-white border-gray-200 rounded shadow-md">
            {/* <div className='px-4 py-3 border-b-2'>
                <p className='font-semibold'>Add Purchase Bill</p>
            </div> */}
            <div className='p-4'>
            <div className="flex flex-col gap-4 mb-0 md:flex-row">
                <div className='flex flex-col w-full md:w-1/2'>
                    <div className="w-full mb-4">
                        <label htmlFor="manufacturer" className="block text-sm font-semibold text-gray-600">
                            Manufacturer:
                        </label>
                        <select id="manufacturer" className="w-full p-2 mt-1 border">
                        {/* Add manufacturer options here */}
                        </select>
                    </div>
                    <div className="w-full mb-4">
                        <label htmlFor="invoiceNo" className="block text-sm font-semibold text-gray-600">
                            Invoice No.:
                        </label>
                        <input type="text" id="invoiceNo" className="w-full p-2 mt-1 border" />
                    </div>
                </div>
                <div className='flex flex-col w-full md:w-1/2'>
                    <div className="w-full mb-4">
                        <label htmlFor="paymentType" className="block text-sm font-semibold text-gray-600">
                            Payment Type:
                        </label>
                        <select id="paymentType" className="w-full p-2 mt-1 border">
                        {/* Add payment type options here */}
                        </select>
                    </div>
                    <div className="w-full mb-4">
                        <label htmlFor="purchaseDate" className="block text-sm font-semibold text-gray-600">
                            Purchase Date:
                        </label>
                        <input type="date" id="purchaseDate" className="w-full p-2 mt-1 border" />
                    </div>
                </div>
            </div>
            <div className="w-full mb-4 md:w-1/2">
                    <label htmlFor="details" className="block text-sm font-semibold text-gray-600">
                        Details:
                    </label>
                    <textarea id="details" className="w-full p-2 mt-1 border"/>
                </div>
            <div>
            </div>
            {/* Editable Table */}
            <div className='overflow-auto'>
            <table className="w-full mb-4 border-collapse">
                {/* Table Header */}
                <thead>
                    <tr className="font-semibold bg-gray-50">
                        <th className="p-2">Item Information</th>
                        <th className="p-2">Search ID</th>
                        <th className="p-2">Expiry Date</th>
                        <th className="p-2">Stock</th>
                        <th className="p-2">Quantity</th>
                        <th className="p-2">Manufacturer Price</th>
                        <th className="p-2">Total</th>
                        <th className="p-2">Action</th>
                    </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                {items.map((item) => (
                    <tr key={item.id} className="border-b">
                    <td className="p-2 border-r">
                        <input
                        type="text"
                        value={item.itemInfo}
                        onChange={(e) =>
                            handleInputChange(item.id, 'itemInfo', e.target.value)
                        }
                        className="w-full p-1 border"
                        />
                    </td>
                    <td className="p-2 border-r">
                        <input
                        type="text"
                        value={item.searchId}
                        onChange={(e) =>
                            handleInputChange(item.id, 'searchId', e.target.value)
                        }
                        className="w-full p-1 border"
                        />
                    </td>
                    <td className="p-2 border-r">
                        <input
                        type="date"
                        value={item.expiryDate}
                        onChange={(e) =>
                            handleInputChange(item.id, 'expiryDate', e.target.value)
                        }
                        className="w-full p-1 border"
                        />
                    </td>
                    <td className="p-2 border-r">
                        <input
                        type="number"
                        value={item.stock}
                        onChange={(e) =>
                            handleInputChange(item.id, 'stock', +e.target.value)
                        }
                        className="w-full p-1 border"
                        />
                    </td>
                    <td className="p-2 border-r">
                        <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                            handleInputChange(item.id, 'quantity', +e.target.value)
                        }
                        className="w-full p-1 border"
                        />
                    </td>
                    <td className="p-2 border-r">
                        <input
                        type="number"
                        value={item.manufacturerPrice}
                        onChange={(e) =>
                            handleInputChange(
                            item.id,
                            'manufacturerPrice',
                            +e.target.value
                            )
                        }
                        className="w-full p-1 border"
                        />
                    </td>
                    <td className="p-2 border-r">{item.total}</td>
                    <td className="p-2">
                        <button
                        onClick={() => handleRemoveRow(item.id)}
                        className="p-1 text-white bg-red-500"
                        >
                        Remove
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
                {/* Grand Total Row */}
                <tfoot>
                    <tr className="bg-gray-50">
                        <td className="p-2" colSpan={6}>
                        Grand Total:
                        </td>
                        <td className="p-2">{grandTotal}</td>
                        <td className="p-2">
                        <button
                            onClick={handleAddRow}
                            className="p-1 px-5 text-white bg-green-500 rounded-md"
                        >
                            +
                        </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
            </div>
            </div>
        </div>
        </div>
    );
};

export default YourComponent;
