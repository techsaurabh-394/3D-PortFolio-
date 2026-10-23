import { motion, useReducedMotion } from "framer-motion";
import React from "react";

import githubStats from "virtual:github-showcase-stats";
import { publishedGitHubProjects } from "../data/githubProjects";
import { styles } from "../styles";

const profileUrl = "https://github.com/techsaurabh-394";
const coffeeUrl = "https://buymeacoffee.com/saurabhdev";

const ProjectCard = ({ project, featured }) => {
  const stats = githubStats[project.repo];
  const daysSinceUpdate = stats?.updatedAt
    ? Math.max(
        0,
        Math.floor((Date.now() - new Date(stats.updatedAt).getTime()) / 86400000),
      )
    : null;
  const repositoryUrl = `https://github.com/${project.repo}`;

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border border-white/10 bg-[#111522] transition duration-300 hover:-translate-y-1 hover:border-[#8ec5ff]/50 hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)] motion-reduce:transform-none motion-reduce:transition-none ${
        featured ? "p-6 sm:p-7" : "p-5"
      }`}
    >
      {featured && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#8ec5ff]">
          Featured
        </p>
      )}
      <h3 className="break-words text-xl font-bold text-white sm:text-2xl">
        {project.name}
      </h3>
      <p className="mt-2 text-base font-medium leading-6 text-[#cbd5e1]">
        {project.tagline}
      </p>
      <p className="mt-3 text-sm leading-6 text-secondary">
        {project.description}
      </p>

      <ul
        className="mt-5 flex list-none flex-wrap gap-2"
        aria-label={`${project.name} technology stack`}
      >
        {project.stack.map((technology) => (
          <li
            key={technology}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#cbd5e1]"
          >
            {technology}
          </li>
        ))}
      </ul>

      {(daysSinceUpdate !== null || stats?.stars > 0) && (
        <p
          className="mt-4 text-xs text-[#cbd5e1]"
          aria-label="GitHub repository activity"
        >
          {stats?.stars > 0 && (
            <span>
              {stats.stars} {stats.stars === 1 ? "star" : "stars"}
            </span>
          )}
          {stats?.stars > 0 && daysSinceUpdate !== null && (
            <span aria-hidden="true"> · </span>
          )}
          {daysSinceUpdate !== null && `updated ${daysSinceUpdate} days ago`}
        </p>
      )}

      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-3 pt-6">
        <a
          href={repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.name} repository on GitHub`}
          className="min-h-11 inline-flex items-center font-semibold text-[#8ec5ff] underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          View repo <span aria-hidden="true" className="ml-1">↗</span>
        </a>
        {stats?.readmeUrl && (
          <a
            href={stats.readmeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read the ${project.name} documentation on GitHub`}
            className="min-h-11 inline-flex items-center font-semibold text-[#cbd5e1] underline-offset-4 hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Read the docs <span aria-hidden="true" className="ml-1">↗</span>
          </a>
        )}
      </div>
    </article>
  );
};

const GitHubShowcase = () => {
  const prefersReducedMotion = useReducedMotion();
  const featuredProjects = publishedGitHubProjects.filter(
    (project) => project.featured,
  );
  const otherProjects = publishedGitHubProjects.filter(
    (project) => !project.featured,
  );

  return (
    <section
      id="github"
      aria-labelledby="github-heading"
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <div className="mb-9">
        <p className={styles.sectionSubText}>Open source</p>
        <h2 id="github-heading" className={styles.sectionHeadText}>
          Open source on GitHub
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-secondary">
          Things I build, test and ship in the open.
        </p>
      </div>

      <ul className="grid list-none grid-cols-1 gap-6 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <motion.li
            key={project.repo}
            className="min-w-0"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.35, delay: index * 0.08 }}
          >
            <ProjectCard project={project} featured />
          </motion.li>
        ))}
      </ul>

      {otherProjects.length > 0 && (
        <ul className="mt-6 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <li key={project.repo} className="min-w-0">
              <ProjectCard project={project} featured={false} />
            </li>
          ))}
        </ul>
      )}

      <div className="mt-9 flex flex-wrap items-center gap-5">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 motion-reduce:transition-none"
        >
          Follow on GitHub
        </a>
        <a
          href={coffeeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-11 inline-flex items-center text-sm font-medium text-[#cbd5e1] underline-offset-4 hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          Buy me a coffee
        </a>
      </div>
    </section>
  );
};

export default GitHubShowcase;
