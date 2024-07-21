"use client"

import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { ThreeDCardDemo } from './image'
import Lines from "@/public/Lines2.png";
import Image from 'next/image'
const Hero = () => {
  return (
    <>
    <div className="pl-4 absolute ">
        <Image
          style={{ borderRadius: "2rem" }}
          className="scale-125 "
          src={Lines}
          width={200}
          height={200}
          alt="Picture of the author"
        />
      </div>
    <div id='/' className="w-full md:flex items-center justify-center mt-1">
    <section className=" section md:flex-1 w-3/5 pl-20 pt-10  ">
        <div className='text-3xl font-bold'>
         <p className=' text-custom-teal pl-5 pb-2 text-shadow-DEFAULT shadow-custom-sage' style={{fontSize:"2em"}}> 
            Hello,</p>
            </div>
         <div className='text-3xl font-bold text-custom-teal pl-5 pb-5 leading-normal  text-shadow-DEFAULT shadow-custom-sage'>
    <TypeAnimation
      sequence={[
         `${"I'm Piyush Mishra."}`,
         1000,
         `${"I'm a Full Stack Dev."}`,
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block'}}
      repeat={Infinity}
    />
    </div>
    </section>
    <section className="section  md:px-16 flex items-center justify-center">
    <ThreeDCardDemo/>
    </section>
    
  </div>
  </>
  )
}

export default Hero