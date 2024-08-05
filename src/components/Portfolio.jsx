import React from 'react'
import Title from './Title'
import Image from './Image'
import img1 from '../assets/port1.png'
import img2 from '../assets/port2.png'
import img3 from '../assets/port3.png'
export default function Portfolio() {
  return (
    <>
      <div className='min-h-[85vh] flex flex-col items-center'>
        <Title text={'portfolio component'} color={'slate-700'}/>
        <div className='flex flex-wrap md:px-8 lg:px-14 px-3 pb-5'>
          <Image pic={img1} />
          <Image pic={img2} />
          <Image pic={img3} />
          <Image pic={img2} />
          <Image pic={img3} />
          <Image pic={img1} />
        </div>
      </div>
    </>
  )
}
