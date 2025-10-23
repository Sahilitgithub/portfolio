'use client';
import ComputersCanvas from './canvas/Computers'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      {/* Hero text & hero line section */}
      <div className={`px-6 sm:px-16 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-gorw items-start gap-5`} >
        <div className="flex flex-col justify-center items-ccenter mt-5">
          <div className="w-1 h-28 top-1 rounded-full bg-gradient-to-b from-25% bg-[#f6f932] to-pink-800"/>
          <div className="w-2 sm:h-80 h-40 violet-gradient"/>
        </div>
        {/* Text part */}
        <div>
          <h1 className="text-[18px] sm:text-4xl text-white font-semibold flex gap-2">
            Hi, I{"'"}m <span className='brandName'>
            <Typewriter 
            options={{
              strings: ["FullStack Web Developer", "ReactJs Developer", "NextJs Developer", "Digital Marketer", "SEO Expert"],
              autoStart: true,
              loop: true,
              delay: 75
            }} />
            </span></h1>
          <p className={`text-[16px] sm:text-2xl mt-2 text-white`}>I develop attractive web applications</p>
        </div>          
      </div>
      {/* Computer canvas */}
      <ComputersCanvas />

      {/* Jump to section */}
      <div className='absolute xs:bottom-10 bottom-5 w-full flex justify-center items-center' >
        <Link href={"#about"}>
          <div className='w-[35px] h-[65px] rounded-3xl border-4 border-sky-500 flex justify-center items-start p-2'>
            <motion.div
            animate={{
              y: [0, 24, 0],
            }} 
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }} className='w-2 h-4 rounded-xl bg-yellow-500 mb-1' />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Hero
