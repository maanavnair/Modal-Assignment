import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


const Row = ({ index, formData, setRowData, handleClick, toggleMenu, productsList }) => {

    const handleProductChange = (e) => {
        const { value } = e.target;
        setRowData(index, value, formData.quantity);
      };
      
      const handleQuantityChange = (e) => {
        const { value } = e.target;
        setRowData(index, formData.product, value);
      };

      //opens/closes menu by setting toggleMenu to true/false in page.js
      const btnClick = () => {
        handleClick(index, formData.quantity)
      }

      const isProductInList = productsList.some((product) => product.product === formData.product);


    return (
        <div className='flex justify-between px-2 mb-2'>
            <select
                id={`product-${index}`}
                className='w-[27vw] border border-gray-300 rounded-md px-2 py-1'
                value={formData.product}
                onChange={handleProductChange}
                disabled={isProductInList}
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
                disabled={isProductInList}
            />
            <Button 
                className={`w-[15vw] ${toggleMenu.toggle && toggleMenu.index === index ? '' : 'bg-blue-600'}`}
                onClick={btnClick}
                disabled={toggleMenu.toggle && toggleMenu.index !== index || isProductInList}
                variant={toggleMenu.toggle && toggleMenu.index === index ? 'outline' : ''}
            >
                {toggleMenu.index === index ?
                    'Selected' : 'Serial Number'
                }
            </Button>
        </div>
    )
}

export default Row