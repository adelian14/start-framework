import React from 'react'
import Title from './Title'

export default function Notfound() {
  return (
    <>
      <div className='min-h-[75vh] flex justify-center items-center'>
        <Title text={'This page is not found'} color={'red-500'} icon={'close'} />
      </div>
    </>
  )
}
