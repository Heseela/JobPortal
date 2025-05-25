import React from "react";
import Image from "next/image";
import { FaSearch, FaBriefcase, FaClock } from "react-icons/fa";

function HomeBanner() {
  return (
    <div className="py-32 flex items-center justify-center px-4 sm:px-8 md:px-10 bg-primary-950">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-7xl">
        <div className="w-full md:w-[45%] flex justify-center">
          <Image
            src="/banner.jpg"
            alt="Career illustration"
            width={500}
            height={500}
            className="object-contain rounded-lg"
            priority
          />
        </div>

        <div className="w-full md:w-[45%] flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-primary-100">
            Find your <span className="text-secondary-500">dream job</span> with us
          </h1>
          <p className="text-lg text-primary-200">
            Good life begins with a good company. Start exploring thousands of jobs in one place.
          </p>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-primary-200 mb-1">Job Title</label>
                <div className="bg-primary-900 rounded-lg flex items-center px-3 py-2">
                  <FaBriefcase className="text-primary-300 mr-2" />
                  <input
                    type="text"
                    placeholder="Software Engineering"
                    className="bg-transparent w-full text-primary-100 placeholder:text-primary-300 focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <label className="block text-primary-200 mb-1">Job Type</label>
                <div className="bg-primary-900 rounded-lg flex items-center px-3 py-2">
                  <FaClock className="text-primary-300 mr-2" />
                  <input
                    type="text"
                    placeholder="FullTime"
                    className="bg-transparent w-full text-primary-100 placeholder:text-primary-300 focus:outline-none"
                  />
                </div>
              </div>
              
              <button className="h-[42px] self-end bg-secondary-500 hover:bg-secondary-600 text-primary-100 font-medium px-4 rounded-lg flex items-center justify-center transition-colors duration-200">
                <FaSearch className="mr-2" />
                Search
              </button>
            </div>

            {/* <div className="bg-primary-900 rounded-lg p-4 border border-primary-800">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg text-primary-100">Software Engineer</h3>
                  <div className="flex items-center mt-1 text-primary-200">
                    <FaBriefcase className="mr-2" />
                    <span>Fulltime</span>
                  </div>
                </div>
                <button className="border border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-primary-100 px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200">
                  Apply Now
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;