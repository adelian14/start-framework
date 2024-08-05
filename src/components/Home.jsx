import React from 'react'
import Title from './Title'
import avatar from '../assets/avatar.svg'

export default function Home() {
  return (
    <>
      <div className='bg-[#1ABC9C] min-h-[85vh] flex flex-col justify-center items-center'>
        <div>
          <img src={avatar} className='w-3/4 m-auto'/>
        </div>
        <Title text={'Start Framework'} color={'white'} />
        <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  )
}
