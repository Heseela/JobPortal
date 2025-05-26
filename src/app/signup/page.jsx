"use client";

import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const signupSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string()
    .min(6, 'Password must be at least 6 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string().min(1, 'Please confirm your password'),
  role: z.enum(['applicant', 'employer'])
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      role: 'applicant'
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
      toast.success('Account created successfully!');
      reset();
    } catch (error) {
      toast.error('Signup failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRoleChange = (role) => {
    setValue('role', role);
  };

  const RequiredField = () => <span className="text-red-500">*</span>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-950 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-primary-900/50 border border-primary-800 rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-primary-100 mb-8 text-center">Create Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label className="block text-primary-200 mb-2">
              Full Name <RequiredField />
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-primary-400" />
              </div>
              <input
                type="text"
                placeholder="Your name"
                className={`w-full bg-primary-900 border ${errors.fullName ? 'border-secondary-500' : 'border-primary-800'} rounded-lg pl-10 pr-4 py-3 text-primary-100 focus:outline-none focus:border-secondary-500 transition-colors duration-300`}
                {...register('fullName')}
              />
            </div>
            {errors.fullName && (
              <p className="mt-1 text-sm text-secondary-500">{errors.fullName.message}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            <label className="block text-primary-200 mb-2">
              Email <RequiredField />
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-primary-400" />
              </div>
              <input
                type="email"
                placeholder="Your email"
                className={`w-full bg-primary-900 border ${errors.email ? 'border-secondary-500' : 'border-primary-800'} rounded-lg pl-10 pr-4 py-3 text-primary-100 focus:outline-none focus:border-secondary-500 transition-colors duration-300`}
                {...register('email')}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-secondary-500">{errors.email.message}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-primary-200 mb-2">
              Password <RequiredField />
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-primary-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`w-full bg-primary-900 border ${errors.password ? 'border-secondary-500' : 'border-primary-800'} rounded-lg pl-10 pr-10 py-3 text-primary-100 focus:outline-none focus:border-secondary-500 transition-colors duration-300`}
                {...register('password')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-primary-400 hover:text-primary-300"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-secondary-500">{errors.password.message}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label className="block text-primary-200 mb-2">
              Confirm Password <RequiredField />
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-primary-400" />
              </div>
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm password"
                className={`w-full bg-primary-900 border ${errors.confirmPassword ? 'border-secondary-500' : 'border-primary-800'} rounded-lg pl-10 pr-10 py-3 text-primary-100 focus:outline-none focus:border-secondary-500 transition-colors duration-300`}
                {...register('confirmPassword')}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-primary-400 hover:text-primary-300"
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-secondary-500">{errors.confirmPassword.message}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="pt-2"
          >
            <label className="block text-primary-200 mb-2">
              You are? <RequiredField />
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
                    watch('role') === type
                      ? "bg-secondary-500 text-primary-100 border-secondary-500"
                      : "bg-primary-900 text-primary-200 border-primary-800"
                  }`}
                >
                  <span className="capitalize">{type}</span>
                </motion.button>
              ))}
            </div>
            <input type="hidden" {...register('role')} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-secondary-500 hover:bg-secondary-600 text-primary-100 font-medium py-3 px-4 rounded-lg transition-colors duration-300 disabled:opacity-70"
            >
              {isSubmitting ? 'Creating account...' : 'Sign Up'}
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