import React, { useState } from 'react'

export default function State() {
    const[count,setcount]=useState(0)
  return (
    <div className=' space-y-6'>
        <h1 className='text-[3rem] text-center '>{count} </h1>
      <button onClick={()=> setcount(count+1)} className='bg-blue-500 py-2 px-7 text-white mx-[37rem] rounded '>Increase</button>
      <button onClick={()=> setcount(count>0 ?count-1:count)} className='bg-blue-500 py-2 px-7 text-white mx-[37rem] rounded '>Decrease</button>
      <button onClick={()=> setcount(0)} className='bg-blue-500 py-2 px-7 text-white mx-[37rem] rounded '>Reset</button>
    </div>
  )
}
