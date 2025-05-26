"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Filter from "./Filter";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaClock,
} from "react-icons/fa";

const jobsData = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp",
    location: "San Francisco",
    salary: "$120,000 - $150,000",
    type: "Full Time",
    experience: "Expert",
    posted: "2 days ago",
    description: "We're looking for an experienced engineer to join our team.",
  },
  {
    id: 2,
    title: "UX Designer",
    company: "DesignHub",
    location: "Remote",
    salary: "$80,000 - $100,000",
    type: "Contract",
    experience: "Intermediate",
    posted: "1 week ago",
    description: "Join our design team to create beautiful user experiences.",
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "DataWorks",
    location: "New York",
    salary: "$25 - $35/hr",
    type: "Internship",
    experience: "Entry Level",
    posted: "3 days ago",
    description: "Great opportunity for aspiring data scientists.",
  },
  {
    id: 4,
    title: "Product Manager",
    company: "ProductLabs",
    location: "London",
    salary: "$90,000 - $110,000",
    type: "Full Time",
    experience: "Intermediate",
    posted: "5 days ago",
    description: "Lead product development for our flagship application.",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudSystems",
    location: "Berlin",
    salary: "$100,000 - $130,000",
    type: "Full Time",
    experience: "Expert",
    posted: "1 day ago",
    description: "Help us build and maintain our cloud infrastructure.",
  },
];


const FindJob = () => {
  const [activeFilters, setActiveFilters] = useState({
    jobTitle: [],
    location: [],
    experience: [],
    jobType: [],
  });

  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (newFilters) => {
    setActiveFilters(newFilters);
  };

  const handleClearFilters = () => {
    setActiveFilters({
      jobTitle: [],
      location: [],
      experience: [],
      jobType: [],
    });
    setSearchQuery("");
  };

  const filteredJobs = jobsData.filter((job) => {

    const matchesSearch =
      searchQuery === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTitle =
      activeFilters.jobTitle.length === 0 ||
      activeFilters.jobTitle.includes(job.title);
    const matchesLocation =
      activeFilters.location.length === 0 ||
      activeFilters.location.includes(job.location);
    const matchesExperience =
      activeFilters.experience.length === 0 ||
      activeFilters.experience.includes(job.experience);
    const matchesType =
      activeFilters.jobType.length === 0 ||
      activeFilters.jobType.includes(job.type);
   

    return (
      matchesSearch &&
      matchesTitle &&
      matchesLocation &&
      matchesExperience &&
      matchesType
      
    );
  });


  return (
    <div className="min-h-screen bg-primary-950 text-primary-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-center mb-2">
            Find Your Dream Job
          </h1>
          <p className="text-primary-300 text-center max-w-2xl mx-auto">
            Browse through thousands of full-time and part-time jobs near you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for jobs, companies, or keywords"
              className="w-full bg-primary-900 border border-primary-800 rounded-lg py-3 pl-4 pr-12 text-primary-100 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-secondary-500 hover:bg-secondary-600 text-primary-100 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-80">
            <Filter
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
            />
          </div>

          <div className="flex-1">
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-4 flex justify-between items-center"
            >
              <h2 className="text-xl font-semibold">
                {filteredJobs.length} {filteredJobs.length === 1 ? "Job" : "Jobs"}{" "}
                Found
              </h2>
            </motion.div>

            {filteredJobs.length > 0 ? (
              <div className="space-y-6">
                {filteredJobs.map((job) => (
                  <motion.div
                    key={job.id}
                    whileHover={{ scale: 1.01 }}
                    className="bg-primary-900 border border-primary-800 rounded-lg p-6 hover:border-secondary-500/50 transition-all duration-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary-100 mb-1">
                          {job.title}
                        </h3>
                        <p className="text-primary-300 mb-2">{job.company}</p>
                        <div className="flex flex-wrap gap-3 mt-3">
                          <span className="flex items-center text-sm text-primary-200">
                            <FaMapMarkerAlt className="mr-1 text-secondary-500" />
                            {job.location}
                          </span>
                          <span className="flex items-center text-sm text-primary-200">
                            <FaBriefcase className="mr-1 text-secondary-500" />
                            {job.experience}
                          </span>
                          <span className="flex items-center text-sm text-primary-200">
                            <FaMoneyBillWave className="mr-1 text-secondary-500" />
                            {job.salary}
                          </span>
                          <span className="flex items-center text-sm text-primary-200">
                            <FaClock className="mr-1 text-secondary-500" />
                            {job.posted}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="px-3 py-1 bg-primary-800 text-secondary-500 text-sm font-medium rounded-full">
                          {job.type}
                        </span>
                        <button className="px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-primary-100 font-medium rounded-lg transition-colors duration-200">
                          Apply Now
                        </button>
                      </div>
                    </div>
                    <p className="mt-4 text-primary-300">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-primary-900 border border-primary-800 rounded-lg p-8 text-center"
              >
                <h3 className="text-xl font-medium mb-2">No jobs found</h3>
                <p className="text-primary-300">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={handleClearFilters}
                  className="mt-4 px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-primary-100 font-medium rounded-lg transition-colors duration-200"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJob;