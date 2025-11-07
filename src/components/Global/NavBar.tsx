"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from "@/assets/logo/logo-cropped.png"
import SearchInputField from '../forms/SearchInputField'
import { Avatar } from 'primereact/avatar'

const NavBar = () => {
    const [searchQuery, setSearchQuery] = useState<string>("")

  return (
    <div className='flex flex-row px-10 py-4 shadow  items-center'>
        <div className='flex flex-row gap-x-4 items-center'>
            <div className='size-14'>
                <Image src={Logo} alt='Booktopia logo' className='w-full h-full object-contain'/>
            </div>
            <span className='block font-semibold capitalize'>
                Booktopia Library Management System
            </span>
        </div>

            <SearchInputField name='search' placeholder='Search for Books, Authors, Members....' setOnChange={setSearchQuery}/>


        <div>
            <div className="flex items-center gap-x-2">
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                <span className="font-bold text-bluegray-50 block">Admin</span>
            </div>
        </div>
    </div>
  )
}

export default NavBar