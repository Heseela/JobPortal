// "use client";

// import { useParams, useRouter } from "next/navigation";
// import { FaMapMarkerAlt, FaBriefcase, FaUser, FaArrowLeft } from "react-icons/fa";

// const talentsData = [
//     {
//       id: 1,
//       name: "Alex Johnson",
//       title: "Senior Software Engineer",
//       location: "San Francisco",
//       experience: "8 years",
//       skills: ["JavaScript", "React", "Node.js", "AWS"],
//       availability: "Available in 2 weeks",
//       bio: "Full-stack developer with extensive experience in building scalable web applications.",
//     },
//     {
//       id: 2,
//       name: "Sarah Williams",
//       title: "UX Designer",
//       location: "Remote",
//       experience: "5 years",
//       skills: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
//       availability: "Immediately available",
//       bio: "Passionate about creating intuitive user experiences with a focus on accessibility.",
//     },
//     {
//       id: 3,
//       name: "Michael Chen",
//       title: "Data Scientist",
//       location: "New York",
//       experience: "3 years",
//       skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
//       availability: "Available in 1 month",
//       bio: "Data enthusiast specializing in predictive modeling and data-driven decision making.",
//     },
//     {
//       id: 4,
//       name: "Emma Rodriguez",
//       title: "Product Manager",
//       location: "London",
//       experience: "6 years",
//       skills: ["Agile", "Product Strategy", "Market Research", "Roadmapping"],
//       availability: "Part-time availability",
//       bio: "Product leader with experience in both startups and enterprise environments.",
//     },
//     {
//       id: 5,
//       name: "David Kim",
//       title: "DevOps Engineer",
//       location: "Berlin",
//       experience: "4 years",
//       skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
//       availability: "Freelance",
//       bio: "Infrastructure specialist focused on building reliable and scalable systems.",
//     },
//   ];

// const TalentProfile = () => {
//   const router = useRouter();
//   const { id } = useParams();
//   const talent = talentsData.find(t => t.id === parseInt(id));

//   if (!talent) {
//     return (
//       <div className="min-h-screen bg-primary-950 text-primary-100 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-primary-900 border border-primary-800 rounded-lg p-8 text-center">
//             <h3 className="text-xl font-medium mb-2">Talent not found</h3>
//             <button
//               onClick={() => router.back()}
//               className="mt-4 px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-primary-100 font-medium rounded-lg transition-colors duration-200"
//             >
//               Go Back
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-primary-950 text-primary-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <button
//           onClick={() => router.back()}
//           className="flex items-center text-secondary-500 hover:text-secondary-400 mb-6 transition-colors duration-200"
//         >
//           <FaArrowLeft className="mr-2" />
//           Back to Talent List
//         </button>

//         <div className="bg-primary-900 border border-primary-800 rounded-lg p-8">
//           <div className="flex flex-col md:flex-row gap-8">
//             <div className="md:w-1/3">
//               <div className="bg-primary-800 aspect-square w-full rounded-lg mb-4"></div>
//               <h1 className="text-2xl font-bold">{talent.name}</h1>
//               <p className="text-primary-300 mb-4">{talent.title}</p>
              
//               <div className="space-y-3">
//                 <div className="flex items-center text-primary-200">
//                   <FaMapMarkerAlt className="mr-2 text-secondary-500" />
//                   {talent.location}
//                 </div>
//                 <div className="flex items-center text-primary-200">
//                   <FaBriefcase className="mr-2 text-secondary-500" />
//                   {talent.experience} experience
//                 </div>
//                 <div className="flex items-center text-primary-200">
//                   <FaUser className="mr-2 text-secondary-500" />
//                   {talent.availability}
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <h2 className="text-lg font-semibold mb-2">Skills</h2>
//                 <div className="flex flex-wrap gap-2">
//                   {talent.skills.map((skill) => (
//                     <span
//                       key={skill}
//                       className="px-3 py-1 bg-primary-800 text-primary-200 text-sm rounded-full"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="md:w-2/3">
//               <h2 className="text-xl font-semibold mb-4">About</h2>
//               <p className="text-primary-300 mb-6">{talent.bio}</p>

//               <div className="bg-primary-800 rounded-lg p-6">
//                 <h2 className="text-lg font-semibold mb-4">Contact</h2>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-primary-400 text-sm mb-1">Email</label>
//                     <input
//                       type="email"
//                       placeholder="Your email"
//                       className="w-full bg-primary-900 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-1 focus:ring-secondary-500"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-primary-400 text-sm mb-1">Message</label>
//                     <textarea
//                       placeholder="Your message"
//                       rows="4"
//                       className="w-full bg-primary-900 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-1 focus:ring-secondary-500"
//                     ></textarea>
//                   </div>
//                   <button className="px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-primary-100 font-medium rounded-lg transition-colors duration-200">
//                     Send Message
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TalentProfile;




"use client";

import TalentDetails from "@/components/PageComponents/FindTalentPage/TalentProfilePage/TalentDetails";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const talentsData = [
    {
      id: 1,
      image:'/girl1.avif',
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
      image:'/girl1.avif',
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
      image:'/girl1.avif',
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
      image:'/girl1.avif',
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

const TalentProfile = () => {
  const router = useRouter();
  const { id } = useParams();
  const talent = talentsData.find((t) => t.id === parseInt(id));

  if (!talent) {
    return (
      <div className="min-h-screen bg-primary-950 text-primary-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary-900 border border-primary-800 rounded-lg p-8 text-center">
            <h3 className="text-xl font-medium mb-2">Talent not found</h3>
            <button
              onClick={() => router.back()}
              className="mt-4 px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-primary-100 font-medium rounded-lg transition-colors duration-200"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-950 text-primary-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center text-secondary-500 hover:text-secondary-400 mb-6 transition-colors duration-200"
        >
          <FaArrowLeft className="mr-2" />
          Back to Talent List
        </button>

        <div className="bg-primary-900 border border-primary-800 rounded-lg p-8">
          <TalentDetails talent={talent} />
        </div>
      </div>
    </div>
  );
};

export default TalentProfile;
