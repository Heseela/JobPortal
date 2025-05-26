"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Shivam Patel",
      role: "Software Engineer",
      image: "/boy1.avif",
      rating: 5,
      comment: "This job portal made job search easy and quick. Recommended to all job seekers!",
    },
    {
      id: 2,
      name: "Abhishek Kullu",
      role: "Product Manager",
      image: "/boy2.avif",
      rating: 4,
      comment: "Found my dream job within a week! The application process was smooth.",
    },
    {
      id: 3,
      name: "Riya Bohora",
      role: "UX Designer",
      image: "/girl1.avif",
      rating: 5,
      comment: "I secured a job offer within days of applying - exceptional user experience and support.",
    },
    {
      id: 4,
      name: "Pavan Barnana",
      role: "Data Scientist",
      image: "/boy3.avif",
      rating: 5,
      comment: "Highly efficient job portal with excellent resources. Helped me land a great position.",
    },
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={`${i < rating ? 'text-yellow-400' : 'text-primary-700'} text-lg`} 
      />
    ));
  };

  return (
    <div className="w-full py-16 px-4 sm:px-8 md:px-16 bg-primary-950 overflow-hidden relative">
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

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-100 mb-4">
            What <span className="text-secondary-500">Users Say</span> About Us?
          </h2>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Hear from professionals who found success through our platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-primary-900/50 border border-primary-800 rounded-xl p-6 hover:border-secondary-500/50 transition-all duration-300 relative group"
            >
              <FaQuoteLeft className="text-primary-700 absolute top-6 left-6 text-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6 gap-4">
                  <motion.div 
                    className="relative h-14 w-14 rounded-full overflow-hidde"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 56px, 56px"
                    />
                  </motion.div>
                  <div>
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-primary-100 font-medium mt-1">{testimonial.name}</p>
                    <p className="text-primary-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-primary-200 mb-6 pl-2 flex-1">
                  {testimonial.comment}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;