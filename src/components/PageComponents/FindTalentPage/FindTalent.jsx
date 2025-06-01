"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TalentFilter from "./TalentFilter";
import { FaMapMarkerAlt, FaBriefcase, FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

const talentsData = [
  {
    id: 1,
    name: "Alex Johnson",
    title: "Senior Software Engineer",
    location: "San Francisco",
    experience: "8 years",
    skills: ["JavaScript", "React", "Node.js", "AWS"],
    availability: "Available in 2 weeks",
    bio: "Full-stack developer with extensive experience in building scalable web applications.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    title: "UX Designer",
    location: "Remote",
    experience: "5 years",
    skills: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
    availability: "Immediately available",
    bio: "Passionate about creating intuitive user experiences with a focus on accessibility.",
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Data Scientist",
    location: "New York",
    experience: "3 years",
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
    availability: "Available in 1 month",
    bio: "Data enthusiast specializing in predictive modeling and data-driven decision making.",
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    title: "Product Manager",
    location: "London",
    experience: "6 years",
    skills: ["Agile", "Product Strategy", "Market Research", "Roadmapping"],
    availability: "Part-time availability",
    bio: "Product leader with experience in both startups and enterprise environments.",
  },
  {
    id: 5,
    name: "David Kim",
    title: "DevOps Engineer",
    location: "Berlin",
    experience: "4 years",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    availability: "Freelance",
    bio: "Infrastructure specialist focused on building reliable and scalable systems.",
  },
];

const FindTalent = () => {
  const [activeFilters, setActiveFilters] = useState({
    name: "",
    jobTitle: [],
    location: [],
    skills: [],
    experience: [0, 20],
  });

  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const handleFilterChange = (newFilters) => {
    setActiveFilters(newFilters);
  };

  const handleClearFilters = () => {
    setActiveFilters({
      name: "",
      jobTitle: [],
      location: [],
      skills: [],
      experience: [0, 20],
    });
    setSearchQuery("");
  };

  const filteredTalents = talentsData.filter((talent) => {
    const experienceYears = parseInt(talent.experience, 10) || 0;

    const matchesSearch =
      searchQuery === "" ||
      talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talent.bio.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesName =
      !activeFilters.name ||
      talent.name.toLowerCase().includes(activeFilters.name.toLowerCase());
    

    const matchesTitle =
      activeFilters.jobTitle.length === 0 ||
      activeFilters.jobTitle.includes(talent.title);

    const matchesLocation =
      activeFilters.location.length === 0 ||
      activeFilters.location.includes(talent.location);

    const matchesSkills =
      activeFilters.skills.length === 0 ||
      activeFilters.skills.some((skill) => talent.skills.includes(skill));

    const matchesExperience =
      experienceYears >= activeFilters.experience[0] &&
      experienceYears <= activeFilters.experience[1];

    return (
      matchesSearch &&
      matchesName &&
      matchesTitle &&
      matchesLocation &&
      matchesSkills &&
      matchesExperience
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
            Find Top Talent
          </h1>
          <p className="text-primary-300 text-center max-w-2xl mx-auto">
            Discover skilled professionals ready for your next project
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
              placeholder="Search by name, skills, or role"
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
            <TalentFilter
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
                {filteredTalents.length}{" "}
                {filteredTalents.length === 1 ? "Talent" : "Talents"} Found
              </h2>
            </motion.div>

            {filteredTalents.length > 0 ? (
              <div className="space-y-6">
                {filteredTalents.map((talent) => (
                  <motion.div
                    key={talent.id}
                    whileHover={{ scale: 1.01 }}
                    className="bg-primary-900 border border-primary-800 rounded-lg p-6 hover:border-secondary-500/50 transition-all duration-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary-100 mb-1">
                          {talent.name}
                        </h3>
                        <p className="text-primary-300 mb-2">{talent.title}</p>
                        <div className="flex flex-wrap gap-3 mt-3">
                          <span className="flex items-center text-sm text-primary-200">
                            <FaMapMarkerAlt className="mr-1 text-secondary-500" />
                            {talent.location}
                          </span>
                          <span className="flex items-center text-sm text-primary-200">
                            <FaBriefcase className="mr-1 text-secondary-500" />
                            {talent.experience} experience
                          </span>
                          <span className="flex items-center text-sm text-primary-200">
                            <FaUser className="mr-1 text-secondary-500" />
                            {talent.availability}
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {talent.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-primary-800 text-primary-200 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => router.push(`/find-talent/${talent.id}`)}
                          className="px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-primary-100 font-medium rounded-lg transition-colors duration-200"
                        >
                          View Profile
                        </button>
                      </div>
                    </div>
                    <p className="mt-4 text-primary-300">{talent.bio}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-primary-900 border border-primary-800 rounded-lg p-8 text-center"
              >
                <h3 className="text-xl font-medium mb-2">No talents found</h3>
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

export default FindTalent;
