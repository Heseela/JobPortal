"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const TalentContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    reset();
  };

  return (
    <div className="bg-primary-800 rounded-lg p-6 mt-8">
      <h2 className="text-lg font-semibold mb-4">Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-primary-400 text-sm mb-1">Email</label>
          <input
            type="email"
            {...register("email")}
            placeholder="Your email"
            className="w-full bg-primary-900 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-1 focus:ring-secondary-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block text-primary-400 text-sm mb-1">Message</label>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Your message"
            className="w-full bg-primary-900 border border-primary-700 rounded-lg py-2 px-3 text-primary-100 focus:outline-none focus:ring-1 focus:ring-secondary-500"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-primary-100 font-medium rounded-lg transition-colors duration-200"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default TalentContactForm;
