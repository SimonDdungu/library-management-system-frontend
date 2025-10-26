import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog';
import { Formik, Form, FormikHelpers } from "formik"
import AddBookValidation from "./AddBookValidation"
import { InputField, InputNumericField } from "../forms"
import { BookinitialValues } from "@/interfaces"
import { BookAttributes } from '@/interfaces';
import axios from 'axios'
import { config } from '@/config/env'
import LoadingSpinners from '../Global/LoadingSpinner'
import { refetchData } from '@/interfaces';


const AddBook = ({triggerRefetch}: refetchData) => {

   const [showDialog, setShowDialog] = useState(false);

    const [loading, setLoading] = useState<boolean>(false)
    const api = config.api

    const handleSubmit = async(values: BookAttributes, actions: FormikHelpers<BookAttributes>) => {
      setLoading(true)
      try {

        const publish_year = parseInt(String(values.published_year), 10)

        const validData = {
          title: values.title,
          author: values.author,
          publish_year: publish_year,
          isbn: values.isbn
        }
        
        await axios.post(`${api}/books/create/`, validData);

        actions.resetForm()
        setShowDialog(false)
        triggerRefetch()
      } catch (error: any) {
         console.log("Axios error caught:", error);
      }finally{
        setLoading(false)
      }
    }

  return (
    <div>

        {loading && <LoadingSpinners />}

        <button onClick={() => setShowDialog(true)} className="text-xs md:text-sm flex items-center gap-x-2 bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition w-max cursor-pointer">
            <i className="pi pi-plus  md:text-sm text-xs"></i>
            <span>Add Book</span>
        </button>

        <Dialog
            header="Add New Book"
            visible={showDialog}
            className='w-[90vw] md:w-120'
            modal
            onHide={() => setShowDialog(false)}
        >
             <div>
         <Formik initialValues={BookinitialValues} validationSchema={AddBookValidation} onSubmit={handleSubmit}>
            {({  }) => (
            <Form className="space-y-2">
            <InputField name="title" label="Title" placeholder="Lion" />
            <InputField name="author" label="Author" placeholder="Harry Maguire" />
            <InputNumericField name="published_year" label="Publish Year" placeholder="2023" />
            <InputField name="isbn" label="ISBN" placeholder="Enter ISBN Number" />

            <div className="flex flex-row gap-x-3">
                <button type="submit" className="px-5 py-2 bg-green-700 text-white rounded-2xl mt-2 hover:bg-green-800 transition-colors cursor-pointer">
                    Add Book
                </button>

                <div className="px-5 py-2 text-green-700 rounded-2xl mt-2 cursor-pointer" onClick={() => setShowDialog(false)}>
                    Cancel
                </div>
            </div>
            </Form>
        )}
    </Formik>
    </div>
      </Dialog>
    </div>
  )
}

export default AddBook