"use client";

import { useState, useEffect } from "react";

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m8.485-9H21m-16 0H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 000 10 5 5 0 000-10z"
    />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-6 h-6"
  >
    <path d="M21 12.79A9 9 0 0112.21 3 7 7 0 0012 17a7 7 0 009-4.21z" />
  </svg>
);

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (
      document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      {/* Left: Home */}
      <a
        href="/"
        className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition"
      >
        Home
      </a>

      {/* Right: Night mode + Dropdown + Profile Pic */}
      <div className="flex items-center space-x-6 relative">
        {/* Night mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Dark Mode"
          className="text-gray-700 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-300 transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-95"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? <MoonIcon /> : <SunIcon />}
        </button>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-gray-800 dark:text-gray-100 font-medium border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Menu ▼
          </button>

          <div
            className={`absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg z-20
            transition-transform transition-opacity duration-300 ease-in-out
            ${dropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
            `}
          >
            <a
              href="/posts"
              onClick={() => setDropdownOpen(false)}
              className="block px-5 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              Posts
            </a>
            <a
              href="/projects"
              onClick={() => setDropdownOpen(false)}
              className="block px-5 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              Projects
            </a>
          </div>
        </div>

        {/* Profile Picture */}
        <img
          src="/pfp.png"
          alt="Profile Picture"
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
          title="Tai's Profile Picture"
        />
      </div>
    </nav>
  );
}
