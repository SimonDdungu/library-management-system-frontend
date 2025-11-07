import { useField } from "formik";
import React, { ChangeEvent, InputHTMLAttributes, useCallback } from "react"

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  setOnChange: (query: string) => void
  placeholder?: string
}

export default function SearchInputField({name, setOnChange, placeholder, ...props }: SearchInputProps) {

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setOnChange(e.target.value)     
  }, [setOnChange])

  return (
    <div className="flex flex-row items-center pl-3 min-w-100 mx-auto relative text-black border border-gray-500 rounded-lg">
      <div className="text-gray-500">
        <i className="pi pi-search"></i>
      </div>

      <input
        id={name}
        name={name}
        placeholder={placeholder}
        spellCheck={false}
        className={`text-base lg:text-sm px-2 py-2 outline-none w-full`}
        {...props}
        onChange={handleChange}
      />

    </div>
  )
}

