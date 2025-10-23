"use client";
import { github } from "@/assets";
import { projects } from "./constants";
import { motion } from "framer-motion";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

type Tag = {
  name: string;
  color: string;
};

interface ProjectsProps {
  name: string;
  description: string;
  tags: Tag[];
  image: string | StaticImageData;
  websiteDemo: string;
  source_code_link: string;
}

// Parent container variants that orchestrate the stagger effect
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Time between each child's animation start
      delayChildren: 0.2, // Optional: delay the first child's animation
    },
  },
};

// Variants for each individual project card
const itemsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsCard: React.FC<ProjectsProps> = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  websiteDemo
}) => {
  return (
    // The individual project card
    <div>
      <motion.div
        variants={itemsVariants} // This tells the parent to use these variants
        className="project-card shadow-md shadow-blue-500"
      >
        <div className="card-box group">
          <div className="p-3 rounded-2xl">
            <div className="flex justify-center items-center">
              <figure className="w-full h-[230px]">
                <Image
                  src={image}
                  alt={name}
                  width={230}
                  height={230}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{width: "100%", height: '100%'}}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </figure>

              <div className="absolute inset-0 flex justify-end m-3">
                <div
                 onClick={() => window.open(source_code_link, "_blank")}
                  className="bg-gradient-to-b from-blue-700 to-black w-10 h-10 rounded-full cursor-pointer flex justify-center items-center"
                >
                  <Image
                    src={github}
                    alt="github"
                    width={70}
                    height={70}
                    priority
                    style={{width: "100%", height: '100%'}}
                    className="w-1/2 h-1/2 object-contain"
                  />

                </div>
              </div>
            </div>
            <div className="mt-2">
              <h3 className="text-white font-semibold text-2xl h2_center">
                {name}
              </h3>
              <p className="mt-1 text-sky-100 text-sm">{description}</p>
            </div>

            <div className="mt-1 flex gap-2 flex-wrap">
              {tags.map((tag, index) => (
                <p key={index} className={`text-sm ${tag.color}`}>
                  <span>#{tag.name}</span>
                </p>
              ))}
            </div>
          </div>
          <div
            className="absolute bottom-0 left-0 w-full h-4/5 bg-gradient-to-br from-purple-600 to-black 
             hidden group-hover:flex justify-center items-center
             opacity-0 group-hover:opacity-100 
             pointer-events-none group-hover:pointer-events-auto"
          >
            <Link
              href={websiteDemo}
              target="_blank"
              className="bg-gradient-to-l from-pink-600 to-yellow-600 px-4 py-2 rounded-md font-semibold text-white transition-all duration-500 ease-in-out"
            >
              Browse Demo
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section
      className="mx-auto max-w-7xl px-6 sm:px-16 -z-10 pt-20"
      id="projects"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="h2_center text-end text-2xl sm:text-3xl font-semibold border-b-2 border-amber-950 inline-block"
      >
        See Our Projects
      </motion.h2>
      <div className="w-full flex">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mt-3 text-amber-50 text-sm max-w-3xl leading-6"
        >
          Following projects showcases my skills and experience through
          real-world examples of my works. Each project is brief described with
          links to code repositories and live demos in it. it reflects my
          ability to solve complex probelms. work with different technologies.
          and manage projects efficiently.
        </motion.p>
      </div>
      <motion.div
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mt-10 flex flex-wrap gap-6"
      >
        {projects.map((project, index) => (
          <ProjectsCard
            key={index}
            name={project.name}
            description={project.description}
            tags={project.tags}
            image={project.image}
            websiteDemo={project.websiteDemo}
            source_code_link={project.source_code_link}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
