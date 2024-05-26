// Libraries
import React from 'react'
// import {Link} from 'react-router-dom'

// Icons
import { RiSearchLine } from "react-icons/ri";

export default function Header() {
  return (
    <header className='header'>
        <form action="#" className='SearchBar'>
          <RiSearchLine className='text-[#bec3cb] text-xl'/>
          <input type="text" placeholder='Search events ...' className='h-[100%] w-[90%] outline-none'/>
        </form>
        <nav className='HeadNav'>
          <a href="#" className='hover:text-[#4f46e5]'>Community</a>
          <a href="#" className='hover:text-[#4f46e5]'>Support</a>
          <button className='w-[40%] h-[65%] text-[white] bg-[#4f46e5] hover:bg-[#655ee7] rounded-lg p-1'>+ New event</button>
        </nav>
    </header>
  )
}
