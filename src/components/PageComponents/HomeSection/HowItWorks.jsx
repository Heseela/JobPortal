"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaSearch, FaHandshake } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Build Your Resume",
      description: "Create a standout resume with your skills.",
      icon: <FaFileAlt className="text-2xl" />,
      progress: 100,
    },
    {
      id: 2,
      title: "Apply for Job",
      description: "Find and apply for jobs that match your skills.",
      icon: <FaSearch className="text-2xl" />,
      progress: 0,
    },
    {
      id: 3,
      title: "Get Hired",
      description: "Connect with employers and start your new job.",
      icon: <FaHandshake className="text-2xl" />,
      progress: 0,
    },
  ];

  return (
    <div className="w-full py-16 px-4 sm:px-8 md:px-16 bg-primary-950 overflow-hidden relative">
      <motion.div
        className="absolute -left-20 -top-20 w-40 h-40 rounded-full bg-secondary-500/10 blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-secondary-500/10 blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-100 mb-4">
            How it <span className="text-secondary-500">Works</span>
          </h2>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Effortlessly navigate through the process and land your dream job.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-primary-900/50 border border-primary-800 rounded-xl p-8 hover:border-secondary-500/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className={`mb-6 p-4 rounded-full ${
                    step.completed
                      ? "bg-secondary-500/20 text-secondary-500"
                      : "bg-primary-800 text-primary-300"
                  } group-hover:bg-secondary-500/20 group-hover:text-secondary-500 transition-colors duration-300`}
                  whileHover={{ scale: 1.1 }}
                >
                  {step.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-primary-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-primary-200 mb-4">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
