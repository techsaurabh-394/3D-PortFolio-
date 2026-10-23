import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Preloader } from "./components";
import EasterEggs from "./components/EasterEggs";
import ElasticCursor from "./components/ElasticCursor";
import Home from "./pages/Home";
import AboutSaurabh from "./pages/AboutSaurabh";
import BuildingTravelBuddiz from "./pages/BuildingTravelBuddiz";
import MyDeveloperStack from "./pages/MyDeveloperStack";
import PersonalBranding from "./pages/PersonalBranding";
import BlogsPage from "./pages/BlogsPage";

const App = () => {
  return (
    <Preloader>
      <BrowserRouter>
        <div
          className="relative z-0"
          style={{ backgroundColor: "hsl(222.2 84% 4.9%)" }}
        >
          <ElasticCursor />
          <EasterEggs />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blog/about-saurabh" element={<AboutSaurabh />} />
            <Route path="/blog/building-travelbuddiz" element={<BuildingTravelBuddiz />} />
            <Route path="/blog/my-developer-stack" element={<MyDeveloperStack />} />
            <Route path="/blog/personal-branding" element={<PersonalBranding />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Preloader>
  );
};

export default App;
