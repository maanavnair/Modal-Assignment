import React from 'react'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const UsageReason = () => {
    return (
        <div className='mb-4 flex justify-between'>

            <Input type="text" name="usage" placeholder="Usage" className='w-[30vw]' />

            <Select>
                <SelectTrigger className='w-[27vw]'>
                    <SelectValue placeholder='Product' />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="servicing">Servicing</SelectItem>
                        <SelectItem value="Replace">Replace</SelectItem>
                        <SelectItem value="upgrade">Upgrade</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
export default UsageReason