import React, { useState } from 'react'

export default function Image({ pic }) {
  let [showImg, setShowImg] = useState(false);
  function showImage(e) {
    e.stopPropagation();
    setShowImg(true);
  }
  function hideImage() {
    setShowImg(false);
  }
  return (
    <>
      <div className='md:w-1/2 lg:w-1/3 w-full px-4 py-4'>
        <div className='rounded-lg overflow-hidden relative group/item cursor-pointer' onClick={showImage}>
          <img src={pic} className='w-full' alt="" />
          <div className='absolute flex justify-center items-center top-0 bottom-0 right-0 left-0 bg-[#1ABC9C] bg-opacity-70 opacity-0 group-hover/item:opacity-100 duration-300'>
            <i className='fas fa-plus text-white text-8xl'></i>
          </div>
        </div>
      </div>
      {showImg && <div className='z-20 bg-black bg-opacity-75 fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center' onClick={hideImage}>
        <div className='md:w-2/3 lg:w-1/2 xl:w-5/12 w-full' onClick={showImage}>
          <img src={pic} alt="" />
        </div>
      </div>}
    </>
  )
}
