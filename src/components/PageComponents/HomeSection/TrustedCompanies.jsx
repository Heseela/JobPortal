"use client";

import React from 'react';
import Image from 'next/image';

const TrustedCompanies = () => {
  const companies = [
    { id: 1, logo: '/netflix.png', alt: 'companies 1' },
    { id: 2, logo: '/pininterest.png', alt: 'companies 2' },
    { id: 3, logo: '/microsoft.png', alt: 'companies 3' },
    { id: 4, logo: '/meta.jpeg', alt: 'companies 4' },
    { id: 5, logo: '/slack.png', alt: 'companies 5' },
  ];

  return (
    <div className="py-10 text-center">  
      <div className=" mx-auto relative z-10">
        <h2 className="text-4xl font-bold leading-tight text-primary-100 pb-10">
        
          Trusted by <span className='text-secondary-400'>1000+</span> companies
         
        </h2>

        <div className="relative">
          {/* <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-primary-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-primary-900 to-transparent z-10"></div> */}
          
          <div className="flex overflow-hidden">
            <div className="flex items-center py-4" style={{
              animation: 'infinite-scroll 30s linear infinite',
              display: 'flex',
              width: 'max-content'
            }}>
              {[...companies, ...companies].map((companies, index) => (
                <div 
                  key={`${companies.id}-${index}`} 
                  className="flex-shrink-0 px-8 transition-all duration-500 hover:scale-110"
                >
                  <div className="p-6 rounded-xl  transition-all duration-300">
                    <Image
                      src={companies.logo}
                      alt={companies.alt}
                      width={180}
                      height={90}
                      className="object-contain h-16 w-32 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;