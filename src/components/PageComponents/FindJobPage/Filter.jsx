// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Slider } from "@mantine/core";

// const Filter = ({ onFilterChange, onClearFilters }) => {
//   const [filters, setFilters] = useState({
//     jobTitle: [],
//     location: [],
//     experience: [],
//     jobType: [],
//     salaryRange: [0, 150000],
//   });

//   const jobTitles = [
//     "Senior Software Engineer",
//     "Product Manager",
//     "UX Designer",
//     "Data Science Intern",
//     "DevOps Engineer",
//   ];

//   const locations = ["Remote", "New York", "San Francisco", "London", "Berlin"];
//   const experienceLevels = ["Entry Level", "Intermediate", "Expert"];
//   const jobTypes = [
//     "Full Time",
//     "Part Time",
//     "Contract",
//     "Freelance",
//     "Internship",
//   ];

//   const handleCheckboxChange = (category, value) => {
//     setFilters((prev) => {
//       const updatedCategory = prev[category].includes(value)
//         ? prev[category].filter((item) => item !== value)
//         : [...prev[category], value];
//       return { ...prev, [category]: updatedCategory };
//     });
//   };

//   const handleSliderChange = (value) => {
//     setFilters((prev) => ({ ...prev, salaryRange: value }));
//   };

//   const handleClear = () => {
//     const reset = {
//       jobTitle: [],
//       location: [],
//       experience: [],
//       jobType: [],
//       salaryRange: [0, 150000],
//     };
//     setFilters(reset);
//     onClearFilters(); // Notifies parent
//   };

//   useEffect(() => {
//     onFilterChange(filters); // Notify parent on any filter change
//   }, [filters]);

//   const renderCheckboxGroup = (title, options, category) => (
//     <div>
//       <h3 className="font-semibold mb-2">{title}</h3>
//       <div className="space-y-1">
//         {options.map((option) => (
//           <label key={option} className="flex items-center space-x-2 text-sm">
//             <input
//               type="checkbox"
//               checked={filters[category].includes(option)}
//               onChange={() => handleCheckboxChange(category, option)}
//               className="form-checkbox text-secondary-500"
//             />
//             <span>{option}</span>
//           </label>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -15 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.4 }}
//       className="bg-primary-900 border border-primary-800 rounded-lg p-6 text-primary-100 space-y-6"
//     >
//       {renderCheckboxGroup("Job Titles", jobTitles, "jobTitle")}
//       {renderCheckboxGroup("Locations", locations, "location")}
//       {renderCheckboxGroup("Experience", experienceLevels, "experience")}
//       {renderCheckboxGroup("Job Type", jobTypes, "jobType")}

//       <div>
//         <h3 className="font-semibold mb-2">Salary Range</h3>
//         <Slider
//           value={filters.salaryRange}
//           onChange={handleSliderChange}
//           min={0}
//           max={150000}
//           step={1000}
//           marks={[
//             { value: 0, label: "$0" },
//             { value: 150000, label: "$150k" },
//           ]}
//           classNames={{
//             thumb: "bg-secondary-500",
//             track: "bg-primary-700",
//           }}
//         />
//         {Array.isArray(filters.salaryRange) &&
//         filters.salaryRange.length === 2 ? (
//           <div className="text-sm mt-2 text-primary-300">
//             ${filters.salaryRange[0].toLocaleString()} – $
//             {filters.salaryRange[1].toLocaleString()}
//           </div>
//         ) : null}
//       </div>

//       <button
//         onClick={handleClear}
//         className="mt-4 w-full bg-secondary-500 hover:bg-secondary-600 text-primary-100 font-medium py-2 rounded-lg transition-colors duration-200"
//       >
//         Clear All Filters
//       </button>
//     </motion.div>
//   );
// };

// export default Filter;



"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Slider } from "@mantine/core";

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
  const jobTypes = ["Full Time", "Part Time", "Contract", "Freelance", "Internship"];

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
          <label key={option} className="flex items-center text-sm text-primary-300">
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
