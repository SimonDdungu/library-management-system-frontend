"use client"
import React, { useRef, useState } from 'react'
import { OverlayPanel } from 'primereact/overlaypanel';
import { BookAttributes, EditBooks } from '@/interfaces';
import { Dialog } from 'primereact/dialog';
import { AddBookValidation } from '@/validations';
import { Formik, Form } from 'formik';
import { InputField, InputNumericField } from '@/components/forms';
import { confirmDialog } from 'primereact/confirmdialog';

interface BookTableActionButton {
    rowIndex: number;
    rowData: any
}

const ActionButton = ({rowIndex, rowData}: BookTableActionButton) => {
    const op =  useRef<OverlayPanel>(null);
     const [showDialog1, setShowDialog1] = useState(false);
     const [showDialog2, setShowDialog2] = useState(false);

    const deleteResult = () => {
        //setResults((prev: BookAttributes[]) => prev.filter((_, i) => i !== rowIndex));
    };

    const deleteDialog = () => {
            op.current?.hide();
            confirmDialog({
                message: 'Are you sure you want to delete this Book?',
                header: 'Delete Results',
                icon: 'pi pi-trash',
                acceptClassName: 'p-button-danger',
                rejectClassName: 'text-gray-700 bg-white border-none',
                accept: deleteResult,
            });
            
    };

    const EditData = () => {
        setShowDialog1(true)
        op.current?.hide();
    }

    const AddIsbn = () => {
        setShowDialog2(true)
        op.current?.hide();
    }

    const handleSubmit = (values: BookAttributes) => {
           //
        };

  return (
    <div className="card flex justify-content-center">
        <button className="text-green-700 py-2" onClick={(e) => op.current?.toggle(e)} >
            <i className='pi pi-pen-to-square'></i>
        </button>

        <OverlayPanel ref={op}>
            <ul className='space-y-3 text-white text-xs md:text-sm'>
                <li className='bg-green-900 px-5 py-2 rounded-lg flex flex-row items-center cursor-pointer' onClick={() => AddIsbn()}>
                    <i className='pi pi-plus mr-2 md:text-sm text-xs'></i>
                    <span>Add ISBN</span>
                </li>
                <li className='bg-green-700 px-5 py-2 rounded-lg flex flex-row items-center cursor-pointer' onClick={() => EditData()}>
                    <i className='pi pi-pencil mr-2 md:text-sm text-xs'></i>
                    <span>Edit</span>
                </li>
                <li className='bg-red-500 px-5 py-2 rounded-lg flex flex-row items-center cursor-pointer' onClick={deleteDialog}>
                    <i className='pi pi-trash mr-2 md:text-sm text-xs'></i>
                    <span>Delete</span>
                </li>
            </ul>
         </OverlayPanel>


         


       <Dialog
                   header="Edit Book"
                   visible={showDialog1}
                   className='w-[90vw] md:w-120'
                   modal
                   onHide={() => setShowDialog1(false)}
               >
                    <div>
                <Formik initialValues={rowData} validationSchema={AddBookValidation} onSubmit={handleSubmit}>
                        {({  }) => (
                        <Form className="space-y-2">
                            <InputField name="title" label="Title" placeholder="Enter the Title of Book" />
                            <InputField name="author" label="Author" placeholder="Enter the Author of the Book" />
                            <InputNumericField name="published_year" label="Publish Year" placeholder="Enter Publish Year of the Book" />
                
                            <div className="flex flex-row gap-x-3">
                                <button type="submit" className="px-5 py-2 bg-green-700 text-white rounded-2xl mt-2 hover:bg-green-800 transition-colors cursor-pointer">
                                    Update Book
                                </button>
                
                                <div className="px-5 py-2 text-green-700 rounded-2xl mt-2 cursor-pointer" onClick={() => setShowDialog1(false)}>
                                    Cancel
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
           </div>
             </Dialog>




             <Dialog
                   header="Add ISBN"
                   visible={showDialog2}
                   className='w-[90vw] md:w-120'
                   modal
                   onHide={() => setShowDialog2(false)}
               >
                    <div>
                <Formik initialValues={rowData} validationSchema={AddBookValidation} onSubmit={handleSubmit}>
                        {({  }) => (
                        <Form className="space-y-2">
                            <InputField name="isbn" label="ISBN" placeholder="Enter New ISBN for the Book" />

                            <div className="flex flex-row gap-x-3">
                                <button type="submit" className="px-5 py-2 bg-green-700 text-white rounded-2xl mt-2 hover:bg-green-800 transition-colors cursor-pointer">
                                    Add ISBN
                                </button>
                
                                <div className="px-5 py-2 text-green-700 rounded-2xl mt-2 cursor-pointer" onClick={() => setShowDialog2(false)}>
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

export default ActionButton