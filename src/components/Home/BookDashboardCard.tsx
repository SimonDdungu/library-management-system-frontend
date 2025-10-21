import React from 'react'
import Image from 'next/image'
import { BookDashboardCards } from '@/interfaces'



const BookDashboardCard = ({image, heading, results}: BookDashboardCards) => {
  return (
    <div className='rounded-xl shadow px-6 py-4'>
        <div className='flex flex-row items-center justify-center gap-x-5'>
            <div className='size-12'>
                <Image src={image} alt='heading' className='w-full h-full object-contain' />
            </div>

            <div>
                <h1 className='text-lg mb-1'>{heading}</h1>
                <p className='font-semibold text-3xl'>{results}</p>
            </div>
        </div>
    </div>
  )
}

export default BookDashboardCard