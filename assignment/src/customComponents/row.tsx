import React from 'react'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'

const Row = () => {
    return (
        <div className='flex justify-between px-2 mb-2'>
            <Select>
                <SelectTrigger className='w-[30vw]'>
                    <SelectValue placeholder='Product' />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="motorpbs">Motor PBC</SelectItem>
                        <SelectItem value="milkanalyser">Milk Analyser</SelectItem>
                        <SelectItem value="waterpurifier">Water Purifier</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Input type='number' className='w-[15vw]' placeholder='Quantity' />
            <Button className='bg-blue-700'>Serial Number</Button>
        </div>
    )
}

export default Row