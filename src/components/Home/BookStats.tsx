import React from 'react'
import BookDashboardCard from './BookDashboardCard'
import { images } from '@/constants/Book_Icons';

interface Results{
    results: string;
    copies: string;
}
const BookStats = ({results, copies}: Results) => {
  return (
    <div className='flex flex-row justify-between items-center'>
        <BookDashboardCard  image={images.Book} heading='Total Books' results={results}/>
        <BookDashboardCard  image={images.Library} heading='Total Book Copies' results={copies}/>
        <BookDashboardCard  image={images.Book} heading='Available Copies' results={copies}/>
    </div>
  )
}

export default BookStats