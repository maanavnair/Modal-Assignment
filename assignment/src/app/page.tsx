"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import Row from "@/customComponents/row"
import UsageReason from "@/customComponents/usageReason"

export default function Home() {

  const [count, setCount] = useState<number>(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
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
                <Label htmlFor="AdminId">Admin/ID</Label>
                <Input type="text" name="AdminId" placeholder="Admin/ID" className="w-[15vw] mb-10" />
              </span>
              <span className="w-full">
                {Array.from({ length: count }, (_, index) => (
                  <Row key={index} />
                ))}
                <span className="w-full flex flex-row-reverse">
                  <Button variant='outline'
                    className="border-none mt-2"
                    onClick={(e) => setCount((prev) => prev + 1)}
                  >
                    +Add more
                  </Button>
                </span>
              </span>

              <UsageReason />

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
            <Button className="w-[10vw] bg-blue-800">
              Check In
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
