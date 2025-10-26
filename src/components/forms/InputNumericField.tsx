import { useField } from "formik";
import { Field, ErrorMessage } from "formik"
import React, { InputHTMLAttributes } from "react"

interface FormikInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  placeholder?: string
}

export default function InputNumericField({ name, label, placeholder, ...props }: FormikInputProps) {
  const [field, meta, helpers] = useField(name)

  return (
    <div className="flex flex-col relative pb-6 text-black">
      <label htmlFor={name} className="font-medium text-sm">
        {label}
      </label>

      <input
        {...field}
        {...props}
        id={name}
        placeholder={placeholder}
        spellCheck={false}
        onChange={(e) => helpers.setValue(e.target.value.replace(/\D/g, ""))}
        className={`text-base lg:text-sm px-2 py-2 outline-none rounded-lg mt-2 border-2 border-gray-400 focus:border-blue-500 ${meta.touched && meta.error ? "border-red-600" : ""}`}
      />

      {meta.touched && meta.error && <p className="text-red-500 absolute bottom-0 left-1 text-xs tracking-wide">{meta.error}</p>}
    </div>
  )
}
