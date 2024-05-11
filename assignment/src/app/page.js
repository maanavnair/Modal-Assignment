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
import Menu from "@/customs/menu"

export default function Home() {

  const initialState = {
    admin: "",
    usage: "",
    reason: "",
    serial: [{
      product: "",
      quantity: 0,
      menu: []
    }]
  }

  const [formData, setFormData] = useState(initialState);
  const [toggleMenu, setToggleMenu] = useState({
    quantity: 0,
    toggle: false,
    index: -1
  });

  const [productsList, setProductsList] = useState([]);


  //fucntion to change handle the input (admin, usage, reason)
  const onInputChange = (e) => {
    setFormData((data) => ({...data, [e.target.id]: e.target.value}))
  }

  //function to add new row
  const handleAddRow = () => {
    setFormData((prevState) => ({
      ...prevState,
      serial: [...prevState.serial, { product: '', quantity: 0, menu: [] }],
    }));
  };

  //function to set the data for each row(product, quantity)
  const setRowData = (index, updatedProduct, updatedQuantity) => {
    setFormData((prevState) => ({
      ...prevState,
      serial: prevState.serial.map((item, i) =>
        i === index ? { product: updatedProduct, quantity: updatedQuantity } : item
      ),
    }));
  };

  //function to make changes when serial number button is clicked
  const handleClick = (index, quantity) => {
    if(toggleMenu.toggle === true){
      index = -1
    }
    setToggleMenu((prev) => ({...prev, toggle: !prev.toggle, quantity: quantity, index: index}))
  }

  //updating the formData when the input from menu is given
  const onUpdateFormData = (menuInputs) => {
    const updatedSerial = formData.serial.map((item, index) =>
        index === toggleMenu.index ? { ...item, menu: menuInputs } : item
    );
    setFormData((prevState) => ({
        ...prevState,
        serial: updatedSerial,
    }));

    setToggleMenu(false);
    setProductsList((prevList) => [...prevList, { product: formData.serial[toggleMenu.index].product, menu: menuInputs }]);
};

const handleDelete = (product, index) => {
  setFormData((prevState) => ({
    ...prevState,
    serial: prevState.serial.map((item, i) =>
      product === item.product ? { ...item, menu: [] } : item
    ),
  }));

  setProductsList((prevList) => prevList.filter((_, i) => i !== index));
};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Click!</Button>
        </DialogTrigger>
        <DialogContent className="sm:min-w-[90vw] sm:min-h-[70vh]">
          <DialogHeader>
            <DialogTitle className="font-semibold text-xl">
              Check In/Check Out
            </DialogTitle>
          </DialogHeader>
          <div className="flex">
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
                    handleClick={handleClick}
                    toggleMenu={toggleMenu}
                    productsList={productsList}
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

            <div className="flex flex-col">
            <div className="max-h-[20vh] overflow-y-auto">
              <ul>
                {productsList.map((product, index) => (
                  <li key={index} className="text-sm flex justify-between w-[20vw] mb-1 ml-7">
                    {product.product}{" "}
                      <Button 
                        onClick={() => handleDelete(product.product, index)}
                        className='h-[3vh]'
                      >
                        Delete
                      </Button>
                  </li>
                ))}
              </ul>
            </div>

            {toggleMenu.toggle &&
              <div className="px-2 py-2 border-2 ml-2 rounded-md w-[25vw]">
                <Menu 
                  quantity={toggleMenu.quantity}
                  onUpdateFormData={onUpdateFormData}
                />
              </div>
            }
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