"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const TalentFilter = ({ onFilterChange, onClearFilters }) => {
  const [filters, setFilters] = useState({
    name: "",
    jobTitle: [],
    location: [],
    skills: [],
    experience: [0, 20],
  });

  const jobTitles = [
    "Software Engineer",
    "UX Designer",
    "Product Manager",
    "Data Scientist",
    "DevOps Engineer",
  ];

  const locations = [
    "Remote",
    "San Francisco",
    "New York",
    "London",
    "Berlin",
    "Tokyo",
  ];

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "TypeScript",
    "AWS",
    "Docker",
    "UI/UX Design",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  const handleExperienceChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      experience: value,
    }));
  };

  const handleClear = () => {
    const resetFilters = {
      jobTitle: [],
      location: [],
      experience: [0, 20],
      skills: [],
    };
    setFilters(resetFilters);
    onClearFilters();
  };

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

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
      <h3 className="text-lg font-bold text-primary-100 mb-4">
        Filter Talents
      </h3>

      {renderCheckboxGroup("Job Titles", "jobTitle", jobTitles)}
      {renderCheckboxGroup("Locations", "location", locations)}
      {renderCheckboxGroup("Skills", "skills", skills)}

      <div className="mb-6">
        <h4 className="text-primary-200 font-semibold mb-2">
          Experience (years)
        </h4>
        <div className="px-2">
          <Slider
            range
            min={0}
            max={20}
            step={1}
            value={filters.experience}
            onChange={handleExperienceChange}
            trackStyle={[{ backgroundColor: "#F59E0B" }]}
            handleStyle={[
              { borderColor: "#F59E0B", backgroundColor: "#F59E0B" },
              { borderColor: "#F59E0B", backgroundColor: "#F59E0B" },
            ]}
            railStyle={{ backgroundColor: "#1E293B" }}
          />
          <div className="flex justify-between text-sm text-primary-300 mt-2">
            <span>{filters.experience[0]} years</span>
            <span>{filters.experience[1]} years</span>
          </div>
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

export default TalentFilter;
