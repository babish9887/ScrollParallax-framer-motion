"use client"
import React, { useEffect, useRef } from 'react'
import {useScroll, motion, useTransform} from 'framer-motion'

function Word({value}:{value:string}) {
      const element=useRef(null);
      const {scrollYProgress}=useScroll({
            target: element,
            offset: ['start 0.8', 'start 0.2']
      })
      const words=value.split(" ");
  return (
    <div
    ref={element}
    className='paragraph flex flex-wrap'>
      {
            words.map((word, i)=>{
                  const start=i/words.length;
                  const end=start + (1/words.length)
                  console.log(start, end);
                  return <SingleWord key={i} range={[start, end]} progress={scrollYProgress}>{word}</SingleWord>
            })
      }
    </div>
  )
}

const SingleWord=({children, range, progress}:any)=>{
      const opacity=useTransform(progress, range, [0,1])
      return (
            <span className='mr-[12px] mt-[12px]'>
            <span className='absolute opacity-40'>{children}</span>
            <motion.span
            style={{opacity}}>{children}</motion.span>
            </span>
      )
}

export default Word