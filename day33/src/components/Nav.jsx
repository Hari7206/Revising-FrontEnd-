import React from 'react'
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div  className='p-10 bg-white rounded-[50px] flex justify-around text-[2rem] text-black items-center font-semibold'>
        <Link to='/' className='p-5 px-10 bg-[#BCF398] rounded-[20px]'>Home</Link>
        <Link to='/Product'>Product</Link>
        <Link to='/Blog' >Blog</Link>
        <Link to='/About' >About</Link>
        
    </div>
  )
}

export default Nav