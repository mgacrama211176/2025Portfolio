import React from "react";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { experienceContent } from "./data";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-24 md:py-32 overflow-hidden z-0"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight font-null">
            My <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A timeline of my professional journey and career achievements
          </p>

          <div className="flex justify-center mt-8">
            <ChevronDownIcon className="h-10 w-10 text-blue-400 animate-bounce" />
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline center line */}
          {/* <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div> */}

          {/* Experience items */}
          {experienceContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-24 last:mb-0"
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8`}
              >
                {/* Image container */}
                <div className="w-full md:w-5/12">
                  <div className="relative rounded-lg overflow-hidden shadow-xl h-64 md:h-80 group">
                    <Image
                      src={item.image}
                      alt={item.heading}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-5/12 text-white">
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-4">
                    {item.duration}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {item.heading}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-16">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 font-medium">
            View Full Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
