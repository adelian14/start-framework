import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='bg-slate-700 flex flex-col md:flex-row gap-y-10 flex-wrap items-center py-9 px-3 text-white'>
        <div className='text-center flex flex-col gap-y-3 md:w-1/3'>
          <h1 className='text-2xl uppercase font-semibold tracking-wide'>Location</h1>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className='md:w-1/3 flex flex-col justify-center items-center'>
          <h1 className='text-2xl uppercase font-semibold tracking-wide mb-4 text-center'>Around the web</h1>
          <div className='flex'>
            <span className='size-10 rounded-full border border-white cursor-pointer mx-2 flex justify-center items-center'><i className='fab fa-facebook-f'></i></span>
            <span className='size-10 rounded-full border border-white cursor-pointer mx-2 flex justify-center items-center'><i className='fab fa-x-twitter'></i></span>
            <span className='size-10 rounded-full border border-white cursor-pointer mx-2 flex justify-center items-center'><i className='fab fa-instagram'></i></span>
            <span className='size-10 rounded-full border border-white cursor-pointer mx-2 flex justify-center items-center'><i className='fab fa-linkedin-in'></i></span>
          </div>
        </div>
        <div className='md:w-1/3'>
          <h1 className='text-2xl uppercase font-semibold tracking-wide text-center mb-3'>ABOUT FREELANCER</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <p className='bg-slate-800 py-3 text-white text-center'>Copyright © Your Website 2024</p>
    </>
  )
}
