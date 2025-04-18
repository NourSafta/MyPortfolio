import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";
import FavoritesModal from "./FavoritesModal";

const sections = ["top", "about", "services", "work", "contact"];

const Navbar = ({ onChatClick }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const sideMenuRef = useRef();
  const [isFavesOpen, setIsFavesOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedMode === "dark" || (!savedMode && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let current = "top";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      });
      setActiveSection(current);

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  const linkClasses = (id) =>
    `font-Ovo transition-all flex items-center gap-2 hover:font-bold group ${
      activeSection === id
        ? "text-black dark:text-white underline underline-offset-4 decoration-green-600"
        : "text-black dark:text-white"
    } hover:text-[#014421]`;

  return (
    <>
      <div
        className="fixed top-0 left-0 h-1 bg-green-500 z-[9999] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white dark:bg-gray-900 bg-opacity-60 backdrop-blur-md shadow-lg shadow-green-100"
            : ""
        }`}
      >
        <a href="#top">
          {assets.logo ? (
            <>
              <Image
                src={assets.logo}
                alt="Light Logo"
                className="w-28 sm:w-36 block dark:hidden"
              />
              <Image
                src={assets.logo_dark}
                alt="Dark Logo"
                className="w-28 sm:w-36 hidden dark:block"
              />
            </>
          ) : (
            <div className="w-[180px] h-[40px] bg-gray-200 mr-14"></div>
          )}
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 py-3 bg-gradient-to-r from-green-400 to-green-500 bg-opacity-80 backdrop-blur-sm shadow-md cursor-pointer">
          {sections.map((id, index) => (
            <li key={index}>
              <a className={linkClasses(id)} href={`#${id}`}>
                <Image
                  src={
                    id === "top"
                      ? assets.home
                      : id === "about"
                      ? assets.about
                      : id === "services"
                      ? assets.service
                      : id === "work"
                      ? assets.briefcase
                      : assets.email
                  }
                  alt={id}
                  width={20}
                  height={20}
                  className="transition duration-300 group-hover:scale-110"
                />
                {id === "top"
                  ? "Home"
                  : id === "about"
                  ? "About me"
                  : id === "services"
                  ? "Services"
                  : id === "work"
                  ? "My Work"
                  : "Contact me"}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setIsFavesOpen(true)}
              className="font-Ovo transition-all flex items-center gap-2 hover:text-[#014421] hover:font-bold group"
            >
              <Image
                src={assets.heart}
                alt="Faves"
                width={20}
                height={20}
                className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
              <span className="group-hover:tracking-wide transition-all duration-300 cursor-pointer">
                Faves
              </span>
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={onChatClick}
            className="hidden lg:flex outline-none cursor-pointer border-none px-10 py-2.5 font-Ovo relative inline-block tracking-wider font-medium text-base rounded-full overflow-hidden bg-[#59e359] text-white ml-4 group hover:scale-105 active:scale-95 focus:ring-2 focus:ring-green-300 focus:ring-offset-2 transition-all duration-300"
          >
            <div className="flex items-center gap-2 relative z-10">
              <Image
                src={assets.ai}
                alt="AI Icon"
                width={20}
                height={20}
                className="transition-all duration-300 group-hover:scale-110"
              />
              <span className="group-hover:text-black group-hover:font-semibold">
                Nour AI
              </span>
            </div>
            <span className="absolute inset-0 bg-black w-[120%] left-[-10%] skew-x-[30deg] transition-transform duration-300 group-hover:translate-x-[100%]" />
          </button>

          <button
            onClick={toggleDarkMode}
            className="hidden md:block w-10 h-10 rounded-full border border-green-500 flex items-center justify-center hover:bg-green-100 dark:hover:bg-green-800 transition-colors cursor-pointer"
            title="Toggle Dark Mode"
          >
            <span className="text-xl">{darkMode ? "🌞" : "🌙"}</span>
          </button>

          <button
            className="block md:hidden ml-3 cursor-pointer"
            onClick={openMenu}
          >
            <Image src={assets.menu_black} alt="Menu Icon" className="w-6" />
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 right-[-16rem] w-64 h-screen bg-green-50 dark:bg-gray-900 backdrop-blur-md transition-transform duration-500 z-[100] shadow-2xl cursor-pointer"
        >
          <div
            className="absolute top-6 right-6 cursor-pointer"
            onClick={closeMenu}
          >
            <Image src={assets.close_black} alt="Close Icon" className="w-5" />
          </div>
          {sections.map((id, index) => (
            <li key={index}>
              <a
                className="font-Ovo hover:text-green-500 transition-colors flex items-center gap-2"
                onClick={closeMenu}
                href={`#${id}`}
              >
                <Image
                  src={
                    id === "top"
                      ? assets.home
                      : id === "about"
                      ? assets.about
                      : id === "services"
                      ? assets.service
                      : id === "work"
                      ? assets.briefcase
                      : assets.email
                  }
                  alt={id}
                  width={20}
                  height={20}
                />
                {id === "top"
                  ? "Home"
                  : id === "about"
                  ? "About me"
                  : id === "services"
                  ? "Services"
                  : id === "work"
                  ? "My Work"
                  : "Contact me"}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setIsFavesOpen(true)}
              className="font-Ovo transition-all flex items-center gap-2 hover:text-[#014421] hover:font-bold group"
            >
              <Image
                src={assets.heart}
                alt="Faves"
                width={20}
                height={20}
                className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
              <span className="group-hover:tracking-wide transition-all duration-300 cursor-pointer">
                Faves
              </span>
            </button>
          </li>
        </ul>
      </nav>
      <FavoritesModal
        open={isFavesOpen}
        onClose={() => setIsFavesOpen(false)}
      />
    </>
  );
};

export default Navbar;
