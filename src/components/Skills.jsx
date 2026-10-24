import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  SiAmazon,
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiNodedotjs,
  SiNpm,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPrettier,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
  SiVim,
  SiWordpress,
} from "react-icons/si";
import {
  RiBrain2Line,
  RiBrainLine,
  RiChatSmile3Line,
  RiCodeSSlashLine,
  RiCloudLine,
  RiFlowChart,
  RiGitMergeLine,
  RiLightbulbFlashLine,
  RiPaletteLine,
  RiPlug2Line,
  RiSearchLine,
  RiTeamLine,
} from "react-icons/ri";
import { SKILLS } from "../constants/skills";

const SKILL_GROUPS = [
  {
    title: "Languages & web foundations",
    keys: ["js", "ts", "html", "css", "python", "cpp"],
  },
  {
    title: "Frontend & UI",
    keys: ["react", "vue", "nextjs", "tailwind", "figma", "uiux"],
  },
  {
    title: "Backend & databases",
    keys: ["nodejs", "express", "postgres", "mongodb", "mysql"],
  },
  {
    title: "AI, machine learning & agents",
    keys: [
      "tensorflow",
      "llm",
      "unet",
      "transformers",
      "nlp",
      "mcp",
      "rag",
      "multi_agent",
    ],
  },
  {
    title: "Cloud, DevOps & operating systems",
    keys: [
      "firebase",
      "linux",
      "docker",
      "nginx",
      "aws",
      "gcp",
      "azure",
      "vercel",
      "cicd",
    ],
  },
  {
    title: "Developer tools",
    keys: ["git", "github", "prettier", "npm", "postman", "jira", "vim"],
  },
  {
    title: "Content & growth",
    keys: ["wordpress", "seo", "content_strategy"],
  },
];

const groupedSkillKeys = new Set(SKILL_GROUPS.flatMap((group) => group.keys));
const otherSkills = Object.keys(SKILLS).filter(
  (skillKey) => !groupedSkillKeys.has(skillKey),
);

const SKILL_ICONS = {
  js: SiJavascript,
  ts: SiTypescript,
  html: SiHtml5,
  css: SiCss3,
  react: SiReact,
  vue: SiVuedotjs,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  postgres: SiPostgresql,
  mongodb: SiMongodb,
  git: SiGit,
  github: SiGithub,
  prettier: SiPrettier,
  npm: SiNpm,
  firebase: SiFirebase,
  wordpress: SiWordpress,
  linux: SiLinux,
  docker: SiDocker,
  nginx: SiNginx,
  aws: SiAmazon,
  vim: SiVim,
  vercel: SiVercel,
  cpp: SiCplusplus,
  python: SiPython,
  mysql: SiMysql,
  tensorflow: SiTensorflow,
  postman: SiPostman,
  jira: SiJira,
  gcp: SiGooglecloud,
  figma: SiFigma,
  uiux: RiPaletteLine,
  seo: RiSearchLine,
  content_strategy: RiLightbulbFlashLine,
  llm: RiBrainLine,
  unet: RiBrain2Line,
  transformers: RiFlowChart,
  nlp: RiChatSmile3Line,
  mcp: RiPlug2Line,
  rag: RiFlowChart,
  multi_agent: RiTeamLine,
  azure: RiCloudLine,
  cicd: RiGitMergeLine,
};

const SkillCard = ({ skill, index, prefersReducedMotion }) => {
  const Icon = SKILL_ICONS[skill.name] || RiCodeSSlashLine;

  return (
    <motion.li
      initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.35,
        delay: prefersReducedMotion ? 0 : (index % 6) * 0.04,
      }}
      className="depth-card flex min-h-[88px] min-w-0 items-center gap-4 rounded-xl border border-white/10 bg-[#111522]/90 p-4 hover:border-[#8eadff]/40 motion-reduce:transition-none"
    >
      <span
        aria-hidden="true"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]"
        style={{ color: skill.name === "github" ? "#fff" : skill.color }}
      >
        <Icon size={24} />
      </span>
      <span className="min-w-0">
        <span className="block font-semibold text-white">{skill.label}</span>
        <span className="mt-1 block text-xs leading-5 text-secondary">
          {skill.shortDescription}
        </span>
      </span>
    </motion.li>
  );
};

const Skills = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8eadff]">
          Skills
        </p>
        <h2
          id="skills-heading"
          className="mt-2 text-3xl font-bold text-white sm:text-4xl"
        >
          Skills I work with
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-secondary sm:text-base">
          Browse the technologies and disciplines I use across full-stack,
          cloud, and AI engineering.
        </p>
      </div>

      <div className="space-y-8">
        {SKILL_GROUPS.map((group) => {
          const skills = group.keys
            .map((skillKey) => SKILLS[skillKey])
            .filter(Boolean);
          const headingId = `skills-group-${group.keys[0]}`;

          return (
            <motion.section
              key={group.title}
              aria-labelledby={headingId}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
            >
              <h3
                id={headingId}
                className="mb-4 text-lg font-semibold text-white"
              >
                {group.title}
              </h3>
              <ul className="grid list-none grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                ))}
              </ul>
            </motion.section>
          );
        })}

        {otherSkills.length > 0 && (
          <motion.section
            aria-labelledby="skills-other"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
          >
            <h3
              id="skills-other"
              className="mb-4 text-lg font-semibold text-white"
            >
              Other skills
            </h3>
            <ul className="grid list-none grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {otherSkills.map((skillKey, index) => (
                <SkillCard
                  key={skillKey}
                  skill={SKILLS[skillKey]}
                  index={index}
                  prefersReducedMotion={prefersReducedMotion}
                />
              ))}
            </ul>
          </motion.section>
        )}
      </div>
    </section>
  );
};

export default Skills;
