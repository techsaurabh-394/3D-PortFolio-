import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { RiBriefcase4Fill } from "react-icons/ri";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[255px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#111522] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi, I'm Saurabh Pathak — an AI Engineer and Full-Stack Developer
        building at the intersection of intelligent agents and production-grade
        web applications. At Sprilio Tech, I ship React, Next.js, and Node.js
        apps backed by MongoDB and Firebase, design REST APIs with JWT &amp; RBAC
        that cut response times by 35%, and containerise microservices with
        Docker. I also write at{" "}
        <a
          href="https://mernstackdev.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8ec5ff] underline"
        >
          mernstackdev.com
        </a>
        , where 200+ articles reach 10K+ monthly readers simplifying MERN stack
        and modern web concepts.
      </motion.p>
      <a
        href="/Saurabh_Pathak_Resume.pdf"
        download="Saurabh_Pathak_Resume.pdf"
        className="mt-10 inline-flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 text-white shadow-md transition-colors hover:from-cyan-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        <span className="font-semibold flex gap-1.5 items-center"><RiBriefcase4Fill />Download Resume</span>
      </a>
      <div className="mt-12 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
