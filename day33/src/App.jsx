import React from 'react'
import Home from './components/Home'

import { Route , Routes } from 'react-router-dom'
import Product from './components/Product'
import About from './components/About'
import Blog from './components/Blog'
import Nav from './components/Nav'
import Girl from './components/Girl'
import Boy from './components/Boy'

function App() {
  return (
  <>
  <div className='bg-black p-10'>
      <Nav/>

   <div className='text-[#C7D9E6] text-center mt-10 '>
      <Routes>
    <Route  path='/' element={<Home/>} />
    <Route  path='/Product' element={<Product/>} />
    <Route  path='/About' element={<About/>} />
    <Route  path='/Blog' element={<Blog/>} />
    <Route path='/Product/Girl' element={<Girl/>}/>
    <Route path='/Product/Boy' element={<Boy/>}/>
   </Routes>
   </div>
  </div>

  </>
  )
}

export default App