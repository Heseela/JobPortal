"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const jobPostSchema = z.object({
  jobTitle: z.string().min(1, "Job title is required"),
  experience: z.string().min(1, "Experience level is required"),
  jobType: z.string().min(1, "Job type is required"),
  location: z.string().min(1, "Location is required"),
  company: z.string().min(1, "Company is required"),
  salary: z.string().min(1, "Salary is required"),
  skills: z.string().min(1, "Skills are required"),
  jobDescription: z.string().min(1, "Job description is required"),
  responsibilities: z.string().min(1, "Responsibilities are required"),
  qualifications: z.string().min(1, "Qualifications are required"),
});

const PostJob = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const jobTitles = [
    "Software Engineer",
    "UX Designer",
    "Product Manager",
    "Data Scientist",
    "DevOps Engineer",
  ];

  const experienceLevels = ["Entry Level", "Intermediate", "Expert"];
  const jobTypes = [
    "Full Time",
    "Part Time",
    "Contract",
    "Freelance",
    "Internship",
  ];
  const locations = ["Remote", "New York", "San Francisco", "London", "Berlin"];
  const companies = ["Google", "Microsoft", "Netflix", "Other"];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(jobPostSchema),
    defaultValues: {
      jobTitle: "",
      experience: "",
      jobType: "",
      location: "",
      company: "",
      salary: "",
      skills: "",
      jobDescription: "",
      responsibilities: "",
      qualifications: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Job posted:", data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error("Error posting job:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const RequiredField = () => <span className="text-red-400">*</span>;

  return (
    <div className="min-h-screen text-primary-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-left"
        >
          <h1 className="text-3xl font-bold mb-2">Post a Job</h1>
        </motion.div>

        {submitSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-primary-900/30 border border-secondary-200 rounded-lg p-6 text-center"
          >
            <h3 className="text-xl font-medium mb-2 text-secondary-400">
              Job Posted Successfully!
            </h3>
            <p className="text-secondary-300 mb-4">
              Your job listing has been submitted.
            </p>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(234, 179, 8, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mx-auto"
            >
              <button
                onClick={() => setSubmitSuccess(false)}
                className="px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-primary-100 font-medium rounded-lg transition-colors duration-200"
              >
                Post Another Job
              </button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-primary-200 font-medium mb-2">
                    Job Title <RequiredField />
                  </label>
                  <select
                    {...register("jobTitle")}
                    className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  >
                    <option value="" disabled>
                      Select a job title
                    </option>
                    {jobTitles.map((title) => (
                      <option key={title} value={title}>
                        {title}
                      </option>
                    ))}
                  </select>
                  {errors.jobTitle && (
                    <p className="mt-1 text-sm text-secondary-500">
                      {errors.jobTitle.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-primary-200 font-medium mb-2">
                    Experience Level <RequiredField />
                  </label>
                  <select
                    {...register("experience")}
                    className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  >
                    <option value="" disabled>
                      Select experience level
                    </option>
                    {experienceLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                  {errors.experience && (
                    <p className="mt-1 text-sm text-secondary-500">
                      {errors.experience.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-primary-200 font-medium mb-2">
                    Job Type <RequiredField />
                  </label>
                  <select
                    {...register("jobType")}
                    className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  >
                    <option value="" disabled>
                      Select job type
                    </option>
                    {jobTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.jobType && (
                    <p className="mt-1 text-sm text-secondary-500">
                      {errors.jobType.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-primary-200 font-medium mb-2">
                    Location <RequiredField />
                  </label>
                  <select
                    {...register("location")}
                    className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  >
                    <option value="" disabled>
                      Select location
                    </option>
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                  {errors.location && (
                    <p className="mt-1 text-sm text-secondary-500">
                      {errors.location.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-primary-200 font-medium mb-2">
                    Company <RequiredField />
                  </label>
                  <select
                    {...register("company")}
                    className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  >
                    <option value="" disabled>
                      Select company
                    </option>
                    {companies.map((company) => (
                      <option key={company} value={company}>
                        {company}
                      </option>
                    ))}
                  </select>
                  {errors.company && (
                    <p className="mt-1 text-sm text-secondary-500">
                      {errors.company.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-primary-200 font-medium mb-2">
                    Salary <RequiredField />
                  </label>
                  <input
                    type="text"
                    {...register("salary")}
                    placeholder="e.g. $80,000 - $100,000"
                    className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  />
                  {errors.salary && (
                    <p className="mt-1 text-sm text-secondary-500">
                      {errors.salary.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-primary-200 font-medium mb-2">
                  Skills (comma separated) <RequiredField />
                </label>
                <input
                  type="text"
                  {...register("skills")}
                  placeholder="e.g. JavaScript, React, Node.js"
                  className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                />
                {errors.skills && (
                  <p className="mt-1 text-sm text-secondary-500">
                    {errors.skills.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-primary-200 font-medium mb-2">
                  Job Description <RequiredField />
                </label>
                <textarea
                  {...register("jobDescription")}
                  rows={3}
                  placeholder="Write description here..."
                  className="resize-none w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                ></textarea>
                {errors.jobDescription && (
                  <p className="mt-1 text-sm text-secondary-500">
                    {errors.jobDescription.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-primary-200 font-medium mb-2">
                  Responsibilities <RequiredField />
                </label>
                <textarea
                  {...register("responsibilities")}
                  rows={3}
                  placeholder="Add responsibilities here"
                  className="resize-none w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent whitespace-pre-line"
                ></textarea>

                {errors.responsibilities && (
                  <p className="mt-1 text-sm text-secondary-500">
                    {errors.responsibilities.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-primary-200 font-medium mb-2">
                  Qualifications and Skill Sets <RequiredField />
                </label>
                <textarea
                  {...register("qualifications")}
                  rows={3}
                  placeholder="Add required qualification and skill set here"
                  className="resize-none w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent whitespace-pre-line"
                ></textarea>

                {errors.qualifications && (
                  <p className="mt-1 text-sm text-secondary-500">
                    {errors.qualifications.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-primary-100 font-medium rounded-lg transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Posting...
                    </span>
                  ) : (
                    "Post Job"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PostJob;
