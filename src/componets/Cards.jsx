import React from 'react'

function Cards(posts) {
    const prop=posts.prop;
  return (
    <div>
        <p className='text-lg font-bold'>{prop.title}</p>
        <p className='text-xs'>
            By<span className='italic'>{prop.author}</span> on <span className='underline font-bold'>{prop.category}</span>
        </p>
        <p className='text-xs'>Posted on {prop.date}</p>
        <p className='text-md mt-[5px]'>{prop.content}</p>
        <div className='flex gap-x-3 text-'>
           {prop.tags.map((tag,index)=>{
            return <span className='text-blue-700 text-xs underline ' key={index}>{`#${tag}`}</span>
           })}
        </div>
    </div>
  )
}

export default Cards