// Skill names enum
export const SkillNames = {
  JS: "js",
  TS: "ts",
  HTML: "html",
  CSS: "css",
  REACT: "react",
  VUE: "vue",
  NEXTJS: "nextjs",
  TAILWIND: "tailwind",
  NODEJS: "nodejs",
  EXPRESS: "express",
  POSTGRES: "postgres",
  MONGODB: "mongodb",
  GIT: "git",
  GITHUB: "github",
  PRETTIER: "prettier",
  NPM: "npm",
  FIREBASE: "firebase",
  WORDPRESS: "wordpress",
  LINUX: "linux",
  DOCKER: "docker",
  NGINX: "nginx",
  AWS: "aws",
  VIM: "vim",
  VERCEL: "vercel",
  CPP: "cpp",
  PYTHON: "python",
  MYSQL: "mysql",
  TENSORFLOW: "tensorflow",
  POSTMAN: "postman",
  JIRA: "jira",
  GCP: "gcp",
  FIGMA: "figma",
  UIUX: "uiux",
  SEO: "seo",
  CONTENT_STRATEGY: "content_strategy",
  LLM: "llm",
  UNET: "unet",
  TRANSFORMERS: "transformers",
  NLP: "nlp",
};

// Skill type (for reference)
// id: number, name: string, label: string, shortDescription: string, color: string, icon: string

export const SKILLS = {
  js: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription:
      "A scripting language used to make web pages interactive and dynamic.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  ts: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "A superset of JavaScript that adds static typing and better tooling support.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  html: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription:
      "The standard markup language used to structure content on the web.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  css: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription:
      "A style sheet language used to describe the visual presentation of HTML elements.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  react: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription:
      "A JavaScript library for building fast and reusable user interfaces using components.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  vue: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription:
      "A progressive JavaScript framework for building user interfaces with a simple and flexible API.",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  nextjs: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "A React-based framework for building full-stack web apps with server-side rendering and routing.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  tailwind: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription:
      "A utility-first CSS framework for rapidly building custom and responsive UI designs.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  nodejs: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription:
      "A runtime environment that lets you run JavaScript on the server side.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  express: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription:
      "A minimal and flexible Node.js web application framework for creating APIs and backend services.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  postgres: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription:
      "A powerful open-source relational database system known for reliability and feature-richness.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  mongodb: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription:
      "A NoSQL database that stores data in flexible, JSON-like documents.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  git: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription:
      "A distributed version control system to track changes in source code during development.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  github: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription:
      "A platform to host, manage, and collaborate on code using Git.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  prettier: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription:
      "A code formatter that automatically styles code to follow consistent rules.",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  npm: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription:
      "The package manager for JavaScript, used to install libraries and manage project dependencies.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  firebase: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "A platform by Google offering backend services like authentication, database, and hosting.",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  wordpress: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription:
      "A content management system (CMS) used to build and manage websites easily.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  linux: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription:
      "An open-source operating system widely used in servers, development, and cloud environments.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  docker: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription:
      "A platform for developing, shipping, and running applications in isolated containers.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  nginx: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription:
      "A high-performance web server and reverse proxy used for serving static content and load balancing.",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  aws: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription:
      "Amazon Web Services — a cloud platform offering scalable computing, storage, and services.",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  vim: {
    id: 23,
    name: "vim",
    label: "Vim",
    shortDescription:
      "A highly configurable, efficient text editor popular among developers and system administrators.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  vercel: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "A cloud platform for deploying frontend applications, especially optimized for Next.js.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  cpp: {
    id: 25,
    name: "cpp",
    label: "C++",
    shortDescription:
      "A general-purpose programming language used for system programming, game development, and high-performance applications.",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  python: {
    id: 26,
    name: "python",
    label: "Python",
    shortDescription:
      "A high-level programming language known for its simplicity and versatility in web development, data science, and AI/ML.",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  mysql: {
    id: 27,
    name: "mysql",
    label: "MySQL",
    shortDescription:
      "A popular open-source relational database management system used for web applications and data storage.",
    color: "#4479a1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  tensorflow: {
    id: 28,
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription:
      "An open-source machine learning framework for building and training neural networks and AI models.",
    color: "#ff6f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  postman: {
    id: 29,
    name: "postman",
    label: "Postman",
    shortDescription:
      "A collaboration platform for API development, testing, and documentation.",
    color: "#ff6c37",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  jira: {
    id: 30,
    name: "jira",
    label: "Jira",
    shortDescription:
      "A project management tool for tracking issues, bugs, and agile project development.",
    color: "#0052cc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
  gcp: {
    id: 31,
    name: "gcp",
    label: "Google Cloud Platform",
    shortDescription:
      "A suite of cloud computing services by Google for hosting, storage, and machine learning.",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  figma: {
    id: 32,
    name: "figma",
    label: "Figma",
    shortDescription:
      "A collaborative design tool for creating user interfaces, prototypes, and design systems.",
    color: "#f24e1e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  uiux: {
    id: 33,
    name: "uiux",
    label: "UI/UX Design",
    shortDescription:
      "The practice of designing user interfaces and experiences to create intuitive and engaging digital products.",
    color: "#ff6b9d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  seo: {
    id: 34,
    name: "seo",
    label: "SEO",
    shortDescription:
      "Search Engine Optimization techniques including on-page SEO and blog SEO to improve website visibility.",
    color: "#0c96dd",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  content_strategy: {
    id: 35,
    name: "content_strategy",
    label: "Content Strategy",
    shortDescription:
      "Planning, creating, and managing content to achieve business goals and engage target audiences.",
    color: "#ff6b6b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
  },
  llm: {
    id: 36,
    name: "llm",
    label: "LLM Model Training",
    shortDescription:
      "Training and fine-tuning Large Language Models for natural language processing and AI applications.",
    color: "#8e44ad",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  unet: {
    id: 37,
    name: "unet",
    label: "U-Net",
    shortDescription:
      "A convolutional neural network architecture used for image segmentation tasks in computer vision.",
    color: "#3498db",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  transformers: {
    id: 38,
    name: "transformers",
    label: "Transformers",
    shortDescription:
      "A deep learning architecture that uses attention mechanisms, foundational to modern NLP and LLMs.",
    color: "#e74c3c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  nlp: {
    id: 39,
    name: "nlp",
    label: "NLP Techniques",
    shortDescription:
      "Natural Language Processing techniques for text analysis, sentiment analysis, and language understanding.",
    color: "#9b59b6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
};
