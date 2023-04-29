import React from 'react'
import Image from 'next/image';

const AboutImg = () => {
  return (
    <div className='relative'>
      <div className=" absolute -inset-1 bg-yellow-200 blur-3xl h-60 w-60 mt-8 ml-10"></div>
      <Image
        className='relative mb-6'
        src="/About.png"
        alt="biglogo"
        width={500}
        height={500}
      />

    </div>
  )
}

export default AboutImg