import { assets, workData } from "../../assets/assets";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import housingPrice from "../../assets/housing-price.png";
import pillDispenser from "../../assets/pill-dispenser.png";
import powerPrediction from "../../assets/power-consumption.png";

const Work = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const extendedWorkData = workData.map((project) => {
    if (project.title === "Program Management System") {
      return {
        ...project,
        description: "My junior year project",
        fullDescription:
          "In my junior year, my team and I developed a complete web and mobile app that aids students and administrators in managing campus logistics. The platform allows students to book classrooms, manage tasks, and communicate with faculty. For administrators, it generates real-time statistics and automated schedules to enhance decision-making in classroom allocation and financial tracking. The mobile version is available on my GitHub. This project showcases my experience in React Native, dashboard creation, and system-level thinking.",
        source: "https://github.com/NourSafta/Booking-chat",
      };
    }
    return project;
  });

  const extraProjects = [
    {
      id: "power-prediction",
      title: "Power Consumption Prediction",
      description: "Project from data analytics course",
      fullDescription:
        "As part of a Data Analytics course, this project predicted a building’s power usage and estimated associated CO₂ emissions. I utilized historical consumption data, built regression models, and visualized patterns using dashboards. It included KPIs, monthly trends, and real-time estimation visuals. The goal was to support sustainability goals by optimizing energy usage through data-driven insights.",
      bgImage: powerPrediction,
      source: null,
    },
    {
      id: "housing-price",
      title: "Housing Price Prediction",
      description: "My sophomore year machine learning project",
      fullDescription:
        "This sophomore-year machine learning project used linear and decision tree regression to predict house prices based on features like location, room count, and square footage. I applied data preprocessing, feature engineering, and model evaluation techniques to improve accuracy. It provided a solid foundation in applied ML and real estate economics, refining my understanding of predictive analytics.",
      bgImage: housingPrice,
      source: null,
    },
    {
      id: "pill-dispenser",
      title: "Pill Dispenser",
      description: "My freshman year hardware project",
      fullDescription:
        "This freshman-year hardware project aimed to assist elderly patients in following their medication schedules. Using an Arduino, a buzzer, LED indicators, and a real-time clock module, the dispenser would alert users and dispense pills at preprogrammed times. The mechanical system was controlled through code and featured physical buttons for overrides. It was my first dive into embedded systems, assistive tech, and circuit prototyping.",
      bgImage: pillDispenser,
      source: null,
    },
  ];

  const allProjects = showMore
    ? [...extendedWorkData, ...extraProjects]
    : extendedWorkData;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-6 md:px-16 xl:px-[12%] py-10 scroll-mt-20"
    >
      {/* Section Headers */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl md:text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 subtitle"
      >
        Welcome to my portfolio! Here, you can explore some of my latest
        projects and see the skills I have acquired over the years.
      </motion.p>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10"
      >
        {allProjects.map((project, index) => (
          <motion.div
            id={project.id}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            key={index}
            onClick={() => setSelectedProject(project)}
            className="w-full h-[340px] rounded-xl relative cursor-pointer group overflow-hidden border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
          >
            <div className="relative w-full h-full">
              <Image
                src={project.bgImage}
                alt={project.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-white/90 w-10/12 rounded-xl absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition-all">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">
                  {project.description?.slice(0, 50)}
                </p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-green-500 transition">
                <Image src={assets.send_icon} alt="Send icon" className="w-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Toggle Show More/Less */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        onClick={() => setShowMore(!showMore)}
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-100 duration-500 cursor-pointer"
      >
        {showMore ? "Show less" : "Show more"}
        <Image
          src={assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />
      </motion.button>

      {/* Link to PDF Portfolio */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Prefer a PDF format?{" "}
        <a
          href="https://www.linkedin.com/in/nour-safta-6464a7147/overlay/1726761769717/single-media-viewer/?profileId=ACoAACN9fNYBLnXr17wFrhce-wM-d_1RGlu7gnk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 hover:text-emerald-800 font-medium underline transition"
        >
          View my portfolio PDF here
        </a>
        .
      </p>

      {/* Modal */}
      <Dialog
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl max-w-xl w-full shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-white bg-red-500 hover:bg-red-600 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
              aria-label="Close"
            >
              ×
            </button>
            <Dialog.Title className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              {selectedProject?.title}
            </Dialog.Title>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {selectedProject?.fullDescription || selectedProject?.description}
            </p>
            {selectedProject?.source ? (
              <div className="text-center">
                <a
                  href={selectedProject.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-medium text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
                >
                  View on GitHub
                </a>
              </div>
            ) : (
              <p className="text-sm italic text-red-500 mt-4">
                Source code not publicly available.
              </p>
            )}
          </div>
        </div>
      </Dialog>
    </motion.section>
  );
};

export default Work;
