"use client"
import React, { useEffect, useRef } from 'react'
import {useScroll, motion} from 'framer-motion'

function Paragraph({value}:{value:string}) {
      const element=useRef(null);
      const {scrollYProgress}=useScroll({
            target: element,
            offset: ['start 0.9', 'start 0.25']
      })

      useEffect(()=>{
            scrollYProgress.on("change", e=>console.log(e))
      })
  return (
    <motion.p
    ref={element}
    style={{opacity: scrollYProgress}}
    className='text-5xl  px-8 text-white font-serif font-bold max-w-[1000px] leading-tight'
    >{value}</motion.p>
  )
}

export default Paragraph