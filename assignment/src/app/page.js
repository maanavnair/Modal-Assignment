"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import Row from "@/customs/row"
import Usage from "@/customs/usage"

export default function Home() {

  const initialState = {
    admin: "",
    usage: "",
    reason: "",
    serial: [{
      product: "",
      quantity: 0
    }]
  }

  const [formData, setFormData] = useState(initialState);


  const onInputChange = (e) => {
    setFormData((data) => ({...data, [e.target.id]: e.target.value}))
  }

  const handleAddRow = () => {
    setFormData((prevState) => ({
      ...prevState,
      serial: [...prevState.serial, { product: '', quantity: 0 }],
    }));
  };

  const setRowData = (index, updatedProduct, updatedQuantity) => {
    setFormData((prevState) => ({
      ...prevState,
      serial: prevState.serial.map((item, i) =>
        i === index ? { product: updatedProduct, quantity: updatedQuantity } : item
      ),
    }));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Click!</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[90vw] sm:min-h-[70vh]">
          <DialogHeader>
            <DialogTitle className="font-semibold text-xl">
              Check In/Check Out
            </DialogTitle>
          </DialogHeader>
          <div>
            <div className="w-[60vw]">
              <span>
                <Label htmlFor="admin">Admin/ID</Label>
                <Input
                  type="text" 
                  id="admin"
                  placeholder="Admin/ID"
                  className="w-[15vw] mb-10"
                  value={formData.admin}
                  onChange={(e) => onInputChange(e)}
                />
              </span>


              <span className="w-full">
                {formData.serial.map((row, index) => (
                  <Row
                    key={index}
                    index={index}
                    formData={row}
                    setRowData={setRowData}
                    onInputChange={onInputChange}
                  />
                ))}
                <span className="w-full flex flex-row-reverse">
                  <Button variant="outline" className="border-none mt-2" onClick={handleAddRow}>
                    +Add more
                  </Button>
                </span>
              </span>


              <Usage formData = {formData} onInputChange = {onInputChange} />

              <div>
                <h1>Description</h1>
                <div className="border-2 rounded-md px-2 py-4">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ratione, debitis, fugit magni itaque maiores ad consequatur at est illum porro. Tempore doloribus itaque incidunt atque ea? Autem laboriosam ex vero deleniti dolores corporis saepe suscipit ipsum molestias voluptate, veritatis ab praesentium inventore nihil libero repudiandae blanditiis porro accusamus explicabo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row-reverse">
            <Button className="w-[10vw] bg-blue-800"
              onClick={() => console.log(formData)}
            >
              Check In
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
