import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Home from '../assets/icons/Home.svg';
import Brain from '../assets/icons/Brain.svg';
import Guides from '../assets/icons/Guides.svg';
import Data from '../assets/icons/Data.svg';
import SettingsIcon from '../assets/icons/Settings.svg';
import Logo from '../assets/icons/Atom.svg';
import SettingsMenu from './settings/Settings';  // Импорт компонента настроек

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);  // Состояние для модального окна настроек
  const handleMouseEnter = () => {
    if (!isSettingsOpen) {
      setIsMenuOpen(true);
    }
  };
  const handleMouseLeave = () => setIsMenuOpen(false);

  const navigate = useNavigate();

  const homeNavigate = () => {
    navigate('/');
  };
  const competitionsNavigate = () => {
    navigate('/competitions');
  };
  const dataNavigate = () => {
    navigate('/data');
  };
  const guidesNavigate = () => {
    navigate('/guides');
  };

  const toggleSettingsMenu = () => {
    setIsMenuOpen(false);
    setIsSettingsOpen(!isSettingsOpen);  // Переключение состояния модального окна
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
        <div className="flex items-center cursor-pointer justify-between" onClick={homeNavigate}>
            <Logo alt="Home" />
            <div
              className={`overflow-hidden transition-all duration-300 ml-3 ${
                isMenuOpen ? "w-32 opacity-100" : "w-0 opacity-0"
              }`}
            >
              <h1 className="text-lg font-semibold text-black pl-1">RLArena</h1>
            </div>
          </div>
      </div>
      <div className="flex h-screen flex-col justify-between items-start pb-8">
        <ul className="space-y-6 mt-4">
          <li className="flex items-center px-7 cursor-pointer" onClick={homeNavigate}>
            <Home alt="Home" />
            <div
              className={`overflow-hidden transition-all duration-300 ml-3 ${
                isMenuOpen ? "w-32 opacity-100" : "w-0 opacity-0"
              }`}
            >
              <span className="text-base font-medium text-black pl-1">Главная</span>
            </div>
          </li>
          <li className="flex items-center px-7 cursor-pointer" onClick={dataNavigate}>
            <Data alt="Data" />
            <div
              className={`overflow-hidden transition-all duration-300 ml-3 ${
                isMenuOpen ? "w-32 opacity-100" : "w-0 opacity-0"
              }`}
            >
              <span className="text-base font-medium text-black pl-1">Данные</span>
            </div>
          </li>
          <li className="flex items-center px-7 cursor-pointer" onClick={competitionsNavigate}>
            <Brain alt="Competitions" />
            <div
              className={`overflow-hidden transition-all duration-300 ml-3 ${
                isMenuOpen ? "w-32 opacity-100" : "w-0 opacity-0"
              }`}
            >
              <span className="text-base font-medium text-black pl-1">Соревнования</span>
            </div>
          </li>
          <li className="flex items-center px-7 cursor-pointer" onClick={guidesNavigate}>
            <Guides alt="Guides" />
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
          <li
            className="flex items-center px-7 pb-12 cursor-pointer"
            onClick={toggleSettingsMenu}
          >
            <SettingsIcon alt="Settings" />
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

      {/* Модальное окно настроек */}
      {isSettingsOpen && <SettingsMenu onClose={toggleSettingsMenu} />}
    </aside>
  );
};

export default Sidebar;
