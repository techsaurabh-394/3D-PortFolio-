import React from "react";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import SEO from "../components/SEO";

const BlogsPage = () => {
    return (
        <div className="bg-[#0a0c14] min-h-screen pt-24 pb-12 relative z-0">
            <SEO
                title="Articles & Insights | Saurabh Pathak"
                description="Read the latest articles and insights on modern web development, building products, and personal branding by Saurabh Pathak."
                url="/blogs"
                isArticle={false}
            />
            <div className="relative z-0 min-h-[60vh]">
                <Blogs />
            </div>

            <div className="relative z-0 mt-12">
                <Contact />
            </div>
        </div>
    );
};

export default BlogsPage;
