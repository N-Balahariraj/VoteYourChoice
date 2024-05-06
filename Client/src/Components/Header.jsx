// Libraries
import React from 'react'
// import {Link} from 'react-router-dom'

// Icons
import { RiSearchLine } from "react-icons/ri";

export default function Header() {
  return (
    <header className='header'>
        <form action="#" className='w-[50%] h-[60%] flex items-center justify-around border-2 border-[#f5f5f6] rounded-lg'>
          <RiSearchLine className='text-[#bec3cb] text-xl'/>
          <input type="text" placeholder='Search events ...' className='h-[100%] w-[90%] outline-none'/>
        </form>
        <nav className='w-[35%] h-[100%] flex items-center justify-around'>
          <a href="#" className='hover:text-[#4f46e5]'>Community</a>
          <a href="#" className='hover:text-[#4f46e5]'>Support</a>
          <button className='w-[33%] h-[65%] text-[white] bg-[#4f46e5] hover:bg-[#655ee7] rounded-lg p-1'>+ New event</button>
        </nav>
    </header>
  )
}
