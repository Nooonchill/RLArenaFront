import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import Search from '../assets/icons/Search.svg';
import User from '../assets/icons/User.svg';
import LeftArrow from '../assets/icons/LeftArrow.svg';

// Моковые данные
import { user, logged } from '../mockdata/userData.js';

const Header = ({ }) => {

  const [isLogged, setIsLogged] = useState(logged);

  const pathname = `${window.location.pathname}`;

  const routeDict = {
    "/^\\/contests\\/\\d+$/": "Соревнования",
    "/^\\/data\\/\\d+$/": "Данные",
    "/^\\/guides\\/\\d+$/": "Гайды"
  }

  function translateRoute(path) {
    for (const [regex, translation] of Object.entries(routeDict)) {
      if (new RegExp(regex.slice(1, -1)).test(path)) {
        return translation;
      }
    }
    return "none";
  }

  const navigate = useNavigate();

  const profileNavigate = () => {
    navigate('/profile');
  };

  return (
    <div className="max-w-[1110px] mx-auto">
      <header className="flex flex-col gap-4">
        <div className="flex justify-between items-start bg-none space-x-4">
          <form className="max-w-[540px] w-full bg-none">
            <div className="relative h-[38px]">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Search alt="Поиск" className="cursor-pointer" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full h-[38px] p-4 ps-11 text-base text-dark dark:text-lightwhiteturquoise bg-lightwhiteturquoise dark:bg-dark rounded-full focus:outline-none focus:ring-0 placeholder-dark dark:placeholder-lightwhiteturquoise border-2 border-turquoise dark:border-lightwhiteturquoise"
                placeholder="Поиск..."
                required
              />
            </div>
          </form>
          {isLogged ? (
            <div onClick={profileNavigate} className="flex flex-row h-[38px] text-dark dark:text-lightwhiteturquoise px-2 items-center rounded-full border-2 border-turquoise dark:border-lightwhiteturquoise dark:hover:border-lightturquoise hover:border-lightturquoise bg-transparent w-fit cursor-pointer">
              <User alt="Пользователь" className="mr-2 h-6" />
              <h1 className="text-xl mr-1">{user.username}</h1>
            </div>
          ) : (
            <div className="flex gap-3 h-[38px]">
              <Link to="/auth" className="h-[38px]">
                <button className="h-[38px] py-0 bg-transparent font-medium border-2 border-turquoise text-turquoise hover:text-lightturquoise hover:border-lightturquoise active:text-darkturquoise active:border-darkturquoise w-full rounded-full dark:border-lightwhiteturquoise dark:text-lightwhiteturquoise dark:hover:text-addwhiteturquoise dark:hover:border-addwhiteturquoise">
                  Вход
                </button>
              </Link>
              <button className="h-[38px] py-0 border-none font-medium bg-turquoise text-white hover:bg-lightturquoise active:bg-darkturquoise w-full rounded-full dark:text-dark dark:bg-lightwhiteturquoise dark:hover:bg-addwhiteturquoise">
                <p className="">Регистрация</p>
              </button>
            </div>
          )}
        </div>
        {translateRoute(pathname) !== "none" ? (
          <div className="flex flex-row pl-2 items-center gap-0.5">
            <Link to={pathname.replace(/\/\d+$/, "")} className="text-darkturquoise dark:text-whiteturquoise hover:text-turquoise cursor-pointer">{translateRoute(pathname)}</Link>
            <LeftArrow className="w-4 mt-1" alt="" />
            <p className="text-darkturquoise dark:text-whiteturquoise">...</p>
          </div>
        ) : (
          <div></div>
        )}
      </header>
    </div>
  );
};

export default Header;
