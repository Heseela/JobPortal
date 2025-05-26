"use client";

import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Signup = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'applicant',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (role) => {
    setForm({ ...form, role });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    console.log(form);
    toast.success("Account created successfully!");

    setForm({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'applicant',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-950 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-primary-900/50 border border-primary-800 rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-primary-100 mb-8 text-center">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label className="block text-primary-200 mb-2">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-primary-400" />
              </div>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-primary-900 border border-primary-800 rounded-lg pl-10 pr-4 py-3 text-primary-100 focus:outline-none focus:border-secondary-500 transition-colors duration-300"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            <label className="block text-primary-200 mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-primary-400" />
              </div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full bg-primary-900 border border-primary-800 rounded-lg pl-10 pr-4 py-3 text-primary-100 focus:outline-none focus:border-secondary-500 transition-colors duration-300"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-primary-200 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-primary-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full bg-primary-900 border border-primary-800 rounded-lg pl-10 pr-10 py-3 text-primary-100 focus:outline-none focus:border-secondary-500 transition-colors duration-300"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-primary-400 hover:text-primary-300"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label className="block text-primary-200 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-primary-400" />
              </div>
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full bg-primary-900 border border-primary-800 rounded-lg pl-10 pr-10 py-3 text-primary-100 focus:outline-none focus:border-secondary-500 transition-colors duration-300"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-primary-400 hover:text-primary-300"
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-2"
          >
            <label className="block text-primary-200 mb-2">
              You are?
            </label>
            <div className="flex gap-4">
              {["applicant", "employer"].map((type) => (
                <motion.button
                  key={type}
                  type="button"
                  onClick={() => handleRoleChange(type)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-colors duration-300 ${
                    form.role === type
                      ? "bg-secondary-500 text-primary-100 border-secondary-500"
                      : "bg-primary-900 text-primary-200 border-primary-800"
                  }`}
                >
                  <span className="capitalize">{type}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-secondary-500 hover:bg-secondary-600 text-primary-100 font-medium py-3 px-4 rounded-lg transition-colors duration-300"
            >
              Sign Up
            </motion.button>
          </motion.div>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center"
        >
          <p className="text-primary-300">
            Already have an account?{' '}
            <Link href="/login" className="text-secondary-500 hover:underline">
              Login
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Signup;