import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Home from '../assets/icons/Home.svg';
import Brain from '../assets/icons/Brain.svg';
import Guides from '../assets/icons/Guides.svg';
import Data from '../assets/icons/Data.svg';
import SettingsIcon from '../assets/icons/Settings.svg';
import Logo from '../assets/icons/Atom.svg';
import SettingsMenu from './settings/Settings';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Состояние для определения сенсорного устройства

  const navigate = useNavigate();

  // Обработчик для сенсорных устройств
  const handleSidebarToggle = () => {
    if (isMobile) {
      setIsMenuOpen(!isMenuOpen); // Меняем состояние только при клике на сенсорных устройствах
    }
  };

  // Детектируем, является ли устройство мобильным (сенсорным)
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Если ширина окна меньше 768px, считаем, что это мобильное устройство
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Обработчики для обычных устройств (наведение мышки)
  const handleMouseEnter = () => {
    if (!isMobile && !isSettingsOpen) {
      setIsMenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  };

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
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-screen text-dark dark:text-lightwhiteturquoise bg-whiteturquoise dark:bg-dark shadow-lg transition-all duration-300 z-10 ${isMenuOpen ? "w-60" : "w-20"
        }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleSidebarToggle} // Добавляем обработчик клика для сенсорных устройств
    >
      <div className="flex items-center p-7">
        <div className="flex items-center cursor-pointer justify-between" onClick={homeNavigate}>
          <Logo alt="Лого" />
          <div
            className={`overflow-hidden transition-all duration-300 ml-3 ${isMenuOpen ? "w-32 opacity-100" : "w-0 opacity-0"
              }`}
          >
            <h1 className="text-lg font-semibold pl-1">RLArena</h1>
          </div>
        </div>
      </div>
      <div className="flex h-screen flex-col justify-between items-start pb-8">
        <ul className="space-y-4 mt-4">
          <li className="flex items-center mx-5 cursor-pointer hover:bg-gray-50 dark:hover:bg-blackblue p-2 rounded-xl" onClick={homeNavigate}>
            <Home alt="Главная" />
            <div
              className={`overflow-hidden transition-all duration-300 ml-3 ${isMenuOpen ? "w-32 opacity-100" : "w-0 opacity-0"
                }`}
            >
              <span className="text-base font-medium pl-1">Главная</span>
            </div>
          </li>
          <li className="flex items-center mx-5 cursor-pointer hover:bg-gray-50 dark:hover:bg-blackblue p-2 rounded-xl" onClick={dataNavigate}>
            <Data alt="Данные" />
            <div
              className={`overflow-hidden transition-all duration-300 ml-3  ${isMenuOpen ? "w-32 opacity-100" : "w-0 opacity-0"
                }`}
            >
              <span className="text-base font-medium pl-1">Данные</span>
            </div>
          </li>
          <li className="flex items-center mx-5 cursor-pointer hover:bg-gray-50 dark:hover:bg-blackblue p-2 rounded-xl" onClick={competitionsNavigate}>
            <Brain alt="Соревнования" />
            <div
              className={`overflow-hidden transition-all duration-300 ml-3 ${isMenuOpen ? "w-32 opacity-100" : "w-0 opacity-0"
                }`}
            >
              <span className="text-base font-medium pl-1">Соревнования</span>
            </div>
          </li>
          <li className="flex items-center mx-5 mt-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-blackblue p-2 rounded-xl" onClick={guidesNavigate}>
            <Guides alt="Гайды" />
            <div
              className={`overflow-hidden transition-all duration-300 ml-3 ${isMenuOpen ? "w-32 opacity-100" : "w-0 opacity-0"
                }`}
            >
              <span className="text-base font-medium pl-1">Гайды</span>
            </div>
          </li>
        </ul>
        <ul className="mb-7">
          <li
            className="flex items-center mx-5 hover:bg-gray-50 dark:hover:bg-blackblue  rounded-xl p-2 mb-12 cursor-pointer"
            onClick={toggleSettingsMenu}
          >
            <SettingsIcon alt="Settings" />
            <div
              className={`overflow-hidden transition-all duration-300 ml-3 ${isMenuOpen ? "w-32 opacity-100" : "w-0 opacity-0"
                }`}
            >
              <span className="text-base font-medium pl-1">Настройки</span>
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
