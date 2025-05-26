"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const loginSchema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
      toast.success('Logged in successfully!');
      reset();
    } catch (error) {
      toast.error('Login failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const RequiredField = () => <span className="text-red-500">*</span>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-950 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-primary-900/50 border border-primary-800 rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-primary-100 mb-8 text-center">Login</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label htmlFor="email" className="block text-primary-200 mb-2">
              Email <RequiredField />
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-primary-400" />
              </div>
              <input
                type="email"
                id="email"
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
            <label htmlFor="password" className="block text-primary-200 mb-2">
              Password <RequiredField />
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-primary-400" />
              </div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className={`w-full bg-primary-900 border ${errors.password ? 'border-secondary-500' : 'border-primary-800'} rounded-lg pl-10 pr-4 py-3 text-primary-100 focus:outline-none focus:border-secondary-500 transition-colors duration-300`}
                {...register('password')}
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-secondary-500">{errors.password.message}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-secondary-500 hover:bg-secondary-600 text-primary-100 font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSubmitting ? 'Logging in...' : 'Login'} <FaArrowRight />
            </motion.button>
          </motion.div>
        </form>

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