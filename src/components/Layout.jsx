import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(true);
  const handleMouseEnter = () => setIsMenuOpen(true);
  const handleMouseLeave = () => setIsMenuOpen(false);
  const solved = 63;
  const total = 100;
  const dashValue = 75 * solved / total;
  const position = 236;
  const username = "Noowefefwefon"

  const timedelta = "PT5H30M"; // 5 часов и 30 минут
  // Парсим строку, используя регулярное выражение
  const match = timedelta.match(/PT(\d+H)?(\d+M)?/);

  let hours = 0;
  let minutes = 0;

  // Если найдены часы
  if (match[1]) {
    hours = parseInt(match[1].replace("H", ""), 10);
  }

  // Если найдены минуты
  if (match[2]) {
    minutes = parseInt(match[2].replace("M", ""), 10);
  }

  return (
    <div className="h-max w-screen bg-white">
      <div
        className={`absolute inset-0 bg-white transition-all duration-300 z-10 pointer-events-none ${
          isMenuOpen ? "backdrop-blur-s bg-opacity-30" : "bg-opacity-0"}`}
      ></div>
      <Sidebar />
      <div className={`ml-[24px] transition-all duration-300 bg-white z-30 ${isMenuOpen ? "pl-20" : "pl-20"} `}>
        <div className="pt-4 pr-2">
          <Header />
          <main className="">{children}</main>
        </div>
      </div>
    </div>
  );
}; 

export default Layout;
