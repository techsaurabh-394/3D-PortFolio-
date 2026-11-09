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
  mernstackdev,
  haatGateway,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
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

const education = [
  {
    title: "B.Tech CSE",
    institution: "ABES Engineering College, AKTU",
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
      "Community travel marketplace built zero to production. Features KYC verification (document + selfie), escrow payments, and OTP-confirmed trip handoffs. Onboarded 50+ early hosts and users in month one with 500+ organic visits via SEO. Formerly known as TravelBuddiz, Rahidera is now at rahidera.com.",
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
    name: "Haat Gateway",
    description:
      "Open-source gateway that lets personal AI agents shop from sellers on ONDC, India's open commerce network, in Hinglish and 11 Indian languages. Bridges the Personal Agent Protocol (Poppy) and Beckn, and never places an order without the person's approval. Approved orders run at most once, even across restarts. 126 automated tests pass, plus 99/99 checks on the official Poppy validator.",
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "ondc/beckn", color: "pink-text-gradient" },
      { name: "ai agents", color: "violet-text-gradient" },
    ],
    image: haatGateway,
    source_code_link: "https://github.com/techsaurabh-394/haat-gateway",
    live_link: "https://techsaurabh-394.github.io/haat-gateway/",
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

export { education, experiences, metrics, projects, services, socialLinks, words };
