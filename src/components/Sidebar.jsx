import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Home from '/src/assets/icons/Home.svg';
import Brain from '/src/assets/icons/Brain.svg';
import Guides from '/src/assets/icons/Guides.svg';
import Data from '/src/assets/icons/Data.svg';
import Settings from '/src/assets/icons/Settings.svg';
import Logo from '/src/assets/icons/Atom.svg';

const Sidebar = ({}) => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMouseEnter = () => setIsMenuOpen(true);
  const handleMouseLeave = () => setIsMenuOpen(false);
  
    const navigate = useNavigate();
  
    const homeNavigate = () => {
      navigate('/'); // Замените на нужный вам маршрут
    };
    const competitionsNavigate = () => {
      navigate('/competitions'); // Замените на нужный вам маршрут
    };

  return (
    <aside
      className={`fixed top-0 left-0 h-screen text-white bg-whiteturquoise shadow-lg transition-all duration-300 z-10 ${
        isMenuOpen ? "w-60" : "w-20"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center p-7">
        <div className="overflow-hidden transition-all duration-300 flex cursor-pointer" onClick={homeNavigate}>
          <img src={Logo} alt="Logo" className="" />
            <div
              className={`overflow-hidden transition-all duration-300 ml-3 ${
                isMenuOpen ? "w-32 opacity-100" : "w-0 opacity-0"
              }`}
            >
              <span className="text-xl text-black font-semibold whitespace-nowrap">RLArena</span>
            </div>
        </div>
      </div>
      <div className="flex h-screen flex-col justify-between items-start pb-8">
        <ul className="space-y-6 mt-4">
          <li className="flex items-center px-7 cursor-pointer" onClick={homeNavigate}>
            <img src={Home} alt="Home" />
            <div
              className={`overflow-hidden transition-all duration-300 ml-3 ${
                isMenuOpen ? "w-32 opacity-100" : "w-0 opacity-0"
              }`}
            >
              <span className="text-base font-medium text-black pl-1">Главная</span>
            </div>
          </li>
          <li className="flex items-center px-7 cursor-pointer">
            <img src={Data} alt="Data" />
            <div
              className={`overflow-hidden transition-all duration-300 ml-3 ${
                isMenuOpen ? "w-32 opacity-100" : "w-0 opacity-0"
              }`}
            >
              <span className="text-base font-medium text-black pl-1">Данные</span>
            </div>
          </li>
          <li className="flex items-center px-7 cursor-pointer" onClick={competitionsNavigate}>
            <img src={Brain} alt="Competitions" />
            <div
              className={`overflow-hidden transition-all duration-300 ml-3 ${
                isMenuOpen ? "w-32 opacity-100" : "w-0 opacity-0"
              }`}
            >
              <span className="text-base font-medium text-black pl-1">Соревнования</span>
            </div>
          </li>
          <li className="flex items-center px-7 cursor-pointer">
            <img src={Guides} alt="Guides" />
            <div
              className={`overflow-hidden transition-all duration-300 ml-3 ${
                isMenuOpen ? "w-32 opacity-100" : "w-0 opacity-0"
              }`}
            >
              <span className="text-base font-medium text-black pl-1">Гайды</span>
            </div>
          </li>
        </ul>
        <ul className="mb-7">
          <li className="flex items-center px-7 pb-12">
            <img src={Settings} alt="Settings" className="cursor-pointer" />
            <div
              className={`overflow-hidden transition-all duration-300 ml-3 ${
                isMenuOpen ? "w-32 opacity-100" : "w-0 opacity-0"
              }`}
            >
              <span className="text-base font-medium text-black pl-1">Настройки</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
