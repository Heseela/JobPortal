"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login logic
    console.log({ email, password });

    toast.success('Logged in successfully!');

    // Reset form
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-950 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-primary-900/50 border border-primary-800 rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-primary-100 mb-8 text-center">Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label htmlFor="email" className="block text-primary-200 mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-primary-400" />
              </div>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="w-full bg-primary-900 border border-primary-800 rounded-lg pl-10 pr-4 py-3 text-primary-100 focus:outline-none focus:border-secondary-500 transition-colors duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </motion.div>

          {/* Password Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label htmlFor="password" className="block text-primary-200 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-primary-400" />
              </div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full bg-primary-900 border border-primary-800 rounded-lg pl-10 pr-4 py-3 text-primary-100 focus:outline-none focus:border-secondary-500 transition-colors duration-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </motion.div>

          {/* Login Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-secondary-500 hover:bg-secondary-600 text-primary-100 font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Login <FaArrowRight />
            </motion.button>
          </motion.div>
        </form>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center space-y-3"
        >
          <p className="text-primary-300">
            Don't have an account?{' '}
            <Link href="/signup" className="text-secondary-500 hover:underline">
              SignUp
            </Link>
          </p>
          <p className="text-primary-300">
            <Link href="/forgot-password" className="text-secondary-500 hover:underline">
              Forgot Password?
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
