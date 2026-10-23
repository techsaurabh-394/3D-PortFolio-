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

const Home = () => {
    return (
        <div className="relative z-0">
            <SEO
                title="Saurabh Pathak | AI Engineer & Full-Stack Developer"
                description="Portfolio of Saurabh Pathak — AI Engineer building intelligent agents, MCP integrations, and production-grade MERN & Next.js applications."
                url="/"
                isArticle={false}
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
            <Blogs />
            <div className="relative z-0">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
