import React from 'react'
import Image from 'next/image'
import { BookDashboardCards } from '@/interfaces'



const BookDashboardCard = ({image, heading, results}: BookDashboardCards) => {
  return (
    <div className='rounded-xl shadow px-6 py-3'>
        <div className='flex flex-row items-center justify-center gap-x-5'>
            <div className='size-10'>
                <Image src={image} alt='heading' className='w-full h-full object-contain' />
            </div>

            <div>
                <h1 className='text-sm mb-1'>{heading}</h1>
                <p className='font-semibold text-2xl'>{results}</p>
            </div>
        </div>
    </div>
  )
}

export default BookDashboardCard