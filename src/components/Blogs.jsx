import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const STATIC_BLOGS = [
  {
    title: "Who is Saurabh Pathak? Software Developer & Founder",
    excerpt: "Learn about my journey, skills, and vision as a developer and builder connecting the world with MERN stack and Next.js.",
    image: null,
    link: "/blog/about-saurabh",
    date: new Date().toISOString()
  },
  {
    title: "Building TravelBuddiz: Connecting Locals and Travelers",
    excerpt: "The story behind my startup journey building a full-stack platform where locals publish curated trips.",
    image: null,
    link: "/blog/building-travelbuddiz",
    date: new Date().toISOString()
  },
  {
    title: "My Developer Stack in 2026: MERN, Next.js, and Modern Web",
    excerpt: "A deep dive into the tools, frameworks, and deployment strategies I use daily to build modern web applications.",
    image: null,
    link: "/blog/my-developer-stack",
    date: new Date().toISOString()
  },
  {
    title: "Building My Personal Brand as a Developer",
    excerpt: "Why blogging, creating real products, and sharing knowledge openly is the ultimate strategy for developer growth.",
    image: null,
    link: "/blog/personal-branding",
    date: new Date().toISOString()
  }
];

const BlogCard = ({ index, title, excerpt, image, link, date }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-[#0f0f0f] p-10 rounded-3xl xs:w-[320px] w-full flex flex-col"
  >
    {image && (
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
    )}

    <div className="flex-1 flex flex-col">
      <h3 className="text-white font-bold text-[20px] mb-3 line-clamp-2">
        {title}
      </h3>

      <div
        className="text-white tracking-wider text-[14px] mb-4 line-clamp-3"
      >
        {excerpt}
      </div>

      <Link
        to={link}
        className="text-blue-400 underline hover:text-blue-300 transition-colors duration-200 inline-flex items-center gap-2 mt-auto"
      >
        Read More
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </Link>
    </div>
  </motion.div>
);

const Blogs = () => {
  return (
    <div className={`mt-12 bg-[#0a0c14] rounded-[20px]`}>
      <div
        className={` bg-[#111522] rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`text-[#8ec5ff] ${styles.sectionSubText}`}>
            Articles & Insights
          </p>
          <h2 className={styles.sectionHeadText}>Blogs.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {STATIC_BLOGS.map((blog, index) => (
          <BlogCard key={blog.link} index={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Blogs, "blogs");

