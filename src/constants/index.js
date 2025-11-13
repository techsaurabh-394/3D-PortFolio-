import {
  backend,
  creator,
  mobile,
  web,
  ideas,
  concepts,
  designs,
  code,
  devprep,
  mernstackdev,
  onlinepuja,
  travelbuddiz,
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
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Tech Blogger",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "AI Enthusiast",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Full-time",
    icon: web,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using modern technologies",
      "Collaborating with cross-functional teams to deliver high-quality software",
      "Implementing responsive designs and ensuring optimal user experience",
    ],
  },
  {
    title: "Tech Blogger",
    company_name: "mernstackdev.com",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Writing technical articles and tutorials on MERN stack development",
      "Sharing knowledge and best practices with the developer community",
      "Creating content that simplifies complex tech concepts",
    ],
    blogLink: "https://mernstackdev.com",
  },
  {
    title: "Software Developer Intern",
    company_name: "Internship",
    icon: web,
    iconBg: "#0056d2",
    date: "Sept 2024 - Dec 2024",
    points: [
      "Gained hands-on experience in software development lifecycle",
      "Worked on real-world projects and contributed to team goals",
      "Learned industry best practices and modern development tools",
    ],
  },
];

const projects = [
  {
    name: "DevPrep",
    description:
      "A comprehensive full-stack Interview Preparation Platform designed to help users prepare for technical interviews. Features include interview practice sessions, resume building tools, personalized career roadmaps, and community engagement. Built with MERN stack, OAuth authentication, and real-time features. 🚀",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "violet-text-gradient",
      },
      {
        name: "oauth",
        color: "orange-text-gradient",
      },
    ],
    image: devprep,
    source_code_link: "https://github.com/techsaurabh-394/devprep",
    live_link: "https://devprep.mernstackdev.com",
  },
  {
    name: "MERN Stack Dev Blog",
    description:
      "A professional tech blog website where I write technical articles and tutorials on MERN stack development. Features include WordPress CMS, SEO optimization, responsive design, and engaging content that simplifies complex tech concepts for developers worldwide. 📝💻",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "seo",
        color: "violet-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image: mernstackdev,
    source_code_link: "https://mernstackdev.com",
    live_link: "https://mernstackdev.com",
  },
  {
    name: "Online Puja Booking",
    description:
      "An online platform where users can book Vedic Pandits for various Pujas by selecting the type of Puja they need. Features include easy booking system, payment integration, calendar scheduling, and user dashboard. Streamlined booking system for traditional religious services. 🕉️",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "violet-text-gradient",
      },
    ],
    image: onlinepuja,
    source_code_link: "https://github.com/gauravpathak346/online_puja_app",
    live_link: "https://online-puja-amit.web.app/",
  },
  {
    name: "TravelBuddiz",
    description:
      "A platform where locals and groups can publish trips and travelers can join to make new groups for traveling. Features include trip creation, group management, user profiles, booking system, and social features. Connect with fellow travelers and explore the world together! ✈️🌍",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "violet-text-gradient",
      },
    ],
    image: travelbuddiz,
    source_code_link: "https://travelbuddiz.com",
    live_link: "https://travelbuddiz.com",
  },
];

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

export { experiences, projects, services, words };
