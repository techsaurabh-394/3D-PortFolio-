import React from "react";
import { Helmet } from "react-helmet";

const siteUrl = "https://saurabh.mernstackdev.com";
const siteName = "Saurabh Pathak | AI Engineer & Full-Stack Developer";
const socialProfiles = [
  "https://github.com/techsaurabh-394",
  "https://x.com/Saurabh23272258",
  "https://linkedin.com/in/saurabh-pathak",
  "https://mernstackdev.com",
];

const SEO = ({ title, description, url = "/", isArticle = false, author }) => {
  const currentUrl = new URL(url, siteUrl).href;
  const imageUrl = `${siteUrl}/og-image.png`;
  const personSchema = {
    "@type": "Person",
    name: "Saurabh Pathak",
    jobTitle: "AI Engineer & Full-Stack Developer",
    url: siteUrl,
    image: imageUrl,
    email: "saurabhpathak394@gmail.com",
    sameAs: socialProfiles,
    knowsAbout: [
      "AI Engineering",
      "Multi-Agent Systems",
      "Model Context Protocol (MCP)",
      "Full-Stack Development",
      "MERN Stack",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Docker",
      "REST APIs",
      "TypeScript",
      "Python",
    ],
  };
  const websiteSchema = {
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description:
      "Portfolio of Saurabh Pathak — AI Engineer and Full-Stack Developer.",
  };
  const articleSchema = {
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": currentUrl },
    headline: title,
    description,
    author: {
      "@type": "Person",
      name: author || "Saurabh Pathak",
      url: siteUrl,
    },
    publisher: { "@type": "Person", name: "Saurabh Pathak", url: siteUrl },
    image: imageUrl,
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      personSchema,
      websiteSchema,
      ...(isArticle ? [articleSchema] : []),
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={isArticle ? "article" : "website"} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@Saurabh23272258" />
      <meta name="twitter:creator" content="@Saurabh23272258" />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default SEO;
