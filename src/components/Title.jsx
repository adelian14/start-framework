import React from 'react'

export default function Title({text,color,icon}) {
  return (
    <div className='flex flex-col justify-center items-center py-5'>
      <p className='hidden text-white'></p>
      <p className='hidden text-slate-700 bg-white'></p>
      <p className='hidden text-red-500 bg-red-500'></p>
      <h1 className={`text-${color} text-4xl uppercase font-bold text-center`}>{text}</h1>
      <div className='flex justify-center items-center mt-3'>
        <span className={`bg-${color} w-32 mx-3 h-1`}></span>
        <i className={`fas fa-${icon?icon:'star'} text-${color}`}></i>
        <span className={`bg-${color} w-32 mx-3 h-1`}></span>
      </div>
    </div>
  )
}
