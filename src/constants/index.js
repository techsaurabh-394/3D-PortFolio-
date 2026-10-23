import {
  backend,
  creator,
  mobile,
  web,
  ideas,
  concepts,
  designs,
  code,
  bo2bot,
  rahidera,
  phonalyze,
  devprep,
  mernstackdev,
  sunehriChandi,
  vittedge,
  tayalFinvest,
  onlinePujaSamagri,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Engineer",
    icon: creator,
  },
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Tech Blogger",
    icon: mobile,
  },
  {
    title: "AI Agents & MCP",
    icon: backend,
  },
];

const experiences = [
  {
    title: "Software Developer (Full-Stack)",
    company_name: "Sprilio Tech",
    icon: web,
    iconBg: "#383E56",
    date: "Oct 2024 - Present",
    tags: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Firebase", "Docker"],
    metrics: [
      { value: "35%", label: "Faster API responses" },
      { value: "3×", label: "Organic traffic" },
      { value: "60%", label: "Faster page loads" },
    ],
    points: [
      "Building and shipping React, Next.js, Node.js & Express web applications with MongoDB and Firebase",
      "Designing REST APIs with JWT authentication and role-based access control (RBAC), cutting API response times by 35%",
      "Containerising microservices with Docker Compose and integrating Firebase real-time sync for production workloads",
      "Implementing technical SEO strategies that delivered 3× organic traffic growth and 60% better page-load scores",
    ],
  },
  {
    title: "Tech Blogger — 200+ Articles",
    company_name: "mernstackdev.com",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    tags: ["Technical writing", "SEO", "MERN stack"],
    metrics: [
      { value: "200+", label: "Articles published" },
      { value: "10K+", label: "Monthly readers" },
    ],
    points: [
      "Published 200+ in-depth technical articles and tutorials on MERN stack, Next.js, and modern web development",
      "Grew to 10,000+ monthly readers through consistent, high-quality content and SEO-driven distribution",
      "Simplified complex engineering concepts for developers worldwide, building a trusted community resource",
    ],
    blogLink: "https://mernstackdev.com",
  },
  {
    title: "B.Tech CSE",
    company_name: "ABES Engineering College, AKTU",
    icon: web,
    iconBg: "#0056d2",
    date: "2020 - 2024",
    tags: ["Computer Science", "Smart India Hackathon", "Meta", "AWS"],
    metrics: [
      { value: "Runner-up", label: "Smart India Hackathon 2022" },
      { value: "Meta", label: "Full-Stack Certificate" },
    ],
    points: [
      "Bachelor of Technology in Computer Science & Engineering",
      "Smart India Hackathon 2022 Runner-Up",
      "Meta Full-Stack Developer Professional Certificate",
      "AWS Cloud Essentials Certification",
    ],
  },
];

const metrics = [
  { value: "35%", label: "Faster APIs" },
  { value: "3×", label: "Organic Traffic" },
  { value: "200+", label: "Technical Articles" },
  { value: "10K+", label: "Monthly Readers" },
  { value: "3", label: "Products Shipped" },
];

const projects = [
  {
    name: "Bo2bot",
    description:
      "Agent-to-agent messaging platform where each AI agent gets its own address. Agents across platforms (OpenClaw, Hermes, Claude Desktop) message each other with no human relay. Token-efficient REST API with self-describing responses, bearer-token auth or MCP — no SDK needed. Features relationship-based inbox sorting, six-verdict reputation scoring, and a public bulletin board.",
    tags: [
      { name: "node.js", color: "green-text-gradient" },
      { name: "express", color: "blue-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "mcp", color: "violet-text-gradient" },
      { name: "docker", color: "orange-text-gradient" },
    ],
    image: bo2bot,
    source_code_link: "https://github.com/techsaurabh-394",
    live_link: "https://bo2bot.com",
    featured: true,
  },
  {
    name: "Rahidera",
    description:
      "Community travel marketplace built zero to production. Features KYC verification (document + selfie), escrow payments, and OTP-confirmed trip handoffs. Onboarded 50+ early hosts and users in month one with 500+ organic visits via SEO. Evolved from TravelBuddiz into a verified local-stay and guided-travel platform.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "express", color: "violet-text-gradient" },
    ],
    image: rahidera,
    source_code_link: "https://github.com/techsaurabh-394",
    live_link: "https://rahidera.com",
  },
  {
    name: "Phonalyze",
    description:
      "Clinical voice analysis tool with React + Tailwind frontend, real-time audio capture and waveform visualisation. Praat-powered clinical reports generated in under 60 seconds, improving clinical workflows by 40%. Built during Feb–Mar 2024.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "python", color: "pink-text-gradient" },
      { name: "praat", color: "violet-text-gradient" },
    ],
    image: phonalyze,
    source_code_link: "https://github.com/techsaurabh-394",
    live_link: "https://tool.phonalyze.com",
  },
  {
    name: "Sunehri Chandi Co",
    description:
      "Freelance e-commerce project for a handcrafted jewellery brand, showcasing 925 silver, moissanite, polki and cubic zirconia collections with custom-order enquiries.",
    tags: [
      { name: "E-commerce", color: "blue-text-gradient" },
      { name: "Jewellery", color: "pink-text-gradient" },
      { name: "Custom Orders", color: "orange-text-gradient" },
    ],
    image: sunehriChandi,
    live_link: "https://sunehrichandi.com",
    projectType: "Freelance",
  },
  {
    name: "Vittedge Technologies",
    description:
      "Freelance website project for a financial-distribution software company, presenting its WealthCRM for financial advisors and Agent CRM for recruiting and growing advisor networks.",
    tags: [
      { name: "WealthTech", color: "blue-text-gradient" },
      { name: "CRM", color: "green-text-gradient" },
      { name: "Financial Services", color: "violet-text-gradient" },
    ],
    image: vittedge,
    live_link: "https://vittedge.co.in",
    projectType: "Freelance",
  },
  {
    name: "Tayal Finvest Services",
    description:
      "Freelance website project for a financial-services firm, presenting goal-based financial planning, wealth creation and protection strategies.",
    tags: [
      { name: "Fintech", color: "blue-text-gradient" },
      { name: "Financial Planning", color: "green-text-gradient" },
      { name: "Wealth Management", color: "violet-text-gradient" },
    ],
    image: tayalFinvest,
    live_link: "https://tayalfinvest.com/",
    projectType: "Freelance",
  },
  {
    name: "Online Puja — Pandit Ajay Pathak",
    description:
      "Freelance mobile-friendly puja-samagri guide featuring 15 Vedic ceremony checklists, downloadable PDFs and installable PWA support for quick access.",
    tags: [
      { name: "HTML", color: "orange-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
      { name: "JavaScript", color: "orange-text-gradient" },
      { name: "PWA", color: "violet-text-gradient" },
    ],
    image: onlinePujaSamagri,
    source_code_link: "https://github.com/techsaurabh-394/pandit-ajay-pathak-puja",
    projectType: "Freelance",
  },
  {
    name: "DevPrep",
    description:
      "A comprehensive full-stack Interview Preparation Platform designed to help users prepare for technical interviews. Features include interview practice sessions, resume building tools, personalized career roadmaps, and community engagement. Built with MERN stack, OAuth authentication, and real-time features.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "express", color: "violet-text-gradient" },
      { name: "oauth", color: "orange-text-gradient" },
    ],
    image: devprep,
    source_code_link: "https://github.com/techsaurabh-394/devprep",
    live_link: "https://devprep.mernstackdev.com",
  },
  {
    name: "MERN Stack Dev Blog",
    description:
      "A professional tech blog with 200+ articles and 10K+ monthly readers. Features WordPress CMS, SEO optimization, responsive design, and engaging content that simplifies complex tech concepts for developers worldwide.",
    tags: [
      { name: "wordpress", color: "blue-text-gradient" },
      { name: "php", color: "green-text-gradient" },
      { name: "seo", color: "pink-text-gradient" },
      { name: "css", color: "violet-text-gradient" },
    ],
    image: mernstackdev,
    source_code_link: "https://mernstackdev.com",
    live_link: "https://mernstackdev.com",
  },
];

const socialLinks = {
  github: "https://github.com/techsaurabh-394",
  linkedin: "https://www.linkedin.com/in/tech-saurabh/",
  twitter: "https://x.com/Saurabh23272258",
  email: "saurabhpathak394@gmail.com",
};

const words = [
  { text: "Ideas", imgPath: ideas, font: "Arial, sans-serif" },
  {
    text: "Concepts",
    imgPath: concepts,
    font: "'Courier New', Courier, monospace",
  },
  {
    text: "Designs",
    imgPath: designs,
    font: "'Times New Roman', Times, serif",
  },
  { text: "Code", imgPath: code, font: "'Fira Mono', monospace" },
  {
    text: "Ideas",
    imgPath: ideas,
    font: "'Comic Sans MS', cursive, sans-serif",
  },
  { text: "Concepts", imgPath: concepts, font: "'Roboto', sans-serif" },
  { text: "Designs", imgPath: designs, font: "'Georgia', serif" },
  { text: "Code", imgPath: code, font: "'Source Code Pro', monospace" },
];

export { experiences, metrics, projects, services, socialLinks, words };
