import React from 'react'
import Image from 'next/image'
import { BookDashboardCards } from '@/interfaces'



const BookDashboardCard = ({image, heading, results}: BookDashboardCards) => {
  return (
    <div className='rounded-xl shadow p-6'>
        <div className='flex flex-row items-center justify-center gap-x-10'>
            <div className='size-22'>
                <Image src={image} alt='heading' className='w-full h-full object-contain' />
            </div>

            <div>
                <h1 className='font-semibold text-2xl mb-3'>{heading}</h1>
                <p className='text-3xl'>{results}</p>
            </div>
        </div>
    </div>
  )
}

export default BookDashboardCard