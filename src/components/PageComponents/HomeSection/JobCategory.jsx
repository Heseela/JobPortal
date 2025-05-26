"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const JobCategory = () => {
  const categories = [
    {
      id: 1,
      title: "Finance",
      description: "Financial records and transactions",
      jobs: "new job posted",
      icon: "💰"
    },
    {
      id: 2,
      title: "Human Resource",
      description: "Recruit, manage, and support company employees",
      jobs: "600+ new jobs posted",
      icon: "👥"
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Promote brands online with marketing strategies",
      jobs: "1k+ new jobs posted",
      icon: "📈"
    },
    {
      id: 4,
      title: "Web Developer",
      description: "Build and maintain websites for clients",
      jobs: "2k+ new jobs posted",
      icon: "💻"
    },
    {
      id: 5,
      title: "Arts & Design",
      description: "Create visual content, branding and media",
      jobs: "500+ new jobs posted",
      icon: "🎨"
    },
    {
      id: 6,
      title: "Data Science",
      description: "Analyze and interpret complex data",
      jobs: "800+ new jobs posted",
      icon: "📊"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= categories.length - itemsPerPage ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? categories.length - itemsPerPage : prevIndex - 1
    );
  };

  const visibleCategories = categories.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="w-full py-16 px-4 sm:px-8 md:px-16 bg-primary-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-100 mb-4">
            Browse <span className='text-secondary-500'>Job</span> Category
          </h2>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Explore diverse job opportunities tailored to your skills. Start your career journey today!
          </p>
        </motion.div>

        <div className="relative w-full">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary-900/80 hover:bg-secondary-500 text-primary-100 p-3 rounded-full shadow-lg transition-all duration-300 -ml-8 md:-ml-12"
            aria-label="Previous categories"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary-900/80 hover:bg-secondary-500 text-primary-100 p-3 rounded-full shadow-lg transition-all duration-300 -mr-8 md:-mr-12"
            aria-label="Next categories"
          >
            <FaChevronRight className="text-xl" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {visibleCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 10px 20px rgba(234, 179, 8, 0.1)"
                }}
                className="bg-primary-900/50 border border-primary-800 rounded-xl p-6 hover:border-secondary-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="text-4xl"
                    whileHover={{ scale: 1.1 }}
                  >
                    {category.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-100 mb-2">{category.title}</h3>
                    <p className="text-primary-200 mb-3">{category.description}</p>
                    <motion.span 
                      className="text-secondary-500 font-medium inline-block"
                      whileHover={{ scale: 1.05 }}
                    >
                      {category.jobs}
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="flex justify-center mt-8 gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {Array.from({ length: Math.ceil(categories.length / itemsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerPage)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index * itemsPerPage ? 'bg-secondary-500' : 'bg-primary-700'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="absolute -left-20 -top-20 w-40 h-40 rounded-full bg-secondary-500/10 blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-secondary-500/10 blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};

export default JobCategory;