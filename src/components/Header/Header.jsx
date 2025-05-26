"use client";
import { Burger } from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { FiBell, FiSettings } from "react-icons/fi";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


function Header() {
  const [mobileOpened, setMobileOpened] = useState(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
const isLoggedIn = false; 

const router = useRouter();
  const navLinks = [
    { href: "/find-jobs", label: "Find Jobs" },
    { href: "/find-talent", label: "Find Talent" },
    { href: "/post-job", label: "Post Job" },
    { href: "/posted-job", label: "Posted Job" },
    { href: "/job-history", label: "Job History" },
  ];

 const handleNavClick = (href) => (e) => {
  e.preventDefault();
  if (!isLoggedIn) {
    router.push("/login");
  } else {
    router.push(href);
  }
  setMobileOpened(false); 
};

  const userIconLinks = [
    {
      href: "/settings",
      icon: <FiSettings className="text-xl" />,
      label: "Settings",
    },
    {
      href: "/notifications",
      icon: <FiBell className="text-xl" />,
      label: "Notifications",
    },
  ];

  const userMenuLinks = [
    { href: "/profile", label: "Profile" },
    { href: "/settings", label: "Settings" },
  ];

  return (
    <header className="bg-primary-950 text-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 text-secondary-500">
          <Link
            href="/"
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-secondary-500 rounded"
            aria-label="Home"
          >
            <FaBriefcase className="text-secondary-500 text-2xl" />
            <span className="text-xl font-bold">HireSphere</span>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              // onClick={handleNavClick(link.href)}
              className="hover:text-secondary-500 transition-colors duration-200 focus:outline-none rounded px-2 py-1"
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

        {/* <div className="flex items-center space-x-4">
          <Menu
            width={200}
            position="bottom-end"
            transitionProps={{ transition: "pop-top-right" }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <div className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-secondary-500 rounded-full">
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

            {userIconLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-primary-800 p-2 rounded-full"
                aria-label={link.label}
              >
                {link.icon}
              </Link>
            ))}

            <Menu.Dropdown>
              {userMenuLinks.map((link) => (
                <Menu.Item key={link.href} component={Link} href={link.href}>
                  {link.label}
                </Menu.Item>
              ))}
              <Menu.Divider />
              <Menu.Item color="red">Logout</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div> */}

        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(234, 179, 8, 0.4)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="/login"
            className="h-[42px] self-end bg-secondary-500 hover:bg-secondary-600 text-primary-100 font-medium px-4 rounded-lg flex items-center justify-center transition-colors duration-200"
          >
            Login
          </Link>
        </motion.div>
      </div>

      {mobileOpened && (
        <nav className="md:hidden bg-primary-900 py-4 px-6">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-secondary-500 py-2 px-4 rounded hover:bg-primary-800 transition-colors"
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
