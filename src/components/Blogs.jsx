import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const BlogCard = ({ index, title, excerpt, image, link, date }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-[#0f0f0f] p-10 rounded-3xl xs:w-[320px] w-full flex flex-col"
  >
    {image && (
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
    )}
    
    <div className="flex-1 flex flex-col">
      <p className="text-secondary text-[12px] mb-2">
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      
      <h3 className="text-white font-bold text-[20px] mb-3 line-clamp-2">
        {title}
      </h3>
      
      <div
        className="text-white tracking-wider text-[14px] mb-4 line-clamp-3"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline hover:text-blue-300 transition-colors duration-200 inline-flex items-center gap-2 mt-auto"
      >
        Read More
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  </motion.div>
);

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        // WordPress REST API endpoint
        const response = await fetch(
          "https://mernstackdev.com/wp-json/wp/v2/posts?per_page=3&_embed"
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        
        const data = await response.json();
        
        // Transform WordPress data to our format
        const formattedBlogs = data.map((post) => ({
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
          image:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
          link: post.link,
          date: post.date,
        }));
        
        setBlogs(formattedBlogs);
        setError(null);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError(err.message);
        // Fallback to empty array or show error message
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className={`mt-12 bg-[#0a0c14] rounded-[20px]`}>
      <div
        className={` bg-[#111522] rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`text-[#8ec5ff] ${styles.sectionSubText}`}>
            Latest from mernstackdev.com
          </p>
          <h2 className={styles.sectionHeadText}>Blogs.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {loading ? (
          <div className="w-full flex justify-center items-center py-20">
            <p className="text-white text-lg">Loading blogs...</p>
          </div>
        ) : error ? (
          <div className="w-full flex justify-center items-center py-20">
            <p className="text-red-400 text-lg">
              Error loading blogs. Please try again later.
            </p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="w-full flex justify-center items-center py-20">
            <p className="text-white text-lg">No blogs found.</p>
          </div>
        ) : (
          blogs.map((blog, index) => (
            <BlogCard key={blog.link} index={index} {...blog} />
          ))
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Blogs, "blogs");

