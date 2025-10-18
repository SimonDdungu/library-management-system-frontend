import React from 'react'
import BookDashboardCard from './BookDashboardCard'
import Book from "@/assets/svgs/Book.svg"

interface Results{
    results: string;
    copies: string;
}
const BookStats = ({results, copies}: Results) => {
  return (
    <div className='flex flex-row justify-between items-center'>
        <BookDashboardCard  image={Book} heading='Total Book Copies' results={copies}/>
        <BookDashboardCard  image={Book} heading='Total Books' results={results}/>
        <BookDashboardCard  image={Book} heading='Total Books' results={results}/>
    </div>
  )
}

export default BookStats