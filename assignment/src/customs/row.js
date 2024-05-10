import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


const Row = ({ index, formData, setRowData, onInputChange }) => {

    const handleProductChange = (e) => {
        const { value } = e.target;
        setRowData(index, value, formData.quantity);
      };
      
      const handleQuantityChange = (e) => {
        const { value } = e.target;
        setRowData(index, formData.product, value);
      };


    return (
        <div className='flex justify-between px-2 mb-2'>
            <select
                id={`product-${index}`}
                className='w-[27vw] border border-gray-300 rounded-md px-2 py-1'
                value={formData.product}
                onChange={handleProductChange}
            >
                <option value="" disabled hidden>Product</option>
                <option value="Motor PBC">Motor PBC</option>
                <option value="Milk Analyser">Milk Analyser</option>
                <option value="Water Purifier">Water Purifier</option>
            </select>
            <Input 
                type='number' 
                className='w-[15vw]' 
                placeholder='Quantity' 
                value={formData.quantity}
                onChange={handleQuantityChange}
            />
            <Button className='bg-blue-700'>
                Serial Number
            </Button>
        </div>
    )
}

export default Row
