import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#111522",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="object-contain rounded-full"
          />
        </div>
      }
    >
      <div className="depth-card rounded-xl border border-white/[0.06] p-4 sm:p-5">
        <h3 className="text-[#8eadff] text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className="text-white text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {experience.tags?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <span
              key={`${experience.company_name}-${tag}`}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-[#cbd5e1]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>

      {experience.metrics?.length > 0 && (
        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {experience.metrics.map((metric) => (
            <div
              key={`${experience.company_name}-${metric.label}`}
              className="rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05] px-3 py-2"
            >
              <p className="text-sm font-bold text-cyan-200">{metric.value}</p>
              <p className="mt-1 text-[11px] leading-snug text-secondary">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      )}
      
      {experience.blogLink && (
        <div className="mt-5">
          <a
            href={experience.blogLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300 transition-colors duration-200 inline-flex items-center gap-2"
          >
            Visit Blog
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
          </a>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
