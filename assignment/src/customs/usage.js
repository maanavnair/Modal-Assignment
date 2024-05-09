import React from 'react'
import { Input } from '@/components/ui/input'

const Usage = ({ formData, onInputChange }) => {
    return (
        <div className='mb-4 flex justify-between'>

            <Input
                type="text"
                id="usage"
                placeholder="Usage"
                className='w-[30vw]'
                value={formData.usage}
                onChange={(e) => onInputChange(e)}
            />
            <select
                id="reason"
                className='w-[27vw] border border-gray-300 rounded-md px-2 py-1'
                value={formData.reason}
                onChange={(e) => onInputChange(e)}
            >
                <option value="" disabled hidden>Reason</option>
                <option value="Servicing">Servicing</option>
                <option value="Replace">Replace</option>
                <option value="Upgrade">Upgrade</option>
            </select>
        </div>
    )
}

export default Usage