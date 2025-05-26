// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// const PostJob = () => {
//   const [formData, setFormData] = useState({
//     jobTitle: "",
//     experience: "",
//     jobType: "",
//     location: "",
//     company: "",
//     salary: "",
//     skills: "",
//     aboutJob: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const jobTitles = [
//     "Software Engineer",
//     "UX Designer",
//     "Product Manager",
//     "Data Scientist",
//     "DevOps Engineer",
//   ];

//   const experienceLevels = ["Entry Level", "Intermediate", "Expert"];
//   const jobTypes = [
//     "Full Time",
//     "Part Time",
//     "Contract",
//     "Freelance",
//     "Internship",
//   ];
//   const locations = ["Remote", "New York", "San Francisco", "London", "Berlin"];
//   const companies = ["Google", "Microsoft", "Netflix", "Other"];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       console.log("Job posted:", formData);
//       setSubmitSuccess(true);
//       setFormData({
//         jobTitle: "",
//         experience: "",
//         jobType: "",
//         location: "",
//         company: "",
//         salary: "",
//         skills: "",
//         aboutJob: "",
//       });
//     } catch (error) {
//       console.error("Error posting job:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen  text-primary-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="mb-8 text-left"
//         >
//           <h1 className="text-3xl font-bold mb-2">Post a Job</h1>
//           {/* <p className="text-primary-300">
//             Fill out the form below to list your job opening
//           </p> */}
//         </motion.div>

//         {submitSuccess ? (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="bg-primary-900/30 border border-secondary-200 rounded-lg p-6 text-center"
//           >
//             <h3 className="text-xl font-medium mb-2 text-secondary-400">
//               Job Posted Successfully!
//             </h3>
//             <p className="text-secondary-300 mb-4">
//               Your job listing has been submitted.
//             </p>

//             <motion.div
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 0 15px rgba(234, 179, 8, 0.4)",
//               }}
//               whileTap={{ scale: 0.98 }}
//               className="inline-block mx-auto"
//             >
//               <button
//                 onClick={() => setSubmitSuccess(false)}
//                 className="px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-primary-100 font-medium rounded-lg transition-colors duration-200"
//               >
//                 Post Another Job
//               </button>
//             </motion.div>
//           </motion.div>
//         ) : (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className=""
//           >
//             <form onSubmit={handleSubmit}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <label className="block text-primary-200 font-medium mb-2">
//                     Job Title
//                   </label>
//                   <select
//                     name="jobTitle"
//                     value={formData.jobTitle}
//                     onChange={handleChange}
//                     className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
//                     required
//                   >
//                     <option value="" disabled>
//                       Select a job title
//                     </option>
//                     {jobTitles.map((title) => (
//                       <option key={title} value={title}>
//                         {title}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-primary-200 font-medium mb-2">
//                     Experience Level
//                   </label>
//                   <select
//                     name="experience"
//                     value={formData.experience}
//                     onChange={handleChange}
//                     className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
//                     required
//                   >
//                     <option value="" disabled>
//                       Select experience level
//                     </option>
//                     {experienceLevels.map((level) => (
//                       <option key={level} value={level}>
//                         {level}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-primary-200 font-medium mb-2">
//                     Job Type
//                   </label>
//                   <select
//                     name="jobType"
//                     value={formData.jobType}
//                     onChange={handleChange}
//                     className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
//                     required
//                   >
//                     <option value="" disabled>
//                       Select job type
//                     </option>
//                     {jobTypes.map((type) => (
//                       <option key={type} value={type}>
//                         {type}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-primary-200 font-medium mb-2">
//                     Location
//                   </label>
//                   <select
//                     name="location"
//                     value={formData.location}
//                     onChange={handleChange}
//                     className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
//                     required
//                   >
//                     <option value="" disabled>
//                       Select location
//                     </option>
//                     {locations.map((loc) => (
//                       <option key={loc} value={loc}>
//                         {loc}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-primary-200 font-medium mb-2">
//                     Company
//                   </label>
//                   <select
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
//                     required
//                   >
//                     <option value="" disabled>
//                       Select company
//                     </option>
//                     {companies.map((company) => (
//                       <option key={company} value={company}>
//                         {company}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-primary-200 font-medium mb-2">
//                     Salary
//                   </label>
//                   <input
//                     type="text"
//                     name="salary"
//                     value={formData.salary}
//                     onChange={handleChange}
//                     placeholder="e.g. $80,000 - $100,000"
//                     className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label className="block text-primary-200 font-medium mb-2">
//                   Skills (comma separated)
//                 </label>
//                 <input
//                   type="text"
//                   name="skills"
//                   value={formData.skills}
//                   onChange={handleChange}
//                   placeholder="e.g. JavaScript, React, Node.js"
//                   className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
//                   required
//                 />
//               </div>

//               <div className="mb-6">
//                 <label className="block text-primary-200 font-medium mb-2">
//                   About the Job
//                 </label>
//                 <textarea
//                   name="aboutJob"
//                   value={formData.aboutJob}
//                   onChange={handleChange}
//                   rows={4}
//                   placeholder="Describe the job responsibilities, requirements, and benefits..."
//                   className="resize-none w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
//                   required
//                 ></textarea>
//               </div>

//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-primary-100 font-medium rounded-lg transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
//                 >
//                   {isSubmitting ? (
//                     <span className="flex items-center">
//                       <svg
//                         className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <circle
//                           className="opacity-25"
//                           cx="12"
//                           cy="12"
//                           r="10"
//                           stroke="currentColor"
//                           strokeWidth="4"
//                         ></circle>
//                         <path
//                           className="opacity-75"
//                           fill="currentColor"
//                           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                         ></path>
//                       </svg>
//                       Posting...
//                     </span>
//                   ) : (
//                     "Post Job"
//                   )}
//                 </button>
//               </div>
//             </form>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PostJob;


"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const PostJob = () => {
  const [formData, setFormData] = useState({
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
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Job posted:", formData);
      setSubmitSuccess(true);
      setFormData({
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
      });
    } catch (error) {
      console.error("Error posting job:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-primary-200 font-medium mb-2">
                    Job Title
                  </label>
                  <select
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                    required
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
                </div>

                <div>
                  <label className="block text-primary-200 font-medium mb-2">
                    Experience Level
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                    required
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
                </div>

                <div>
                  <label className="block text-primary-200 font-medium mb-2">
                    Job Type
                  </label>
                  <select
                    name="jobType"
                    value={formData.jobType}
                    onChange={handleChange}
                    className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                    required
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
                </div>

                <div>
                  <label className="block text-primary-200 font-medium mb-2">
                    Location
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                    required
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
                </div>

                <div>
                  <label className="block text-primary-200 font-medium mb-2">
                    Company
                  </label>
                  <select
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                    required
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
                </div>

                <div>
                  <label className="block text-primary-200 font-medium mb-2">
                    Salary
                  </label>
                  <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    placeholder="e.g. $80,000 - $100,000"
                    className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-primary-200 font-medium mb-2">
                  Skills (comma separated)
                </label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="e.g. JavaScript, React, Node.js"
                  className="w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-primary-200 font-medium mb-2">
                  Job Description
                </label>
                <textarea
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Write description here..."
                  className="resize-none w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="block text-primary-200 font-medium mb-2">
                  Responsibilities
                </label>
                <textarea
                  name="responsibilities"
                  value={formData.responsibilities}
                  onChange={handleChange}
                  rows={4}
                  placeholder="- Add responsibilities here...\n- Use bullet points\n- One per line"
                  className="resize-none w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent whitespace-pre-line"
                ></textarea>
                <p className="text-sm text-primary-400 mt-1">
                  Use bullet points (start each line with "- ")
                </p>
              </div>

              <div className="mb-6">
                <label className="block text-primary-200 font-medium mb-2">
                  Qualifications and Skill Sets
                </label>
                <textarea
                  name="qualifications"
                  value={formData.qualifications}
                  onChange={handleChange}
                  rows={4}
                  placeholder="- Add required qualification and skill set here...\n- Use bullet points\n- One per line"
                  className="resize-none w-full bg-primary-800 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent whitespace-pre-line"
                ></textarea>
                <p className="text-sm text-primary-400 mt-1">
                  Use bullet points (start each line with "- ")
                </p>
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