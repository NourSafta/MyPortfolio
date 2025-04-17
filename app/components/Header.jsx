import { assets } from "../../assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="Profile picture of Nour Safta"
          className="rounded-full w-32 mt-25"
        />
      </motion.div>

      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hey! I'm Nour Safta <span className="text-2xl">✨</span>
      </motion.h1>

      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-Ovo"
      >
        Software Engineer based in Tunisia.
      </motion.h2>

      <div className="max-w-2xl mx-auto text-left font-Ovo text-lg">
        <button
          onClick={() => setShowIntro((prev) => !prev)}
          className="flex items-center gap-2 text-green-700 hover:text-green-900 transition-colors mb-3 group"
        >
          <motion.div
            animate={{ rotate: showIntro ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-5 h-5 text-green-600"
          >
            <ChevronDownIcon className="cursor-pointer" />
          </motion.div>
          <span className="font-medium text-base group-hover:underline underline-offset-4 cursor-pointer">
            {showIntro ? "Hide intro" : "Show intro"}
          </span>
        </button>

        <AnimatePresence>
          {showIntro && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.4 }}
              className="pl-5 border-l-4 border-green-400 bg-green-50/30 p-4 rounded-md"
            >
              <p className="leading-relaxed">
                I build smooth UIs, explore digital mysteries, and have a soft
                spot for clean code and K-dramas 🎬. With experience in
                front-end development, AI, and cybersecurity, I create secure,
                thoughtful apps that look as good as they perform. Driven by
                curiosity and a love for detail, I approach every project like a
                detective — solving tech puzzles and dreaming up the next big
                thing.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          aria-label="Contact Nour Safta"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(0,0,0,0.9)",
            boxShadow: "0 0 20px rgba(255,255,255,0.7)",
          }}
          whileTap={{
            scale: 0.95,
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 relative overflow-hidden group"
        >
          <span className="relative z-10 text-lg">contact me</span>
          <motion.span
            className="relative z-10"
            whileHover={{
              x: [0, 5, 0],
              transition: {
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            <Image
              src={assets.right_arrow_white}
              alt="Right arrow icon"
              className="w-4"
            />
          </motion.span>
        </motion.a>

        <motion.a
          aria-label="Download Nour Safta resume"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{
            y: -4,
            backgroundColor: "#f0f0f0",
            borderColor: "#999",
            boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
          }}
          whileTap={{
            y: 0,
            scale: 0.96,
            backgroundColor: "#e0e0e0",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href="/assets/public/nour-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white text-black relative group"
        >
          <span className="relative z-10 text-lg">my resume</span>
          <motion.span
            className="relative z-10"
            whileHover={{ y: 3 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={assets.download_icon}
              alt="Download icon"
              className="w-4"
            />
          </motion.span>

          {/* Updated Tooltip: appears immediately on hover of the entire button */}
          <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in-out pointer-events-none">
            <div className="relative bg-black text-white text-sm px-4 py-3 rounded-lg whitespace-nowrap">
              Download it, you won't regret it! 😉
              <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-black transform rotate-45"></div>
            </div>
          </div>
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
