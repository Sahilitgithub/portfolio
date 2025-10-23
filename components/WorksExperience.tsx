"use client"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from './constants'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

interface ExperienceTypeProps {
  title: string;
  icon: StaticImageData;
  iconBg: string;
  date: string;
  points: string[];
}

const ExperienceCard = ({experience}: {experience: ExperienceTypeProps}) => {
  return (
    <VerticalTimelineElement 
    contentStyle={{background: '#0C0A09', color: 'white'}}
    contentArrowStyle={{borderRight: '4px solid yellow'}}
    date={experience.date} 
    iconStyle={{background: experience.iconBg}} 
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <Image 
        src={experience.icon} 
        alt={experience.title}
        className='w-[60%] h-[60%] object-contain' />
      </div>
    } >

    <div>
      <h3 className="h2_center text-[19px] sm:text-2xl font-semibold">{experience.title}</h3>
      <p className="text-[16px] text-light">{experience.date}</p>
    </div> 

    <ul className="mt-4 list-disc ml-4 space-y-2">
      {experience.points.map((point, index) => (
        <li 
        key={`experience-point-${index}`} 
        className='text-white text-sm pl-1 tracking-wide' >
          {point}
        </li>
      ))}
    </ul>   
    </VerticalTimelineElement>
  )
}

const WorksExperience = () => {
  // const variantsText = textVariant(0.5) as unknown as import("framer-motion").Variants;
  return (
    <section className='mx-auto max-w-7xl relative -z-20 px-6 sm:px-16 pt-20' id='works'>
      <div>
        <h2 className="h2_center text-2xl sm:text-4xl inline-block border-b-2 border-amber-950 font-semibold">Work Experience</h2>
      </div>
      <div className="mt-5 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard 
            key={index}
            experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default WorksExperience
