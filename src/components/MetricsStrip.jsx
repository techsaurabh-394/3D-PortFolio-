import { motion } from "framer-motion";
import React from "react";
import { metrics } from "../constants";
import { fadeIn } from "../utils/motion";

const MetricsStrip = () => {
  return (
    <section className="w-full py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={fadeIn("up", "spring", index * 0.15, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="depth-card flex flex-col items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.06]"
            >
              <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                {metric.value}
              </span>
              <span className="mt-2 text-secondary text-sm sm:text-base font-medium text-center">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsStrip;
