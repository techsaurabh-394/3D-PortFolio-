import { motion } from "framer-motion";

import { styles } from "../styles";
import { useState, useEffect } from "react";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const typedItems = ["AI Engineer", "Full-Stack Developer", "AI Agents & MCP Builder", "Tech-Blogger"];
  const [itemIndex, setItemIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typeItem = () => {
      if (charIndex < typedItems[itemIndex].length) {
        setTypedText((prevText) => prevText + typedItems[itemIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          setItemIndex((itemIndex + 1) % typedItems.length);
          setCharIndex(0);
          setTypedText("");
        }, 1000); // Delay before typing the next item
      }
    };

    const typingInterval = setInterval(typeItem, 100); // Typing speed

    return () => clearInterval(typingInterval);
  }, [charIndex, itemIndex]);

  return (
    <section
      className="relative isolate mx-auto h-[min(100svh,1000px)] min-h-[780px] w-full overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-x-0 bottom-[72px] top-[300px] z-0 w-full sm:top-[270px]">
        <ComputersCanvas />
      </div>
      <div
        className={`absolute inset-x-0 top-[105px] z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center ${styles.paddingX}`}
      >
        <div className="w-full">
          <h1 className="text-4xl font-black leading-tight text-white xs:text-5xl sm:text-6xl lg:text-7xl">
            <span className="block">Hi, I'm</span>
            <span className="mt-1 block text-[#915EFF]">Saurabh Pathak</span>
          </h1>
          <p className="mt-3 text-base font-medium leading-7 text-[#dfd9ff] xs:text-lg sm:text-xl">
            <span>I'm </span>
            <span
              className="typed"
              aria-hidden="true"
              style={{
                backgroundImage: "linear-gradient(to bottom, rgba(245, 202, 153, 0.5), rgba(245, 202, 153, 0.5))",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 8px",
                backgroundPosition: "0 100%",
                color: "#915EFF",
                display: "inline-block",
                fontWeight: "bold"
              }}
            >
              {typedText}
            </span>
            <span className="typed-cursor" aria-hidden="true">
              |
            </span>
            <span className="mt-2 block text-sm font-semibold leading-6 text-white xs:text-base sm:text-lg">
              Building intelligent systems that ship — from AI agents to
              production apps.
            </span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 z-10 flex w-full justify-center">
        <a href="#about" aria-label="Scroll to the About section">
          <div className="flex h-[52px] w-[30px] items-start justify-center rounded-3xl border-2 border-secondary p-1.5">
            <motion.div
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.7,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-1 h-2.5 w-2.5 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
