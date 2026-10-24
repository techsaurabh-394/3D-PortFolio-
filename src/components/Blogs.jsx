import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import saurabhPortrait from "../assets/saurabh-pathak.jpg";

const ARTICLES = [
  {
    title: "Who is Saurabh Pathak? Software Developer & Founder",
    excerpt:
      "Learn about my journey, skills, and vision as a developer and builder connecting the world with MERN stack and Next.js.",
    link: "/blog/about-saurabh",
  },
  {
    title: "Building Rahidera: Connecting Locals and Travelers",
    excerpt:
      "The story behind building Rahidera, formerly TravelBuddiz: a full-stack platform connecting travelers with local trip planners.",
    link: "/blog/building-rahidera",
  },
  {
    title: "My Developer Stack in 2026: MERN, Next.js, and Modern Web",
    excerpt:
      "A deep dive into the tools, frameworks, and deployment strategies I use to build modern web applications.",
    link: "/blog/my-developer-stack",
  },
  {
    title: "Building My Personal Brand as a Developer",
    excerpt:
      "Why blogging, creating real products, and sharing knowledge openly is a strategy for developer growth.",
    link: "/blog/personal-branding",
  },
];

const BlogCard = ({ index, title, excerpt, link }) => (
  <motion.article
    variants={fadeIn("", "spring", index * 0.08, 0.45)}
    className="depth-card flex min-w-0 flex-col rounded-2xl border border-white/10 bg-[#0f121b] p-5 sm:p-6"
  >
    <div className="mb-5 flex items-center gap-3">
      <img
        src={saurabhPortrait}
        alt="Saurabh Pathak"
        width="48"
        height="48"
        loading="lazy"
        decoding="async"
        className="h-12 w-12 rounded-full border border-[#8ec5ff]/40 object-cover object-[center_72%]"
      />
      <div>
        <p className="text-sm font-semibold text-white">Saurabh Pathak</p>
        <p className="text-xs text-secondary">Article &amp; insight</p>
      </div>
    </div>

    <h3 className="mb-3 line-clamp-2 text-lg font-bold text-white">{title}</h3>
    <p className="mb-5 line-clamp-3 flex-1 text-sm leading-6 text-secondary">
      {excerpt}
    </p>

    <Link
      to={link}
      className="inline-flex min-h-11 items-center gap-2 font-semibold text-[#8ec5ff] underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
    >
      Read article <span aria-hidden="true">↗</span>
    </Link>
  </motion.article>
);

const Blogs = () => (
  <section
    className="mt-12 rounded-[20px] bg-[#0a0c14]"
    aria-labelledby="blogs-heading"
  >
    <div className={`min-h-[250px] rounded-2xl bg-[#111522] ${styles.padding}`}>
      <motion.div variants={textVariant()}>
        <p className={`text-[#8ec5ff] ${styles.sectionSubText}`}>
          Articles &amp; Insights
        </p>
        <h2 id="blogs-heading" className={styles.sectionHeadText}>
          Blogs.
        </h2>
      </motion.div>
    </div>
    <ul
      className={`-mt-12 grid list-none grid-cols-1 gap-5 pb-14 ${styles.paddingX} sm:grid-cols-2 xl:grid-cols-4`}
    >
      {ARTICLES.map((article, index) => (
        <li key={article.link} className="min-w-0">
          <BlogCard index={index} {...article} />
        </li>
      ))}
    </ul>
  </section>
);

export default SectionWrapper(Blogs, "blogs");
