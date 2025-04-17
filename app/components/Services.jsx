import { assets, serviceData } from "@/assets/assets";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Dialog } from "@headlessui/react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const serviceDetails = {
    "Web Design & Development": {
      description:
        "I build responsive, accessible, and performance-optimized websites using React, Next.js, Tailwind CSS, Node.js, MongoDB, and SQL. I prioritize security, scalability, and sleek UI.",
      tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "SQL"],
      projects: [
        { title: "DarkShare", link: "#darkshare" },
        { title: "ODC Platform", link: "#odc-platform" },
      ],
    },
    "Mobile App Development": {
      description:
        "I develop cross-platform mobile applications using React Native and native Java for Android, focusing on performance, fluid UX, and intuitive design.",
      tech: ["React Native", "Flutter", "Java", "Expo"],
      projects: [
        { title: "MentaloLife App", link: "#mentalolife" },
        { title: "Program Management System", link: "#program-management" },
      ],
    },
    "UI/UX Design": {
      description:
        "I design wireframes, prototypes, and interactive UI flows using Figma and Adobe XD, aiming for accessible and engaging experiences.",
      tech: ["Figma", "Adobe XD", "Balsamiq"],
      projects: [
        { title: "Cool Meals Website", link: "#cool-meals" },
        { title: "Movie Seat Reservation App", link: "#movie-seat" },
      ],
    },
    "Cybersecurity Consulting": {
      description:
        "I offer security-first architecture guidance, vulnerability assessments, and penetration testing. Tools include Wireshark, Burp Suite, Nmap, and Kali Linux.",
      tech: ["Burp Suite", "Wireshark", "Nmap", "Kali Linux"],
      projects: [{ title: "DarkShare", link: "#darkshare" }],
    },
    "AI-Powered Features": {
      description:
        "I integrate machine learning models and smart automation using TensorFlow and PyTorch, enabling predictive insights and real-time adaptation.",
      tech: ["TensorFlow", "PyTorch", "Python", "Jupyter"],
      projects: [{ title: "MentaloLife", link: "#mentalolife" }],
    },
    "Data Visualization": {
      description:
        "I build clean, interactive dashboards and reports using Chart.js, D3.js, and Jupyter notebooks to transform data into actionable insights.",
      tech: ["Chart.js", "D3.js", "Jupyter", "Python"],
      projects: [{ title: "ODC Analytics Module", link: "#odc-platform" }],
    },
  };

  const handleProjectClick = (link) => {
    setSelectedService(null);
    setTimeout(() => {
      const target = document.querySelector(link);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        target.classList.add("ring-4", "ring-emerald-400", "transition");
        setTimeout(() => {
          target.classList.remove("ring-4", "ring-emerald-400");
        }, 1500);
      }
    }, 300);
  };

  const handleContactClick = () => {
    setSelectedService(null);
    setTimeout(() => {
      const target = document.querySelector("#contact");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        From front-end design to cybersecurity and AI, I craft elegant, secure,
        and intelligent digital solutions that make a real impact.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 max-w-6xl mx-auto"
      >
        {serviceData.map(({ icon, title, description }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-300 bg-[#FAF9F6] dark:bg-[#1f1f1f] rounded-xl px-6 py-8 shadow-sm hover:shadow-lg hover:shadow-indigo-300/30 dark:hover:shadow-cyan-400/10 transition duration-500 ease-in-out transform hover:-translate-y-2 cursor-pointer"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
              <Image src={icon} alt={title} className="w-8 h-8" />
            </div>
            <h3 className="text-lg my-4 text-gray-700 dark:text-white font-semibold">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            <button
              onClick={() => setSelectedService({ title })}
              className="flex items-center gap-2 text-sm mt-5 text-green-600 dark:text-cyan-300 hover:underline cursor-pointer"
            >
              Learn more
              <Image alt="arrow" src={assets.right_arrow} className="w-4" />
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Popup */}
      <Dialog
        as="div"
        className="relative z-50"
        open={selectedService !== null}
        onClose={() => setSelectedService(null)}
      >
        <div className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-[#f3f4f6] dark:bg-zinc-900 p-6 rounded-xl shadow-2xl w-full max-w-xl relative">
            {/* Close icon */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-lg text-white bg-red-500 hover:bg-red-600 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
              aria-label="Close"
            >
              ×
            </button>

            <Dialog.Title className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {selectedService?.title}
            </Dialog.Title>

            <div className="text-gray-700 dark:text-gray-300 space-y-6">
              <p>{serviceDetails[selectedService?.title]?.description}</p>

              <div className="flex flex-wrap gap-2">
                {serviceDetails[selectedService?.title]?.tech?.map(
                  (tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl text-sm font-medium bg-gradient-to-tr from-green-200 to-green-300 dark:from-green-800 dark:to-green-900 text-green-900 dark:text-green-200 border border-green-200 dark:border-green-700"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div>
                <h4 className="text-base font-semibold mb-2">
                  Projects I've used this in:
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  {serviceDetails[selectedService?.title]?.projects?.map(
                    (proj, idx) => (
                      <li key={idx}>
                        <a
                          href={proj.link}
                          onClick={(e) => {
                            e.preventDefault();
                            handleProjectClick(proj.link);
                          }}
                          className="text-emerald-600 hover:text-emerald-800 hover:underline transition text-sm font-medium"
                        >
                          {proj.title}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="text-center pt-6">
                <button
                  onClick={handleContactClick}
                  className="inline-block px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
                >
                  ✨ Interested? Let's talk!
                </button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </motion.div>
  );
};

export default Services;
