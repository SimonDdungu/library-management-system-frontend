import React from 'react'
import {FadeLoader} from "react-spinners"

const LoadingSpinners = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center z-20 bg-black/90 fixed top-0 left-0 right-0 bottom-0">
        <FadeLoader 
        color="#008236"
        />
    </div>
  )
}

export default LoadingSpinners