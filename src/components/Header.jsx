import React, { useState } from "react";
import Search from '/src/assets/icons/Search.svg';
import User from '/src/assets/icons/User.svg'; 

const Header = ({}) => {
  
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
    <div className="max-w-[1110px] mx-auto h-[38px]">
      <header className="flex justify-between items-start bg-none space-x-4">
        <form className="max-w-[540px] w-full bg-none">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative h-8">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <img src={Search} alt="Search" className="cursor-pointer" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full h-8 p-4 ps-11 text-base text-dark bg-lightwhiteturquoise rounded-full focus:outline-none focus:ring-0 placeholder-dark border-2 border-turquoise"
              placeholder="Поиск..."
              required
            />
          </div>
        </form>
        {isLogged ? (
          <div className="flex flex-row text-dark px-2 mb-4 rounded-full border-2 border-turquoise hover:border-lightturquoise bg-white w-fit cursor-pointer h-8">
            <img src={User} alt="User" className="mr-2 h-6" />
            <h1 className="text-xl">{username}</h1>
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
  );
};

export default Header;
