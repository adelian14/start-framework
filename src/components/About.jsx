import React from 'react'
import Title from './Title'

export default function About() {
  return (
    <>
      <div className='bg-[#1ABC9C] min-h-[85vh] flex flex-col justify-center items-center'>
        <Title text={'About Component'} color={'white'} />
        <div className='text-white flex justify-center items-center'>
          <p className='md:w-1/3 px-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusamus totam minima ea molestias laudantium amet consectetur esse veniam odit!</p>
          <p className='md:w-1/3 px-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ex ducimus cupiditate similique asperiores aspernatur enim perferendis quas error doloremque.</p>
        </div>
      </div>
    </>
  )
}
