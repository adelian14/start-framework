import React from 'react'
import Title from './Title'
import InputTemp from './InputTemp'

export default function Contact() {
  return (
    <>
      <div className='min-h-[85vh] flex flex-col items-center'>
        <Title text={'contact component'} color={'slate-700'} />
        <div className='w-5/12 mt-5'>
          <InputTemp text={"User Name"} inputType={'text'} idx={'userName'} />
          <InputTemp text={"Age"} inputType={'text'} idx={'userAge'} />
          <InputTemp text={"Email"} inputType={'email'} idx={'userEmail'} />
          <InputTemp text={"Password"} inputType={'password'} idx={'userPassword'} />
          <p className='px-5 py-2 bg-[#1ABC9C] text-white rounded-md w-48 cursor-pointer active:scale-[.97] font-medium tracking-wide duration-200 text-center'>Send Message</p>
        </div>
      </div>
    </>
  )
}
