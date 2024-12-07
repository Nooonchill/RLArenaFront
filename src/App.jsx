import React, { useState } from "react";
import LeftArrows from './assets/icons/LeftArrows.svg';
import RightArrows from './assets/icons/RightArrows.svg';
import Home from './assets/icons/Home.svg';
import Brain from './assets/icons/Brain.svg';
import Guides from './assets/icons/Guides.svg';
import Data from './assets/icons/Data.svg';
import Settings from './assets/icons/Settings.svg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen w-screen bg-slate-400">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen text-white bg-slate-500 shadow-lg transition-all duration-300 ${
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
        <div className="max-w-[1110px] mx-auto pt-4">
          {/* Header */}
          <header className="flex justify-between items-start bg-none">
            {/* Search Input */}
            <form class="max-w-md w-full">   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            {/* Login/Registration Buttons */}
            <div className="flex gap-3">
              <button className="bg-blue-500 text-white w-[75px] h-11 rounded">
                Вход
              </button>
              <button className="bg-gray-200 w-[119px] h-11 rounded">
                Регистрация
              </button>
            </div>
          </header>

          {/* Body */}
          <main className="mt-6">
            <div className="bg-white p-6 rounded shadow-md mb-6">Блок 1</div>
            <div className="bg-white p-6 rounded shadow-md">Блок 2</div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
