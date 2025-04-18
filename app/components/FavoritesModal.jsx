import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

const colorClasses = {
  purple:
    "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  pink: "bg-pink-100   dark:bg-pink-900   text-pink-800   dark:text-pink-200",
  yellow:
    "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
  blue: "bg-blue-100   dark:bg-blue-900    text-blue-800    dark:text-blue-200",
  teal: "bg-teal-100   dark:bg-teal-900    text-teal-800    dark:text-teal-200",
  green:
    "bg-green-100  dark:bg-green-900   text-green-800   dark:text-green-200",
  indigo:
    "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200",
  orange:
    "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  emerald:
    "bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200",
  rose: "bg-rose-100   dark:bg-rose-900    text-rose-800    dark:text-rose-200",
  fuchsia:
    "bg-fuchsia-100 dark:bg-fuchsia-900 text-fuchsia-800 dark:text-fuchsia-200",
  cyan: "bg-cyan-100   dark:bg-cyan-900    text-cyan-800    dark:text-cyan-200",
};

export default function FavoritesModal({ open, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(open);
  }, [open]);

  if (!open) return null;

  const items = [
    ["Color", "Purple", "purple"],
    ["Flower", "Tulip", "pink"],
    ["Genres", "Comedy, Adventure, Mystery", "yellow"],
    ["Anime", "Detective Conan, Hunter × Hunter", "blue"],
    [
      "K‑Dramas",
      "You’re Beautiful; City Hunter; Boys Over Flowers; Welcome to Waikiki 2",
      "teal",
    ],
    ["Quote", "“When there’s a will, there’s a way.”", "green"],
    ["Animal", "Horse", "indigo"],
    ["Food", "Pizza, Lasagna, Bibimbap, Sushi", "orange"],
    [
      "Hobbies",
      "Solving mysteries & Escape rooms; Playing games; Photography; Yoga",
      "rose",
    ],
    ["Bucket List", "Japan, South Korea, Switzerland", "cyan"],
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4 z-50">
      <div
        className={`
          relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl
          w-full max-w-2xl
          transform transition-all duration-300 ease-out
          ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          overflow-hidden
        `}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white w-8 h-8 flex items-center justify-center rounded-full focus:outline-none cursor-pointer"
        >
          ×
        </button>

        <div className="flex items-center justify-center space-x-2 pt-8 pb-4">
          <h2 className="text-3xl font-extrabold">My Favorites</h2>
          <Image
            src={assets.heart}
            alt="Heart icon"
            width={28}
            height={28}
            className="animate-pulse"
          />
        </div>

        <div className="px-6 pb-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map(([label, value, color], i) => (
              <li
                key={i}
                className={`
                  flex items-center gap-2 p-3 rounded-lg 
                  hover:bg-gray-100 dark:hover:bg-gray-800 
                  transition-transform transform hover:scale-105
                  ${label === "Bucket List" ? "whitespace-nowrap" : ""}
                `}
              >
                <span
                  className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
                    colorClasses[color] ||
                    "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {label}
                </span>
                <span className="text-gray-400 dark:text-gray-600">|</span>
                <span className="text-sm">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
