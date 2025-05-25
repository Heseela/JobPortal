// import { Avatar, Indicator } from "@mantine/core";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { FaBriefcase } from "react-icons/fa"; //
// import { FiBell, FiSettings } from "react-icons/fi";

// function Header() {
//   return (
//     <header className="bg-primary-950 text-white py-4 px-6">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <div className="flex items-center space-x-2 text-secondary-400">
//           <Link href="/" className="flex items-center space-x-2">
//             <FaBriefcase className="text-secondary-400 text-2xl" />
//             <span className="text-xl font-bold">HireSphere</span>
//           </Link>
//         </div>

//         <nav className="hidden md:flex space-x-8">
//           <Link href="/find-jobs" className="hover:text-secondary-400 hover:underline hover:underline-secondary-400">
//             Find Jobs
//           </Link>
//           <Link href="/find-talent" className="hover:text-gray-400">
//             Find Talent
//           </Link>
//           <Link href="/upload-job" className="hover:text-gray-400">
//             Upload Job
//           </Link>
//           <Link href="/about-us" className="hover:text-gray-400">
//             About Us
//           </Link>
//         </nav>

//         <div className="flex items-center space-x-4">
//           <div className="flex items-center space-x-2">
//             <span>Marshal</span>

//             <Image
//               src="/avatar.png"
//               alt="User Avatar"
//               width={32}
//               height={32}
//               className="rounded-full object-cover"
//             />
//           </div>

//           <Link href="/settings" className="bg-primary-800 p-2 rounded-full">
//             <FiSettings className="text-xl" />
//           </Link>

//           <Link
//             href="/notifications"
//             className="bg-primary-800 p-2 rounded-full"
//           >
//               <FiBell className="text-xl" />
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

"use client";
import { Indicator, Menu, Burger } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { FiBell, FiSettings } from "react-icons/fi";

function Header() {
  const [mobileOpened, setMobileOpened] = useState(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const navLinks = [
    { href: "/find-jobs", label: "Find Jobs" },
    { href: "/find-talent", label: "Find Talent" },
    { href: "/upload-job", label: "Upload Job" },
    { href: "/about-us", label: "About Us" },
  ];

  return (
    <header className="bg-primary-950 text-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-2 text-secondary-400">
          <Link
            href="/"
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-secondary-400 rounded"
            aria-label="Home"
          >
            <FaBriefcase className="text-secondary-400 text-2xl" />
            <span className="text-xl font-bold">HireSphere</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-secondary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-400 rounded px-2 py-1"
              aria-label={link.label}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Burger
          opened={mobileOpened}
          onClick={() => setMobileOpened((o) => !o)}
          className="md:hidden"
          aria-label="Toggle navigation"
        />

        <div className="flex items-center space-x-4">
          <Menu
            width={200}
            position="bottom-end"
            transitionProps={{ transition: "pop-top-right" }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <div className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-secondary-400 rounded-full">
                <span className="sr-only sm:not-sr-only">Marshal</span>
                <Image
                  src="/avatar.png"
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              </div>
            </Menu.Target>
            <Link href="/settings" className="bg-primary-800 p-2 rounded-full">
              <FiSettings className="text-xl" />
            </Link>

            <Link
              href="/notifications"
              className="bg-primary-800 p-2 rounded-full"
            >
              <FiBell className="text-xl" />
            </Link>

            <Menu.Dropdown>
              <Menu.Item component={Link} href="/profile">
                Profile
              </Menu.Item>
              <Menu.Item component={Link} href="/settings">
                Settings
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item color="red">Logout</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpened && (
        <nav className="md:hidden bg-primary-900 py-4 px-6">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-secondary-400 py-2 px-4 rounded hover:bg-primary-800 transition-colors"
                onClick={() => setMobileOpened(false)}
                aria-label={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
