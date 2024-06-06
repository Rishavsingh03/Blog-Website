import React from 'react'
import './Spinner.css'
function Spinner() {
  return (
    <div className='h-screen w-11/12 max-w-[650px] flex justify-center items-center'>
       <div className='custom-loader'></div>
    </div>
   
  )
}

export default Spinner;