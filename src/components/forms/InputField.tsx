import { Field, ErrorMessage } from "formik"
import React, { InputHTMLAttributes } from "react"

interface FormikInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  placeholder?: string
}

export default function InputField({ name, label, placeholder, ...props }: FormikInputProps) {
  return (
    <div className="flex flex-col relative pb-6">
      <label htmlFor={name} className="font-medium">
        {label}
      </label>

      <Field
        id={name}
        name={name}
        placeholder={placeholder}
        className="px-2 py-2 border rounded-lg mt-2" 
        {...props}
      />

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm absolute bottom-0 left-0"
      />
    </div>
  )
}
