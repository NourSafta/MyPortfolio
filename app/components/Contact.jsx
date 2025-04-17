"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "d11e7263-415f-459d-b955-5e2dc83314ac");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("✅ Message sent successfully!");
        event.target.reset();
      } else {
        setResult(`❌ ${data.message}`);
        console.error("Submission error:", data);
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult("❌ An error occurred. Please try again.");
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full px-6 md:px-16 xl:px-[12%] py-16 scroll-mt-20 
    bg-[url('/footer-bg-color.png')] dark:bg-none bg-no-repeat bg-center bg-[length:100%_auto]"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-Ovo"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300"
      >
        I’m always open to discussing new projects, creative ideas, or
        opportunities to collaborate. Use the form below to reach out!
      </motion.p>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <label
              htmlFor="name"
              className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              className="p-3 outline-none border border-gray-400 rounded-md bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <label
              htmlFor="email"
              className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="p-3 outline-none border border-gray-400 rounded-md bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <label
            htmlFor="message"
            className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            required
            placeholder="Enter your message"
            className="w-full p-4 outline-none border border-gray-400 rounded-md bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 mb-6"
          ></textarea>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer"
        >
          Submit now
          <Image
            src={assets.right_arrow_white}
            alt="Arrow pointing right"
            className="w-4"
          />
        </motion.button>

        {result && (
          <p
            className={`mt-4 text-center font-medium ${
              result.includes("✅")
                ? "text-green-600"
                : result.includes("❌")
                ? "text-red-500"
                : "text-gray-700"
            }`}
          >
            {result}
          </p>
        )}
      </motion.form>

      <p className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400">
        Prefer a faster route? Feel free to{" "}
        <a
          href="mailto:saftanour@gmail.com"
          className="text-green-700 font-medium hover:underline"
        >
          email me directly
        </a>
        .
      </p>
    </motion.section>
  );
};

export default Contact;
