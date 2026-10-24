import React from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Blogs from "../components/Blogs";
import Hero from "../components/Hero";
import Works from "../components/Works";
import Skills from "../components/Skills";
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
            <Hero />
            <About />
            <MetricsStrip />
            <Experience />
            <Education />
            <Skills />
            <GitHubShowcase />
            <Works />
            <Blogs />
            <div className="relative z-0">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
