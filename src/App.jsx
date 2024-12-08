import React, { useState } from "react";
import Home from './assets/icons/Home.svg';
import Brain from './assets/icons/Brain.svg';
import Guides from './assets/icons/Guides.svg';
import Data from './assets/icons/Data.svg';
import Settings from './assets/icons/Settings.svg';
import Search from './assets/icons/Search.svg';
import Logo from './assets/icons/Atom.svg';
import User from './assets/icons/User.svg'
import Winner from './assets/icons/Winner.svg'
import Second from './assets/icons/Second.svg'
import Third from './assets/icons/Third.svg'


function App() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const handleMouseEnter = () => setIsMenuOpen(true);
  const handleMouseLeave = () => setIsMenuOpen(false);
  const solved = 63;
  const total = 100;
  const dashValue = 75 * solved / total;
  const position = 236;
  const username = "Nooon"

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
    
    <div className="h-screen w-screen bg-white">
      <div
        className={`absolute inset-0 bg-white transition-all duration-300 z-10 pointer-events-none ${
          isMenuOpen ? "backdrop-blur-s bg-opacity-30" : "bg-opacity-0"}`}
      ></div>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen text-white bg-whiteturquoise shadow-lg transition-all duration-300 z-10 ${
          isMenuOpen ? "w-60" : "w-20"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center p-7">
          <div className={`overflow-hidden transition-all duration-300 flex`}>
            <img src={Logo} alt="Logo" className="cursor-pointer" />
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
      <div className={`ml-[24px] transition-all duration-300 z-30 ${isMenuOpen ? "pl-20" : "pl-20"} `}>
        <div className="pt-4">
          <div className="max-w-[1110px] mx-auto h-[38px]">
            <header className="flex justify-between items-start bg-none space-x-4">
              <form className="max-w-[540px] w-full border-2 border-turquoise rounded-full">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <img src={Search} alt="Search" className="cursor-pointer" />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-11 text-base text-dark bg-lightwhiteturquoise rounded-full focus:outline-none focus:ring-0 placeholder-dark"
                    placeholder="Поиск..."
                    required
                  />
                </div>
              </form>
              {isLogged ? (
                <div className="flex flex-row h-[60px] text-dark px-6 py-2 mb-4 rounded-full border-2 border-turquoise hover:border-lightturquoise bg-white w-fit cursor-pointer ">
                  <img src={User} alt="User" className="mr-2" />
                  <h1 className="text-3xl">{username}</h1>
                </div>
              ) : (
                <div className="flex gap-3">
                  <button className="bg-white font-medium h-[60px] border-2 border-turquoise text-turquoise hover:text-lightturquoise hover:border-lightturquoise active:text-darkturquoise active:border-darkturquoise w-full rounded-full">
                    Вход
                  </button>
                  <button className="border-none font-medium h-[60px] bg-turquoise text-white hover:bg-lightturquoise active:bg-darkturquoise w-full rounded-full">
                    Регистрация
                  </button>
                </div>
              )}
            </header>
          </div>
          {/* Body */}
          <main className="mt-10 bg-white">
            <div className="max-w-[1110px] mx-auto">
              {isLogged ? (
                <div className="bg-lightwhiteturquoise p-6 rounded-3xl shadow-md mb-6 text-center">
                <h1 className="text-dark text-4xl mb-4">Добро пожаловать, {username}!</h1>
                <div className="flex justify-around text-dark items-stretch space-x-4">
                  <div className="bg-none p-2 m-1 w-1/4 items-center justify-center rounded-full flex flex-col">
                    <span className="text-lg">Рейтинг</span>
                    <h1>
                      <span className="text-dark text-4xl">#</span>
                      <span className="text-dark text-4xl">{position}</span>
                    </h1>
                  </div>
                  <div className="bg-none p-2 rounded-full m-1 items-center text-center flex flex-col w-1/4">
                    <span className="text-xl mb-2">Процент решений</span>
                    <div className="relative w-28">
                      <svg className="rotate-[135deg] size-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          className="stroke-current text-dark dark:text-dark"
                          strokeWidth="3.8"
                          strokeDasharray="75 100" // Фоновой круг, полное кольцо
                          strokeLinecap=""
                        ></circle>
                        <circle
                          cx="18"
                          cy="18"
                          r="16"
                          fill="none"
                          className="stroke-current text-turquoise dark:text-turquoise"
                          strokeWidth="4"
                          strokeDasharray={`${dashValue} 100`} // Основное значение с переменной
                          strokeLinecap=""
                        ></circle>
                      </svg>
                      <div class="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <span class="text-4xl font-bold text-turquoise dark:text-turquoise">{solved/total * 100}%</span>
                        <span class="text-turquoise font-semibold dark:text-turquoise block">{solved}<span className="text-dark">/{total}</span> </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-none p-2 rounded-full m-1 w-1/4 items-center justify-center flex flex-col ">
                    <span className="text-lg">Среднее время решения</span>
                    <h1>
                      <span className="text-dark text-4xl ">{hours}</span>
                      <span className="text-dark text-4xl ">ч.</span>
                      <span className="text-dark text-4xl "> {minutes}</span>
                      <span className="text-dark text-4xl ">м.</span>
                    </h1>
                  </div>
                </div>
              </div>
              
              ) : (
                <div></div>
              )}
              <div className="bg-lightwhiteturquoise text-dark p-6 rounded-3xl shadow-md mb-6">
                  <div className=" bg-white border-darkturquoise rounded-3xl p-4">
                    <div className="mb-4">
                      <h2 className="text-2xl">Результаты "Названия сореванования"</h2>
                      <span>"дата окончания"</span>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <div className="flex pb-5 pt-8 rounded-full">
                        <div className="flex flex-col items-center w-24 mt-3">
                          <img src={User} alt="User" className="w-10 rounded-full" />
                          <img src={Second} alt="Second" className="absolute mt-6 ml-6 w-6" />
                          <span className="truncate max-w-28">username</span>
                        </div>
                        <div className="flex flex-col items-center w-24">
                          <img src={User} alt="User" className="w-10 rounded-full" />
                          <img src={Winner} alt="Winner" className="absolute mt-[-24px] w-6" />
                          <span className="truncate max-w-28">username</span>
                        </div>
                        <div className="flex flex-col items-center w-24 mt-6">
                          <img src={User} alt="User" className="w-10 rounded-full" />
                          <img src={Third} alt="Third" className="absolute mt-6 ml-6 w-6" />
                          <span className="truncate max-w-28">username</span>
                        </div>
                      </div>
                    </div>
                    <div>

                    
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-auto max-w-[800px]">
                      <table class="w-full text-sm text-left rtl:text-right text-dark">
                        <thead class="text-xs text-dark uppercase bg-lightwhiteturquoise">
                          <tr>
                            <th scope="col" class="pl-6 py-3">
                              #
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Пользователь
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Время
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Оценка
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="odd:bg-white even:bg-gray-50">
                            <th scope="row" class="pl-6 py-4 font-medium text-dark whitespace-nowrap ">
                              1
                            </th>
                            <td class="px-6 py-4">
                              Silver
                            </td>
                            <td class="px-6 py-4">
                              23:10
                            </td>
                            <td class="px-6 py-4">
                              565
                            </td>
                          </tr>
                          <tr class="odd:bg-white even:bg-gray-50">
                            <th scope="row" class="pl-6 py-4 font-medium text-dark whitespace-nowrap ">
                              2
                            </th>
                            <td class="px-6 py-4">
                              White
                            </td>
                            <td class="px-6 py-4">
                              48:12
                            </td>
                            <td class="px-6 py-4">
                              243
                            </td>
                          </tr>
                          <tr class="odd:bg-white even:bg-gray-50">
                            <th scope="row" class="pl-6 py-4 font-medium text-dark whitespace-nowrap ">
                              3
                            </th>
                            <td class="px-6 py-4">
                              Black
                            </td>
                            <td class="px-6 py-4">
                              00:23
                            </td>
                            <td class="px-6 py-4">
                              212
                            </td>
                          </tr>
                          <tr class="odd:bg-white even:bg-gray-50">
                            <th scope="row" class="pl-6 py-4 font-medium text-dark whitespace-nowrap">
                              4
                            </th>
                            <td class="px-6 py-4">
                              Gray
                            </td>
                            <td class="px-6 py-4">
                              324:12
                            </td>
                            <td class="px-6 py-4">
                              32
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-lightwhiteturquoise text-dark p-6 rounded-3xl shadow-md">
                  <div className=" bg-white border-darkturquoise rounded-3xl p-4">
                    <div className="mb-4">
                      <h2 className="text-2xl">Заголовок новости</h2>
                      <span>дата выхода</span>
                    </div>
                    <span>Текст</span>
                  </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
