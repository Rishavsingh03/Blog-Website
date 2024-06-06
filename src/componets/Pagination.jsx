import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {
    const {page,handlePageChange,totalPages}=useContext(AppContext);
  return (
    <div className='w-full h-12  flex  justify-center items-center bg-white fixed bottom-0 border'>
       <div  className='w-11/12 max-w-[650px] flex gap-x-4 p-8 jusify-between'>
         { page>1 && 
            <button className='border  px-4 py-1 rounded-md' onClick={()=>{
                handlePageChange(page-1);
            }}>Previous</button>
         }
         {
            page<totalPages && <button className='border px-4 py-1 rounded-md' onClick={()=>{
                handlePageChange(page+1);
            }}>Next</button>
         }
       </div>
       <p>
        Page {page} of {totalPages}
       </p>
        
    </div>
  )
}

export default Pagination