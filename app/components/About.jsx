import { assets, infoList } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const toolCategories = {
  Development: [
    { icon: assets.vscode, name: "VS Code" },
    { icon: assets.react, name: "React" },
    { icon: assets.next, name: "Next.js" },
    { icon: assets.nodejs, name: "NodeJS" },
    { icon: assets.mongodb, name: "MongoDB" },
  ],
  "Design & Prototyping": [
    { icon: assets.figma, name: "Figma" },
    { icon: assets.xd, name: "Adobe XD" },
  ],
  "Cloud & DevOps": [
    { icon: assets.google, name: "Google Cloud" },
    { icon: assets.aws, name: "AWS" },
    { icon: assets.azure, name: "Azure" },
  ],
  "Testing & Automation": [
    { icon: assets.jest, name: "Jest" },
    { icon: assets.junit, name: "JUnit" },
    { icon: assets.selenium, name: "Selenium" },
  ],
  Cybersecurity: [
    { icon: assets.wireshark || assets.placeholder, name: "Wireshark" },
    { icon: assets.burpsuite || assets.placeholder, name: "Burp Suite" },
    { icon: assets.nmap || assets.placeholder, name: "Nmap" },
    { icon: assets.kali || assets.placeholder, name: "Kali Linux" },
  ],
  "AI & ML": [
    { icon: assets.tensorflow || assets.placeholder, name: "TensorFlow" },
    { icon: assets.pytorch || assets.placeholder, name: "PyTorch" },
    { icon: assets.jupyter || assets.placeholder, name: "Jupyter" },
  ],
  Others: [
    { icon: assets.git, name: "Git" },
    { icon: assets.github, name: "GitHub" },
    { icon: assets.web, name: "Web Components" },
  ],
};

const ToolItem = ({ icon, name }) => (
  <motion.li
    whileHover={{ scale: 1.1 }}
    className="relative group flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
  >
    <Image src={icon} alt={name} className="w-5 sm:w-7" />
    <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 text-xs bg-gray-400 text-white px-2 py-0.5 rounded shadow-md whitespace-nowrap transition duration-300">
      {name}
    </span>
  </motion.li>
);

const Divider = ({ align = "center", width = "w-1/2" }) => (
  <div className={`relative w-full flex justify-${align} my-10`}>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8 }}
      className={`origin-${align} ${width} h-[2px] bg-gradient-to-r from-green-300 via-blue-300 to-cyan-300 rounded-full`}
    />
  </div>
);

// The rest of the About component remains unchanged.

const About = () => {
  return (
    <>
      <motion.div
        id="about"
        className="w-full px-[12%] py-10 scroll-mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg font-Ovo pt-12 sm:pt-20"
        >
          📌 Introduction
        </motion.h4>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl font-Ovo"
        >
          About me
        </motion.h2>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex w-full flex-col lg:flex-row items-stretch gap-20 my-10"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-64 sm:w-60 rounded-3xl max-w-none self-stretch"
          >
            <Image
              src={assets.user_image}
              alt="user"
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.div>

          {/* Bio + Info Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex-1"
          >
            <p className="mb-6 max-w-2xl font-Ovo text-base">
              I’m a Software Engineer with a strong foundation in cybersecurity,
              AI, and full-stack development — driven by innovation and a love
              for precision. I craft secure, smart solutions with elegant code
              and purposeful design. Passionate about lifelong learning and
              self-growth.
            </p>

            <ul className="flex flex-wrap gap-4 mb-6 justify-start text-sm font-medium">
              <li className="flex items-center gap-2">
                🇹🇳 Arabic <span className="text-gray-500">(Native)</span>
              </li>
              <li className="flex items-center gap-2">
                🇬🇧 English <span className="text-gray-500">(C1)</span>
              </li>
              <li className="flex items-center gap-2">
                🇫🇷 French <span className="text-gray-500">(C1)</span>
              </li>
              <li className="flex items-center gap-2">
                🇹🇷 Turkish <span className="text-gray-500">(B2)</span>
              </li>
              <li className="flex items-center gap-2">
                🇪🇸 Spanish <span className="text-gray-500">(A2)</span>
              </li>
              <li className="flex items-center gap-2">
                🇮🇹 Italian <span className="text-gray-500">(A1)</span>
              </li>
            </ul>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            >
              {infoList.map((item, index) => (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  className="about-card border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-100 hover:-translate-y-1 duration-500 hover:shadow-gray-400"
                  key={index}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="w-7 mt-3"
                  />
                  <h3 className="my-4 font-semibold text-gray-700">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* Tools Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full px-[12%] pb-10 tool-section"
      >
        <motion.h4
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="tools-title text-3xl font-Ovo mb-6 flex items-center gap-2"
        >
          🛠️ Tools I use
        </motion.h4>
        <Divider align="start" width="w-[83%]" />
        <div className="flex flex-wrap gap-8">
          {Object.entries(toolCategories).map(([category, tools], idx) => (
            <div key={idx} className="w-full sm:w-[45%] lg:w-[30%]">
              <h5 className="text-lg font-semibold mb-3 text-gray-700">
                {category}
              </h5>
              <ul className="flex flex-wrap items-center gap-3 sm:gap-4">
                {tools.map((tool, index) => (
                  <ToolItem key={index} icon={tool.icon} name={tool.name} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="w-full px-[12%]">
        <Divider align="start" />
      </div>

      {/* Soft Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full px-[12%] py-10 soft-skills-section"
      >
        <motion.div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <div className="lg:w-1/2">
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-Ovo mb-4 flex items-center gap-3"
            >
              🌟 Discover My Soft Skills
            </motion.h3>
            <hr className="border-gray-300 my-6 w-1/2" />

            <p className="text-base text-gray-500 mt-2 italic">
              Because tech is better with empathy.
            </p>
            <p className="text-left max-w-xl font-Ovo">
              AI-powered radar chart capturing soft skills I bring into every
              project — from empathy to leadership, creativity to time
              management.
            </p>
            <p className="text-base text-black mt-2 mb-6">
              My soft skills are the secret sauce that makes my tech skills
              shine even brighter. They help me connect, communicate, and create
              with impact.
            </p>

            <p className="italic text-base text-gray-500 mt-4">
              "Lorsqu'on veut, on peut." — because mindset matters.
            </p>
          </div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image
              src={assets.chart}
              alt="Soft Skills Radar Chart"
              className="w-full max-w-xl rounded-3xl shadow-md"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
