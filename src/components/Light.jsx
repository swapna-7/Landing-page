import React from 'react'
import { Spotlight } from './ui/spotlight'
import headphone from './../assets/headphone.png'

// import { motion } from 'framer-motion'
// import { Rotate3D } from 'lucide-react'
function Light() {
  return (
    <div>
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden p-24">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spotlight <br /> is the new trend.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-left ">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
       
        
        
      </div>
      
         <img src={headphone} alt="headphone" className="w-2/6 relative right-32 p-3 mt-6" />
    </div>
    </div>
  )
}

export default Light
