import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner  from './Spinner';
import Cards from './Cards';
function Blogs() {
    const {loading,posts}=useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[650px] flex flex-col gap-y-7 py-8 mt-[60px] mb-12'>
        {
            loading ? (<Spinner/>):(
                posts.length===0?(<div>
                    NO Post Found
                </div>):
                 (posts.map((post)=>{
                    return <Cards key={post.id} prop={post} />
                }))
            )
        }
    </div>
  )
}

export default Blogs