import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AddBookForm from './AddBookForm'

const AddBook = () => {
  return (
    <div>
        <Dialog>
            <DialogTrigger asChild>
                 <div className='w-max ml-auto'>
                            <button className='cursor-pointer px-5 py-2 text-white bg-black rounded-2xl'>Add Book</button>
                        </div>
            </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Add a new book to the library</DialogTitle>
                        <DialogDescription>
                            
                        </DialogDescription>

                        <AddBookForm />
                    </DialogHeader>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default AddBook