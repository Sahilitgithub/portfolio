
import reactjsImage from "@/public/images/react .png";
import nextjsImage from "@/public/images/nextjs.png";
import fullStackDev from "@/public/images/fullstack-developer.jpg";
import digitalMarketing from "@/public/images/digital-marketing.jpg";
import seoExpert from "@/public/images/seo-expert.jpg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "React.js Developer",
    icon: reactjsImage,
    iconBg: "#383E56",
    date: "March 2021 - April 2023",
    points: [
      "Built and maintained web apps using React.js and related technologies.",
      "Collaborated with designers, PMs, and developers to deliver high-quality products.",
      "Implemented responsive design with cross-browser support.",
      "Conducted code reviews and provided peer feedback.",
    ],
  },
  {
    title: "Next.js Developer",
    icon: nextjsImage,
    iconBg: "#E6DEDD",
    date: "Jan 2022 – Dec 2025",
    points: [
      "Developed high-performance web applications using Next.js, React.js, and modern JavaScript.",
      "Collaborated with UI/UX designers, product managers, and full-stack developers to deliver scalable web solutions.",
      "Implemented responsive, mobile-first designs with optimized performance and SEO best practices.",
      "Conducted code reviews, improved code quality, and ensured adherence to web development standards.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    icon: fullStackDev,
    iconBg: "#E6DEDD",
    date: "Jan 2025 – Present",
    points: [
      "Building and maintaining full-stack web applications using React.js, Next.js, Prisma, MongoDB, and related technologies.",
      "Collaborating with UI/UX designers, product managers, and engineers to deliver scalable, user-centric solutions.",
      "Implementing responsive SEO-Freindly Optimized and ensuring optimal performance across browsers supported.",
      "Conducting code reviews, optimizing code quality, and mentoring team members on best practices.",
    ],
  },

  {
    title: "Digital Marketer",
    icon: digitalMarketing,
    iconBg: "#E6DEDD",
    date: "Jan 2025 – Present",
    points: [
      "Planning, executing, and optimizing digital marketing campaigns across SEO, SEM, email, etc.",
      "Analyzing web traffic, engagement metrics, and conversion rates using tools like Google Analytics, Google Search Console and Meta Ads Manager.",
      "Collaborating with designers, content creators, and product teams to develop targeted marketing strategies.",
      "Conducting keyword research, A/B testing, and audience segmentation to improve campaign performance.",
    ],
  },
  {
    title: "SEO Expert",
    icon: seoExpert,
    iconBg: "#E6DEDD",
    date: "Jan 2023 – Present",
    points: [
      "Developing and executing comprehensive SEO strategies to improve organic search visibility and increase website traffic.",
      "Conducting in-depth keyword research, on-page, off-page optimization, and technical SEO audits to identify and resolve ranking issues.",
      "Collaborating with content creators, developers, and marketing teams to implement SEO best practices across web application.",
      "Monitoring performance metrics using tools like Google Search Console, Ahrefs, and SEMrush, etc. And adjusting strategies based on data insights.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
    "I never thought a website could look as amazing as our product, but the end result totally surprised me. thank you so much!",
    name: "Jisan",
    designation: "CEO",
    image: "/images/amin.jpg",
  },
  {
    testimonial:
    "I've never met a web developer who truly cares about their clients' success like Rick does. I don't even have the words to say thanks",
    name: "Ashraful Hoque",
    designation: "CEO",
    image: "/images/ashraful.jpg",
  },
  {
    testimonial:
    "He has built our website attractive user-friendly and SEO-friendly optimized, our traffic increased by 50%. We can't thank them enough!",
    name: "Mannan Talukder",
    designation: "CTO",
    image: "/images/mannan.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "text-yellow-600",
      },
      {
        name: "mongodb",
        color: "text-sky-600",
      },
      {
        name: "tailwind",
        color: "text-green-600",
      },
    ],
    image: '/images/carrent.png',
    websiteDemo: "https://www.onlineshopbds.com.bd",
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "text-red-600",
      },
      {
        name: "restapi",
        color: "text-green-600",
      },
      {
        name: "scss",
        color: "text-pink-600",
      },
    ],
    image: "/images/jobit.png",
    websiteDemo: "https://www.onlineshopbds.com.bd",
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "text-blue-600",
      },
      {
        name: "supabase",
        color: "text-lime-600",
      },
      {
        name: "css",
        color: "text-indigo-600",
      },
    ],
    image: "/images/tripguide.png",
    websiteDemo: "https://www.onlineshopbds.com.bd",
    source_code_link: "https://github.com/",
  },
  {
    name: "E-commerce",
   description:
      "A full-featured e-commerce platform that enables users to browse, filter, and purchase products. The platform offers a seamless shopping experience, user authentication, and responsive design",
    tags: [
      { name: "ReactJs", color: "text-amber-600" },
      { name: "NextJs", color: "text-fuchsia-600" },
      { name: "Mongodb", color: "text-cyan-600" },
    ],
    image: "/images/ecommerce.png",
    websiteDemo: "https://www.onlineshopbds.com.bd",
    source_code_link: "https://github.com/",
  },
];

export { experiences, testimonials, projects };
