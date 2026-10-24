import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Education = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>Academic background</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Education.</h2>
    </motion.div>

    <div className="mt-16 flex flex-col">
      <VerticalTimeline>
        {education.map((entry) => (
          <VerticalTimelineElement
            key={`${entry.institution}-${entry.title}`}
            contentStyle={{ background: "#111522", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #232631" }}
            date={entry.date}
            iconStyle={{ background: entry.iconBg }}
            icon={
              <div className="flex h-full w-full items-center justify-center">
                <img
                  src={entry.icon}
                  alt=""
                  aria-hidden="true"
                  className="rounded-full object-contain"
                />
              </div>
            }
          >
            <article className="depth-card rounded-xl border border-white/[0.06] p-4 sm:p-5">
              <h3 className="text-2xl font-bold text-[#8eadff]">{entry.title}</h3>
              <p className="mt-1 font-semibold text-white">{entry.institution}</p>

              <ul className="mt-5 flex list-none flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-[#cbd5e1]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 list-disc space-y-2 pl-5">
                {entry.points.map((point) => (
                  <li key={point} className="pl-1 text-sm leading-6 text-white-100">
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {entry.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05] px-3 py-2"
                  >
                    <p className="text-sm font-bold text-cyan-200">{metric.value}</p>
                    <p className="mt-1 text-[11px] leading-snug text-secondary">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Education, "education");
