import React, { useState } from "react";
import LeftArrows from './assets/icons/LeftArrows.svg';
import RightArrows from './assets/icons/RightArrows.svg';
import Home from './assets/icons/Home.svg';
import Brain from './assets/icons/Brain.svg';
import Guides from './assets/icons/Guides.svg';
import Data from './assets/icons/Data.svg';
import Settings from './assets/icons/Settings.svg';
import Search from './assets/icons/Search.svg';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen w-screen bg-white">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen text-white bg-whiteturquoise shadow-lg transition-all duration-300 z-10 ${
          isMenuOpen ? "w-60" : "w-20"
        }`}
      >
        <div className="flex items-center p-7">
          <div className={`overflow-hidden transition-all duration-300 ${isMenuOpen ? "w-32 opacity-100" : "w-0 opacity-0"}`}>
            <span className="text-xl text-black font-semibold whitespace-nowrap">
              RLArena
            </span>
          </div>
          <div onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <img src={LeftArrows} alt="Collapse menu" className="pl-8" />
            ) : (
              <img src={RightArrows} alt="Expand menu" className="" />
            )}
          </div>
        </div>
        <div className="flex h-screen flex-col justify-between items-start pb-8">
          <ul className="space-y-6 mt-4">
            <li className="flex items-center px-7">
              <img src={Home} alt="Home" className="cursor-pointer" />
              <div
                className={`overflow-hidden transition-all duration-300 ml-3 ${
                  isMenuOpen ? "w-32 opacity-100" : "w-0 opacity-0"
                }`}
              >
                <span className="text-base font-medium text-black pl-1">Главная</span>
              </div>
            </li>
            <li className="flex items-center px-7">
              <img src={Data} alt="Data" className="cursor-pointer" />
              <div
                className={`overflow-hidden transition-all duration-300 ml-3 ${
                  isMenuOpen ? "w-32 opacity-100" : "w-0 opacity-0"
                }`}
              >
                <span className="text-base font-medium text-black pl-1">Данные</span>
              </div>
            </li>
            <li className="flex items-center px-7">
              <img src={Brain} alt="Competitions" className="cursor-pointer" />
              <div
                className={`overflow-hidden transition-all duration-300 ml-3 ${
                  isMenuOpen ? "w-32 opacity-100" : "w-0 opacity-0"
                }`}
              >
                <span className="text-base font-medium text-black pl-1">Соревнования</span>
              </div>
            </li>
            <li className="flex items-center px-7">
              <img src={Guides} alt="Guides" className="cursor-pointer" />
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

      {/* Main Content */}
      <div
        className={`ml-[24px] transition-all duration-300 ${
          isMenuOpen ? "pl-20" : "pl-20"
        }`}
      >
        <div className="max-w-[1110px] mx-auto pt-4 h-[38px]">
          {/* Header */}
          <header className="flex justify-between items-start bg-none">
            {/* Search Input */}
            <form class="max-w-[540px] w-full border-2 border-turquoise rounded-full">   
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <img src={Search} alt="Search" className="w-6" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 bg-lightwhiteturquoise rounded-full focus:outline-none focus:ring-0"
                  placeholder="Поиск..."
                  required
                />
              </div>
            </form>
            {/* Login/Registration Buttons */}
            <div className="flex gap-3">
              <button className="bg-white border-turquoise w-full h-11 rounded-full text-turquoise">
                Вход
              </button>
              <button className="bg-turquoise text-white w-full h-11 rounded-full">
                Регистрация
              </button>
            </div>
          </header>

          {/* Body */}
          <main className="mt-6">
            <div className="bg-lightwhiteturquoise p-6 rounded shadow-md mb-6">
              <h1 className="text-dark text-2xl">Добро пожаловать, username!</h1>
            </div>
            <div className="bg-lightwhiteturquoise p-6 rounded shadow-md">
              <h1 className="text-dark text-2xl">Новости</h1>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
