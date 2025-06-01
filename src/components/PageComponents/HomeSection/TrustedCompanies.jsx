"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TrustedCompanies = () => {
  const companies = [
    { id: 1, logo: "/netflix.png", alt: "Netflix" },
    { id: 2, logo: "/pininterest.png", alt: "Pinterest" },
    { id: 3, logo: "/microsoft.png", alt: "Microsoft" },
    { id: 4, logo: "/meta.jpeg", alt: "Meta" },
    { id: 5, logo: "/slack.png", alt: "Slack" },
  ];

  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="py-16 bg-primary-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold leading-tight text-primary-100 pb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Trusted by <span className="text-secondary-500">1000+</span> leading
          companies worldwide
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-primary-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-primary-950 to-transparent z-20 pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              className="flex items-center py-4"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicatedCompanies.map((company, index) => (
                <motion.div
                  key={`${company.id}-${index}`}
                  className="flex-shrink-0 px-8"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="p-6 rounded-xl bg-primary-900/30 backdrop-blur-sm border border-primary-800 transition-all duration-300 hover:border-secondary-500/30 hover:shadow-lg hover:shadow-secondary-500/10">
                    <div className="relative h-16 w-32 transition-all duration-500">
                      <Image
                        src={company.logo}
                        alt={company.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100px, 150px"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-secondary-500/10 blur-3xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-secondary-500/10 blur-3xl -z-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </div>
  );
};

export default TrustedCompanies;
