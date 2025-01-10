import React, { useEffect, useState } from "react";
import Sun from '/src/assets/icons/Sun.svg'
import Moon from '/src/assets/icons/Moon.svg'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(savedTheme ? savedTheme === "dark" : systemTheme);

    document.documentElement.classList.toggle("dark", savedTheme === "dark" || (!savedTheme && systemTheme));
  }, []);

  const handleToggle = () => {
    const newTheme = !isDark ? "dark" : "light";
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex flex-col gap-2 mt-1 text-darkturquoise">
      <p className="mr-6">Тема</p>
      <div className="flex flex-row gap-2">
        <label className="relative inline-block w-12 h-6">
          <input
            type="checkbox"
            checked={isDark}
            onChange={handleToggle}
            className="hidden"
          />
          <span className="block w-full h-full bg-whiteturquoise dark:bg-turquoise rounded-full cursor-pointer transition" />
          <span
            className={`absolute top-1 left-1 w-4 h-4 bg-white dark:bg-darkturquoise rounded-full transition-transform ${
              isDark ? "transform translate-x-6" : ""
            }`}
          />
        </label>
        <div className="relative">
          <Moon
            className={`absolute transition-opacity duration-100 ${
              isDark ? "opacity-100" : "opacity-0"
            }`}
          />
          <Sun
            className={`absolute transition-opacity duration-100 ${
              isDark ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
