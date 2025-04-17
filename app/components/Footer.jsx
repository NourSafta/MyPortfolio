import React from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gray-800 border-none font-semibold flex items-center justify-center shadow-[0_0_0_4px_rgba(180,160,255,0.253)] cursor-pointer transition-all duration-300 overflow-hidden group hover:bg-green-600 hover:w-[140px] hover:rounded-[50px]"
    >
      <svg
        className="w-3 transition-all duration-300 group-hover:-translate-y-[200%]"
        viewBox="0 0 384 512"
      >
        <path
          fill="white"
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        />
      </svg>
      <span className="absolute -bottom-5 text-white text-base opacity-0 group-hover:opacity-100 group-hover:bottom-3 transition-all duration-300">
        Back to Top
      </span>
    </button>
  ) : null;
};

const Footer = () => {
  return (
    <>
    <div className="mt-20 text-center pb-10 footer">
      <div className="mt-20 text-center pb-10">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm dark:!text-white text-gray-700 mb-6 px-[10%]">
          <div>
            <Image src={assets.logo} alt="Logo" className="w-28 sm:w-36" />
          </div>
          <div className="text-center text-base">
            <p className="mb-1 dark:!text-white text-gray-700">
              Made with <span className="text-red-500">❤️</span>
            </p>
            <p className="italic text-sm text-gray-500 dark:text-gray-300">
              “Fueled by K-dramas & curiosity.”
            </p>
          </div>

          <div className="flex items-center gap-2 dark:!text-white text-gray-700">
            <Image src={assets.email} alt="Email" className="w-5" />
            <a
              href="mailto:saftanour@gmail.com"
              className="hover:text-green-700 dark:hover:text-green-400 font-medium text-base transition-colors"
            >
              saftanour@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-400 dark:border-gray-600 mx-[10%] pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-base dark:!text-white text-gray-700">
            <p className="mb-4 sm:mb-0">
              © 2025 Nour Safta. All rights reserved.
            </p>
            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="https://github.com/NourSafta"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="flex items-center gap-1 hover:text-black dark:hover:text-white hover:font-bold transition-all duration-300 ease-in-out"
                >
                  <Image
                    src={assets.github}
                    alt="GitHub"
                    className="w-4 h-4 transition-transform duration-200 hover:scale-110"
                  />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nour-safta-6464a7147/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold transition-all duration-300 ease-in-out"
                >
                  <Image
                    src={assets.linkedin}
                    alt="LinkedIn"
                    className="w-4 h-4 transition-transform duration-200 hover:scale-110"
                  />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nour.safta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="flex items-center gap-1 hover:text-pink-600 dark:hover:text-pink-400 hover:font-bold transition-all duration-300 ease-in-out"
                >
                  <Image
                    src={assets.instagram}
                    alt="Instagram"
                    className="w-4 h-4 transition-transform duration-200 hover:scale-110"
                  />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/21653299043"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  className="flex items-center gap-1 hover:text-green-600 dark:hover:text-green-400 hover:font-bold transition-all duration-300 ease-in-out"
                >
                  <Image
                    src={assets.whatsapp}
                    alt="WhatsApp"
                    className="w-4 h-4 transition-transform duration-200 hover:scale-110"
                  />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <BackToTopButton />
      </div>
    </>
  );
};

export default Footer;
