import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import EasterEggs from "./components/EasterEggs";
import ElasticCursor from "./components/ElasticCursor";

const Home = lazy(() => import("./pages/Home"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const AboutSaurabh = lazy(() => import("./pages/AboutSaurabh"));
const BuildingRahidera = lazy(() => import("./pages/BuildingRahidera"));
const MyDeveloperStack = lazy(() => import("./pages/MyDeveloperStack"));
const PersonalBranding = lazy(() => import("./pages/PersonalBranding"));

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="relative z-0"
        style={{ backgroundColor: "hsl(222.2 84% 4.9%)" }}
      >
        <ElasticCursor />
        <EasterEggs />
        <Navbar />
        <Suspense
          fallback={
            <main
              className="min-h-screen bg-[#0a0c14]"
              aria-label="Loading page"
            />
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blog/about-saurabh" element={<AboutSaurabh />} />
            <Route
              path="/blog/building-rahidera"
              element={<BuildingRahidera />}
            />
            <Route
              path="/blog/building-travelbuddiz"
              element={<Navigate to="/blog/building-rahidera" replace />}
            />
            <Route
              path="/blog/my-developer-stack"
              element={<MyDeveloperStack />}
            />
            <Route
              path="/blog/personal-branding"
              element={<PersonalBranding />}
            />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
