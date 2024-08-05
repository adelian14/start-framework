import React from 'react'
import Title from './Title'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Notfound() {
  return (
    <>
      <Navbar/>
      <div className='min-h-[75vh] flex justify-center items-center'>
        <Title text={'This page is not found'} color={'red-500'} icon={'close'} />
      </div>
      <Footer/>
    </>
  )
}
