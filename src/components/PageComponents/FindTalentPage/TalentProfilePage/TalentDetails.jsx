"use client";

import { FaMapMarkerAlt, FaBriefcase, FaUser } from "react-icons/fa";
import TalentContactForm from "./TalentContactForm";
import Image from "next/image";

const TalentDetails = ({ talent }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3">
      <div className="relative aspect-square w-full rounded-lg overflow-hidden mb-4">
          <Image
            src={talent.image}
            alt={talent.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
        <h1 className="text-2xl font-bold">{talent.name}</h1>
        <p className="text-primary-300 mb-4">{talent.title}</p>

        <div className="space-y-3">
          <div className="flex items-center text-primary-200">
            <FaMapMarkerAlt className="mr-2 text-secondary-500" />
            {talent.location}
          </div>
          <div className="flex items-center text-primary-200">
            <FaBriefcase className="mr-2 text-secondary-500" />
            {talent.experience} experience
          </div>
          <div className="flex items-center text-primary-200">
            <FaUser className="mr-2 text-secondary-500" />
            {talent.availability}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {talent.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-primary-800 text-primary-200 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="md:w-2/3">
        <h2 className="text-xl font-semibold mb-4">About</h2>
        <p className="text-primary-300">{talent.bio}</p>
        <TalentContactForm/>
      </div>
    </div>
  );
};

export default TalentDetails;
