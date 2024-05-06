import React from 'react'

export default function Person({id,name,profilePic,mail}) {
  return (
    <div className='h-[15%] w-[90%] flex gap-2 border-b-2 p-2 cursor-pointer'>
      <img src={profilePic} alt="profile" className='h-[100%] border-2 rounded-full' />
      <div className='h-[100%] w-[60%] flex flex-col'>
        <span className='font-semibold'>{name}</span>
        <span className='text-[#4f46e5]'>{mail}</span>
      </div>
    </div>
  )
}
