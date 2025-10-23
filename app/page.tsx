import About from '@/components/About'
import { StarsCanvas } from '@/components/canvas'
import Contact from '@/components/Contact'
import Testimonials from '@/components/Testimonials'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import Projects from '@/components/projects'
import WorksExperience from '@/components/WorksExperience'
import Footer from '@/components/Footer'

const Home = () => {

  return (
    <div className='relative z-0 bg-[#000119]'>
      <StarsCanvas />
      <div className="custom-hero-bg bg-no-repeat relative z-0">
        <StarsCanvas />
        <Navbar />
        <Hero />
      </div>
      <About />
      <WorksExperience />
      <div className=''>
        <Projects />
      </div>
      <Testimonials />
      <div className="relative -z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  )
}

export default Home
