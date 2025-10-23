'use client';
import { motion } from 'framer-motion';
import { testimonials } from './constants';
import Image from 'next/image';

// Define type for testimonial
interface FeedbacksProps {
  testimonial: string;
  name: string;
  designation: string;
  image: string;
  index: number;
}

// Parent container variants that orchestrate the stagger effect
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Time between each child's animation start
      delayChildren: 0.2 // Optional: delay the first child's animation
    }
  }
};

// Variants for each individual testimonial card
const itemsVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

const TestimonialCard: React.FC<FeedbacksProps> = ({
  testimonial,
  name,
  designation,
  image,
}) => {
   
  return <motion.div 
 variants={itemsVariants}
  className='bg-stone-950 shadow-sm shadow-blue-600 p-10 rounded-3xl md:w-[320px] w-full'>
    <p className="text-white font-bold text-3xl">{'"'}</p>
    <div className="mt-1">
      <p className='text-sm text-gray-200'>{testimonial}</p>

      <div className="mt-6 flex justify-between items-center gap-1 text-white text-wide">
        <div className="flex-1 flex flex-col">
          <p>
            <span>@{name}</span>
          </p>
          <p className='text-sm'>
            {designation} of company
          </p>
        </div>

        <Image
        src={image}
        alt={name}
        width={48}
        height={48}
        className='w-10 h-10 rounded-full object-cover' />
      </div>
    </div>
  </motion.div>
}

const Testimonials = () => {

  return (
    <section className='mx-auto max-w-7xl relative -z-20 pt-20'>
      <div className="bg-black rounded-lg">
        {/* Title part */}
        <div className={` p-10 bg-[#010a34] rounded-2xl min-h-[300px]`}>
          <motion.p 
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false}}
          transition={{duration: 0.5, ease: 'easeInOut'}}
          className="text-[17px] sm:text-[21px] font-mono text-white">What others say</motion.p>
          <motion.h2
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false}}
          transition={{duration: 0.5, ease: 'easeIn'}} className="h2_center text-2xl font-semibold sm:text-3xl">
            Testimonials.
          </motion.h2>
        </div>
        {/* Loop user testimonial list */}
        <motion.div 
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: false}}
        className={`px-6 sm:px-16 -mt-30 pb-12 flex justify-center flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
            key={index}
            index={index}
            {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
