import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Menu = ({ quantity, onUpdateFormData }) => {

    const [serialNumbers, setSerialNumbers] = useState(Array.from({ length: quantity }, () => ''));

    //handling the input change in the menu
    const handleInputChange = (index, value) => {
        setSerialNumbers((prevSerialNumbers) => {
            const newSerialNumbers = [...prevSerialNumbers];
            newSerialNumbers[index] = value;
            return newSerialNumbers;
        });
    };

    return (
        <div className='flex flex-col overflow-y-auto max-h-[50vh]'>
            {Array.from({ length: quantity }, (_, index) => (
                <div key={index} className="flex items-center justify-around">
                    <p>{index + 1}.</p>
                    <Input
                        type="text"
                        placeholder="Serial Number"
                        className="w-[20vw] mb-1"
                        value={serialNumbers[index]}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                </div>
            ))}
            <Button onClick={() => onUpdateFormData(serialNumbers)}>
              Confirm
            </Button>
        </div>
    );
};

export default Menu;
