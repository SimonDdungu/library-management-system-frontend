"use client"
import { Formik, Form } from "formik"
import AddBookValidation from "./AddBookValidation"
import InputField from "../forms/InputField"

const initialValues = {
  title: "",
  author: "",
  publishYear: "",
  isbn: "",
}

import React from 'react'

const AddBookForm = () => {
  return (
    <div>
         <Formik initialValues={initialValues} validationSchema={AddBookValidation} onSubmit={() => console.log()}>
            {({  }) => (
            <Form className="space-y-2">
            <InputField name="title" label="Title" placeholder="Lion" />
            <InputField name="author" label="Author" placeholder="Harry Maguire" />
            <InputField name="publishYear" label="Publish Year" placeholder="2023" />
            <InputField name="isbn" label="ISBN" placeholder="Enter ISBN Number" />

            <button type="submit" className="px-5 py-2 bg-black text-white rounded-2xl mt-5">
                Add Book
            </button>
            </Form>
        )}
    </Formik>
    </div>
  )
}

export default AddBookForm