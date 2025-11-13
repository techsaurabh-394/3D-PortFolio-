# 🚀 Saurabh Pathak's 3D Portfolio

Welcome to my immersive 3D portfolio website! This project showcases my skills, projects, and creativity through stunning 3D animations, interactive elements, and smooth motion design. Experience a cosmic journey through space-themed design with cutting-edge web technologies.

![Portfolio Preview](https://github.com/techsaurabh-394/3D-Portfolio/blob/main/public/assets/nav-link-previews/home.png?raw=true)

## ✨ Features

### 🎮 Interactive 3D Elements

- **Custom 3D Keyboard**: Interactive Spline-powered keyboard with skills as keycaps that reveal titles and descriptions on hover
- **3D Models**: Desktop PC, Earth, and other 3D assets using Three.js and React Three Fiber
- **Particle Systems**: Dynamic star field background creating an immersive space environment
- **Elastic Cursor**: Custom cursor with physics-based animations for enhanced interactivity

### 🎨 Visual & Animation

- **Smooth Animations**: Powered by GSAP and Framer Motion for fluid scroll animations, hover effects, and element reveals
- **Space Theme**: Dark cosmic background with particle effects and stellar animations
- **Preloader**: Engaging loading screen with custom animations
- **Easter Eggs**: Hidden interactive elements for curious visitors

### 📱 Responsive Design

- **Mobile-First**: Fully responsive across all devices and screen sizes
- **Touch Optimized**: Smooth interactions on touch devices
- **Performance Optimized**: Optimized 3D rendering and animations

### 🎯 Sections

- **Hero**: Eye-catching introduction with 3D elements
- **About**: Personal story and background
- **Experience**: Timeline of professional experience and roles
- **Skills**: Interactive 3D keyboard showcasing technical skills
- **Projects**: Portfolio of work with 3D project cards
- **Blogs**: Latest blog posts from mernstackdev.com via WordPress API
- **Contact**: Interactive contact form with 3D elements

## 🛠️ Tech Stack

### Frontend & Framework

- **React 18** - Modern React with hooks and functional components
- **Vite** - Lightning-fast build tool and development server
- **React Router DOM** - Client-side routing

### 3D & Graphics

- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **Spline Runtime** - Interactive 3D design tool integration
- **Maath** - Mathematical utilities for 3D graphics

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Animations & Interactions

- **GSAP** - Professional-grade animations
- **Framer Motion** - Production-ready motion library
- **React Tilt** - 3D tilt effects
- **React Vertical Timeline Component** - Timeline animations

### Utilities & Tools

- **React Icons** - Icon library
- **EmailJS** - Email functionality for contact form
- **Clsx & Tailwind Merge** - Conditional styling utilities
- **Devtools Detector** - Development tools detection

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/techsaurabh-394/3D-Portfolio.git
   cd 3D-Portfolio-main
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory:

   ```env
   # EmailJS Configuration
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

   > **Note:** Get these values from [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
   > 
   > For Gmail setup, see the EmailJS documentation. The App Password should be added in EmailJS Dashboard, not in the `.env` file.

4. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:5173](http://localhost:5173) to see the magic!

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── canvas/         # 3D canvas components
│   │   ├── Ball.jsx
│   │   ├── Computers.jsx
│   │   ├── Earth.jsx
│   │   └── Stars.jsx
│   ├── preloader/      # Loading screen
│   ├── ui/            # UI components
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Blogs.jsx
│   ├── Contact.jsx
│   ├── ElasticCursor.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── SkillKeyboard.jsx
│   └── Works.jsx
├── assets/            # Static assets
│   ├── achievement/   # Achievement images
│   ├── badge/        # Skill badges
│   ├── fonts/        # Custom fonts
│   └── project/      # Project images
├── constants/         # Configuration files
│   ├── index.js      # Projects, experiences, skills
│   └── skills.js     # Skills configuration
├── hoc/              # Higher-order components
├── utils/            # Utility functions
└── styles.js         # Global styles
```

## 🎨 Customization

### Adding New Projects

1. Add project image to `src/assets/` directory
2. Import the image in `src/assets/index.js`
3. Add project details in `src/constants/index.js`:

```javascript
{
  name: "Project Name",
  description: "Project description",
  tags: [
    { name: "react", color: "blue-text-gradient" },
    // ... more tags
  ],
  image: projectImage,
  source_code_link: "https://github.com/...",
  live_link: "https://project-url.com",
}
```

### Adding New Skills

1. Add skill icon URL or use DevIcons
2. Add skill to `src/constants/skills.js`:

```javascript
export const SkillNames = {
  // ... existing skills
  NEW_SKILL: "newskill",
};

export const SKILLS = {
  // ... existing skills
  newskill: {
    id: 40,
    name: "newskill",
    label: "New Skill",
    shortDescription: "Description of the skill",
    color: "#hexcolor",
    icon: "icon-url",
  },
};
```

### Modifying Animations

- **GSAP Animations**: Edit scroll-triggered animations in component files
- **Framer Motion**: Modify motion variants in components
- **3D Animations**: Update Three.js animations in canvas components

### Styling Changes

- **Tailwind Classes**: Modify existing classes or add custom ones
- **Global Styles**: Update `src/styles.js` for theme changes
- **Component Styles**: Edit individual component styling

## 📧 EmailJS Setup

The contact form uses EmailJS for sending emails. Here's how to set it up:

1. **Create EmailJS Account**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Verify your email address

2. **Create Email Service**
   - Go to Email Services in EmailJS dashboard
   - Add Gmail, Outlook, or other email service
   - For Gmail: Use SMTP option and add App Password in EmailJS dashboard

3. **Create Email Template**
   - Go to Email Templates
   - Use variables: `{{user_name}}`, `{{user_email}}`, `{{user_message}}`, `{{my_name}}`, `{{my_email}}`

4. **Get API Keys**
   - Copy Service ID, Template ID, and Public Key
   - Add them to your `.env` file

For detailed instructions, check EmailJS documentation.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Vercel will automatically deploy your site

### Other Platforms

- **GitHub Pages**: Deploy using GitHub Actions
- **Firebase Hosting**: Use Firebase CLI
- **Netlify**: Connect GitHub repo and add environment variables
- **AWS S3**: Upload built files to S3 bucket

**Important:** Don't forget to add environment variables in your hosting platform's dashboard!

## 🎯 Projects Showcased

- **DevPrep** - Interview preparation platform (MERN Stack)
- **MERN Stack Dev Blog** - Tech blog at mernstackdev.com
- **Online Puja Booking** - Vedic Pandit booking platform
- **TravelBuddiz** - Travel group platform

## 🛠️ Technical Skills

### Programming Languages
C++, CSS, HTML, Python, JavaScript, WordPress

### Frameworks & Libraries
ReactJS, Next.js, NodeJS, ExpressJS, TensorFlow, Postman, Jira

### Databases
MongoDB, MySQL

### DevOps & Cloud
Docker, Git, GitHub, Google Cloud Platform, Firebase

### Design & SEO
Figma, UI/UX Design, On-Page SEO, Blog SEO, Content Strategy

### AI/ML
LLM Model Training, U-Net, Transformers, NLP Techniques

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow React best practices
- Maintain responsive design
- Optimize 3D performance
- Add meaningful commit messages
- Test across different devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Spline** for 3D design tools
- **Three.js** community for 3D graphics
- **GSAP** for powerful animations
- **Framer Motion** for React animations
- **Tailwind CSS** for utility-first styling
- **EmailJS** for email functionality

## 📞 Contact

- **Portfolio**: [https://saurabhpathak.dev](https://saurabhpathak.dev)
- **GitHub**: [@techsaurabh-394](https://github.com/techsaurabh-394)
- **Blog**: [mernstackdev.com](https://mernstackdev.com)
- **Email**: Contact via portfolio contact form

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by Saurabh Pathak
