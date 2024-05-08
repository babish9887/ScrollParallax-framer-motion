"use client"
import React, { useEffect, useRef } from 'react'
import {useScroll, motion, useTransform} from 'framer-motion'

function Character({value}:{value:string}) {
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
      const characters=children.split("");
      const amount=range[1]-range[0];
      const step=amount/children.length;
      return (
            <span className='mr-[12px] mt-[12px]'>
            {
                  characters.map((c:any, i:number)=>{
                        const start=range[0]+(step*i);
                        const end=range[0]+ (step*(i+1));
                        return <SingleCharacter key={i} character={c} progress={progress} range={[start,end]}/>
                  })
            }
            </span>
      )
}

const SingleCharacter=({character, progress, range}:any)=>{
      const opacity=useTransform(progress, range, [0,1])
      return (
            <span>
            <span className='absolute opacity-30'>{character}</span>      
            <motion.span
            style={{opacity}}
            >{character}</motion.span>
            </span>
      )
}

export default Character