"use client";

import React from "react";
import Image from "next/image";
import { FaSearch, FaBriefcase, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

function HomeBanner() {
  return (
    <div className="relative py-32 flex items-center justify-center px-4 sm:px-8 md:px-10 bg-primary-950 overflow-hidden">
      <motion.div 
        className="absolute -left-40 -top-40 w-80 h-80 rounded-full bg-secondary-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -right-40 -bottom-40 w-80 h-80 rounded-full bg-secondary-500/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-7xl relative z-10">
        <motion.div 
          className="w-full md:w-[45%] flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-lg group">
            <Image
              src="/banner.jpg"
              alt="Career illustration"
              width={500}
              height={500}
              className="object-contain rounded-lg transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

        <motion.div 
          className="w-full md:w-[45%] flex flex-col gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-primary-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Find your <span className="text-secondary-500">dream job</span> with us
          </motion.h1>
          
          <motion.p 
            className="text-lg text-primary-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Good life begins with a good company. Start exploring thousands of jobs in one place.
          </motion.p>

          <motion.div 
            className="flex flex-col gap-6 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-primary-200 mb-1">Job Title</label>
                <motion.div 
                  className="bg-primary-900 rounded-lg flex items-center px-3 py-2 border border-primary-800 hover:border-secondary-500/50 transition-colors duration-300"
                  whileHover={{ scale: 1.01 }}
                >
                  <FaBriefcase className="text-primary-300 mr-2" />
                  <input
                    type="text"
                    placeholder="Software Engineering"
                    className="bg-transparent w-full text-primary-100 placeholder:text-primary-300 focus:outline-none"
                  />
                </motion.div>
              </div>
              
              <div className="flex-1">
                <label className="block text-primary-200 mb-1">Job Type</label>
                <motion.div 
                  className="bg-primary-900 rounded-lg flex items-center px-3 py-2 border border-primary-800 hover:border-secondary-500/50 transition-colors duration-300"
                  whileHover={{ scale: 1.01 }}
                >
                  <FaClock className="text-primary-300 mr-2" />
                  <input
                    type="text"
                    placeholder="FullTime"
                    className="bg-transparent w-full text-primary-100 placeholder:text-primary-300 focus:outline-none"
                  />
                </motion.div>
              </div>
              
              <motion.button 
                className="h-[42px] self-end bg-secondary-500 hover:bg-secondary-600 text-primary-100 font-medium px-4 rounded-lg flex items-center justify-center transition-colors duration-200"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(234, 179, 8, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <FaSearch className="mr-2" />
                Search
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeBanner;