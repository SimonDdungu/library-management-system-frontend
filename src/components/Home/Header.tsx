import React from 'react'
import DateTime from './DateTime'

const Header = () => {
  return (
    <div className='mb-10 border-b border-black pb-2'>
        <h1 className='text-lg font-semibold mb-3'>Welcome Admin.</h1>
        <DateTime />
    </div>
  )
}

export default Header