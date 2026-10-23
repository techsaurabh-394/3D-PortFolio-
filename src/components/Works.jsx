import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";

import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { words } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
  featured,
  projectType,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.12, 0.65)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`bg-[#111522] p-5 rounded-2xl sm:w-[360px] w-full relative ${
          featured
            ? "ring-2 ring-[#8ec5ff]/60 shadow-[0_0_30px_rgba(142,197,255,0.15)]"
            : ""
        }`}
      >
        {/* Featured Badge */}
        {featured && (
          <div className="absolute -top-3 left-5 z-10 px-3 py-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full text-white text-xs font-bold tracking-wider uppercase shadow-lg">
            ⭐ Featured Project
          </div>
        )}

        {/* Image with fixed aspect ratio */}
        <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            {live_link && (
              <a
                href={live_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${name}`}
                className="black-gradient flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110"
                title="Visit Live Site"
              >
                <svg
                  className="w-1/2 h-1/2 text-white"
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
              </a>
            )}
            {source_code_link && (
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on GitHub`}
                className="black-gradient flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110"
                title="View GitHub"
              >
                <img
                  src={github}
                  alt=""
                  className="h-1/2 w-1/2 object-contain"
                />
              </a>
            )}
          </div>
        </div>

        <div className="mt-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            {projectType && (
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-200">
                {projectType}
              </span>
            )}
          </div>
          <p className="mt-2 text-secondary text-[14px] line-clamp-4">
            {description}
          </p>
        </div>

        {/* Tag Chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[12px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-3">
          {live_link && (
            <a
              href={live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 flex-1 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 py-2 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Live ↗
            </a>
          )}
          {source_code_link && (
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 flex-1 items-center justify-center rounded-lg border border-white/20 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Code ↗
            </a>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>
        <div className="hero-text">
          <motion.span
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[30px] max-w-3xl leading-[50px]"
          >
            <h1>
              Shaping
              <span className="slide pl-3">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center text-3xl md:gap-3 gap-1 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt="person"
                        className=" md:p-2 p-1 rounded-full bg-[#8ec5ff]"
                      />
                      <span 
                        className="font-extrabold text-white" 
                        style={{ 
                          fontFamily: word.font, 
                          textShadow: '0 0 4px #8ec5ff, 0 0 6px white' 
                        }}
                      >
                        {word.text}
                      </span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1>into Real Projects that Deliver Results</h1>
          </motion.span>
        </div>

        <section className="mt-16" aria-labelledby="freelance-projects-heading">
          <div className="mb-7">
            <h3
              id="freelance-projects-heading"
              className="text-2xl font-bold text-white sm:text-3xl"
            >
              Freelance &amp; Client Work
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-secondary sm:text-base">
              Websites and digital experiences built for client brands and
              businesses.
            </p>
          </div>
          <div className="flex flex-wrap gap-7">
            {projects
              .filter((project) => project.projectType === "Freelance")
              .map((project, index) => (
                <ProjectCard
                  key={project.name}
                  index={index}
                  {...project}
                />
              ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="selected-projects-heading">
          <div className="mb-7">
            <h3
              id="selected-projects-heading"
              className="text-2xl font-bold text-white sm:text-3xl"
            >
              Products &amp; Selected Projects
            </h3>
          </div>
          <div className="flex flex-wrap gap-7">
            {projects
              .filter((project) => project.projectType !== "Freelance")
              .map((project, index) => (
                <ProjectCard
                  key={project.name}
                  index={index}
                  {...project}
                />
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
