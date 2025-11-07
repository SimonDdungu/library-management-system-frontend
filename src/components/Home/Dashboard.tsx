import React from 'react'
import BookTable2 from '../Table/BookTable2'
import AddBook from './AddBook'
import BookTable from '../Table/BookTable'
import Header from './Header'

const Dashboard = () => {
  return (
    <div className='pb-16 pt-8 px-4'>
        <Header />
        <BookTable2 />
    </div>
  )
}

export default Dashboard