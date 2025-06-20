"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Filter = ({ onFilterChange, onClearFilters }) => {
  const [filters, setFilters] = useState({
    jobTitle: [],
    location: [],
    experience: [],
    jobType: [],
    salaryRange: [0, 150000],
  });

  const jobTitles = [
    "Senior Software Engineer",
    "Product Manager",
    "UX Designer",
    "Data Science Intern",
    "DevOps Engineer",
  ];
  const locations = ["Remote", "New York", "San Francisco", "London", "Berlin"];
  const experienceLevels = ["Entry Level", "Intermediate", "Expert"];
  const jobTypes = [
    "Full Time",
    "Part Time",
    "Contract",
    "Freelance",
    "Internship",
  ];

  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => {
      const updatedCategory = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];
      return {
        ...prev,
        [category]: updatedCategory,
      };
    });
  };

  const handleSalaryChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      salaryRange: value,
    }));
  };

  const handleClear = () => {
    const resetFilters = {
      jobTitle: [],
      location: [],
      experience: [],
      jobType: [],
      salaryRange: [0, 150000],
    };
    setFilters(resetFilters);
    onClearFilters();
  };

  useEffect(() => {
    onFilterChange(filters);
  }, [filters]);

  const renderCheckboxGroup = (label, category, options) => (
    <div className="mb-6">
      <h4 className="text-primary-200 font-semibold mb-2">{label}</h4>
      <div className="space-y-1">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center text-sm text-primary-300"
          >
            <input
              type="checkbox"
              checked={filters[category].includes(option)}
              onChange={() => handleCheckboxChange(category, option)}
              className="mr-2 accent-secondary-500"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-primary-900 border border-primary-800 rounded-lg p-6"
    >
      <h3 className="text-lg font-bold text-primary-100 mb-4">Filter Jobs</h3>

      {renderCheckboxGroup("Job Titles", "jobTitle", jobTitles)}
      {renderCheckboxGroup("Locations", "location", locations)}
      {renderCheckboxGroup("Experience", "experience", experienceLevels)}
      {renderCheckboxGroup("Job Type", "jobType", jobTypes)}

      <div className="mb-6">
        <h4 className="text-primary-200 font-semibold mb-2">Salary Range</h4>
        <div className="px-2">
          <Slider
            range
            min={0}
            max={150000}
            step={1000}
            value={filters.salaryRange}
            onChange={handleSalaryChange}
            trackStyle={[{ backgroundColor: "#F59E0B" }]}
            handleStyle={[
              { backgroundColor: "#F59E0B", borderColor: "#F59E0B" },
              { backgroundColor: "#F59E0B", borderColor: "#F59E0B" },
            ]}
            railStyle={{ backgroundColor: "#374151" }}
          />
        </div>
        <div className="flex justify-between mt-2 text-sm text-primary-300">
          <span>${filters.salaryRange[0].toLocaleString()}</span>
          <span>${filters.salaryRange[1].toLocaleString()}</span>
        </div>
      </div>

      <button
        onClick={handleClear}
        className="w-full bg-secondary-500 hover:bg-secondary-600 text-primary-100 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
      >
        Clear Filters
      </button>
    </motion.div>
  );
};

export default Filter;
