import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  let [navVisivle,setNavVisivle] = useState(false);
  function handleNav() {
    setNavVisivle(!navVisivle);
  }
  return (
    <nav className='bg-slate-700 text-white md:flex justify-between items-center lg:px-44 md:px-14 px-6 py-9 relative'>
      <div>
        <h1 className='lg:text-3xl text-xl font-bold uppercase'><Link to={'/start-framework'}>Start Framework</Link></h1>
      </div>
      <div>
        <ul className={`${navVisivle?'flex':'hidden'} md:flex justify-between md:gap-10 gap-4 md:flex-row flex-col mt-5 md:mt-0`}>
          <li className='lg:text-lg uppercase font-medium'><NavLink to={'/start-framework/about'}>About</NavLink></li>
          <li className='lg:text-lg uppercase font-medium'><NavLink to={'/start-framework/portfolio'}>Portfolio</NavLink></li>
          <li className='lg:text-lg uppercase font-medium'><NavLink to={'/start-framework/contact'}>Contact</NavLink></li>
        </ul>
      </div>
      <div className='absolute right-16 text-2xl cursor-pointer md:hidden top-9' onClick={handleNav}><i className={`fas ${navVisivle?'fa-close':'fa-bars'}`}></i></div>
    </nav>
  )
}
