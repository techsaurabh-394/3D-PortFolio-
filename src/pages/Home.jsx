import React from "react";
import {
    About,
    Experience,
    Contact,
    Blogs,
    Hero,
    Navbar,
    StarsCanvas,
    Works,
} from "../components";
import SkillKeyboard from "../components/SkillKeyboard";
import MetricsStrip from "../components/MetricsStrip";
import SEO from "../components/SEO";
import GitHubShowcase from "../components/GitHubShowcase";
import { publishedGitHubProjects } from "../data/githubProjects";

const Home = () => {
    return (
        <div className="relative z-0">
            <SEO
                title="Saurabh Pathak | AI, MCP, RAG & Full-Stack"
                description="AI engineer building MCP and RAG systems, AI agents, and full-stack products with MERN and Next.js."
                url="/"
                isArticle={false}
                softwareProjects={publishedGitHubProjects}
            />
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Hero />
            </div>
            <StarsCanvas />
            <About />
            <MetricsStrip />
            <Experience />
            <SkillKeyboard />
            <Works />
            <GitHubShowcase />
            <Blogs />
            <div className="relative z-0">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
