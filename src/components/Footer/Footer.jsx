"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaSearch,
  FaBuilding,
  FaUserTie,
  FaQuestionCircle,
  FaCommentAlt,
  FaInfoCircle,
  FaBriefcase,
} from 'react-icons/fa';

const footerLinks = [
  {
    title: 'Product',
    delay: 0.2,
    links: [
      { href: '/jobs', icon: <FaSearch className="text-secondary-500" />, label: 'Find Job' },
      { href: '/post-job', icon: <FaBriefcase className="text-secondary-500" />, label: 'Post Job' },
      { href: '/employees', icon: <FaUserTie className="text-secondary-500" />, label: 'Find Employee' },
    ],
  },
  {
    title: 'Company',
    delay: 0.3,
    links: [
      { href: '/about', icon: <FaBuilding className="text-secondary-500" />, label: 'About Us' },
      { href: '/contact', icon: <FaEnvelope className="text-secondary-500" />, label: 'Contact' },
      { href: '/careers', icon: <FaInfoCircle className="text-secondary-500" />, label: 'Careers' },
    ],
  },
  {
    title: 'Support',
    delay: 0.4,
    links: [
      { href: '/help-center', icon: <FaQuestionCircle className="text-secondary-500" />, label: 'Help Center' },
      { href: '/feedback', icon: <FaCommentAlt className="text-secondary-500" />, label: 'Feedback' },
      { href: '/faqs', icon: <FaInfoCircle className="text-secondary-500" />, label: 'FAQs' },
    ],
  },
];

const Footer = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const isLoggedIn = false;

  const handleNavClick = (href) => (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      router.push(href);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Please enter your email');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email');
      return;
    }
    // Handle subscription logic here
    console.log('Subscribed with:', email);
    setEmail('');
    setEmailError('');
  };

  return (
    <footer className="w-full bg-primary-950 text-primary-100 pt-16 pb-8 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-100 mb-4">
            Never Want to Miss Any <span className="text-secondary-500">Job News?</span>
          </h2>
          <div className="flex flex-col gap-4 max-w-2xl">
            <p className="text-primary-200">
              Subscribe to our newsletter for the latest job opportunities and career tips.
            </p>
            <form onSubmit={handleSubscribe} noValidate>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 flex-col sm:flex-row">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError('');
                    }}
                    placeholder="Your@email.com"
                    className="flex-1 bg-primary-900 border border-primary-800 rounded-lg px-4 py-2 text-primary-100 focus:outline-none focus:border-secondary-500 transition-colors duration-300"
                    aria-label="Email address for newsletter subscription"
                    aria-invalid={!!emailError}
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-secondary-500 hover:bg-secondary-600 text-primary-100 font-medium px-6 py-2 rounded-lg transition-colors duration-300"
                    aria-label="Subscribe to newsletter"
                  >
                    Subscribe
                  </motion.button>
                </div>
                {emailError && (
                  <p className="text-red-400 text-sm" role="alert">
                    {emailError}
                  </p>
                )}
              </div>
            </form>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-6 text-secondary-500">HireSphere</h3>
            <p className="text-primary-200 mb-6">
              Job portal with user profiles, skill updates, certifications, work experience and admin job postings.
            </p>
          </motion.div>

          {footerLinks.map(({ title, links, delay }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-bold mb-6">{title}</h3>
              <nav aria-label={`${title} links`}>
                <ul className="flex flex-col gap-3">
                  {links.map(({ href, icon, label }) => (
                    <li key={href}>
                      <Link href={href} onClick={handleNavClick(href)}>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 text-primary-200 hover:text-primary-100 transition-colors duration-300"
                          aria-label={label}
                        >
                          {icon}
                          <span>{label}</span>
                        </motion.div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-primary-800 my-8"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-primary-400"
        >
          <p>
            Designed & Developed By <span className="font-bold text-secondary-500">Hishila Bhusal</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;