import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


const Row = () => {
    return (
        <div className='flex justify-between px-2 mb-2'>
            <select
                id="product"
                className='w-[27vw] border border-gray-300 rounded-md px-2 py-1'
            >
                <option value="" disabled hidden>Product</option>
                <option value="Servicing">Servicing</option>
                <option value="Replace">Replace</option>
                <option value="Upgrade">Upgrade</option>
            </select>
            <Input type='number' className='w-[15vw]' placeholder='Quantity' />
            <Button className='bg-blue-700'>Serial Number</Button>
        </div>
    )
}

export default Row