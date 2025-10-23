"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import React from "react";

// Variants for the left-side element 
const leftSideVariant: Variants = {
    hidden: {x: -200, opacity: 0},
    visible: {
      x: 0,
      opacity: 1, 
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
}

// Vairants for the right-side element
const rightSideVariant:Variants = {
  hidden: {x: 100, opacity: 0},
  visible: {
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
}

const About = () => {

  return (
    <section
      className="mx-auto max-w-7xl relative -z-20 px-6 sm:px-16 pt-20 text-white"
      id="about"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <motion.div 
        variants={rightSideVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{once: false, amount: 0.2}}
        
         className="order-2 text-pink-600">
          <h2 className="text-3xl tsm:ext-4xl font-semibold mb-1 h2_center">About</h2>
          <p className="text-[15px] leading-5">
            I{"'"}m a skilled software developer with 2–4 years of experience in React.js, Next.js, Three.js, WordPress, Prisma (ORM), and MongoDB, etc. I{"'"}m a quick learner and collaborate closely with my clients to create efficient, scalable, and user-friendly web applications and solutions that solve real-world problems. Let{"'"}s work together to bring your ideas to life!
          </p>
          <hr className="border-b-0 border-amber-300 my-1 w-full" />
          <p className="text-[15px] leading-5">
            I specialize in building full-stack applications with clean, maintainable, SEO-Friendly codes and modern design. Whether it{"'"}s a dynamic front-end interface, a powerful back-end system, or integrating third-party APIs, I ensure every part of the project is handled with attention to detail and performance. I{"'"}m also familiar with workflows, Git version control, and responsive design techniques.
          </p>
          <hr className="border-b-0 border-amber-300 my-1 w-full" />
          <p className="text-[15px] leading-5">
            My goal is not just to write code, but to help businesses grow by delivering meaningful digital solutions that provide real value. If you{"'"}re looking for a reliable developer to turn your vision into reality, I{"'"}m here to help.
          </p>

        </motion.div>

        <motion.div
         variants={leftSideVariant}
         initial="hidden"
         whileInView="visible"
         viewport={{once: false, amount: 0.2}}
         className="order-1">
         <figure className="profile" style={{position: "relative", width: "100%", height: "300px"}}>
           <Image 
            src="/images/sahil.jpg" 
            alt="Sahil-it Portfolio" 
            fill
            className="image"
            style={{objectFit: 'cover'}}
            sizes="(max-width: 768px) 100vw, 300px" />
         </figure>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(About);
