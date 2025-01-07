import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import Search from '/src/assets/icons/Search.svg';
import User from '/src/assets/icons/User.svg';
import LeftArrow from '/src/assets/icons/LeftArrow.svg';

const Header = ({}) => {
  
  const [isLogged, setIsLogged] = useState(false);

  const pathname = `${window.location.pathname}`;
  
  const routeDict = {
    "/^\\/competitions\\/\\d+$/": "Соревнования",
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

  const user = {
    username: "NoooN",
    fullName: "Горский Иван Артёмович",
    organization: "УрФУ",
    registration_date: "5-01-2025",
    location: "Екатеринбург, Россия",
    saved: {
      competitions: [24],
      guides: [201, 205, 203],
      data: [101, 103, 104],
    },
    created: {
      competitions: [1],
      guides: [],
      data: [],
    }
  }

  const navigate = useNavigate();

  const profileNavigate = () => {
    navigate('/profile');
  };

  const backNavigate = () => {
    navigate(pathname);
  }

  return (
    <div className="max-w-[1110px] mx-auto">
      <header className="flex flex-col gap-4">
        <div className="flex justify-between items-start bg-none space-x-4">
          <form className="max-w-[540px] w-full bg-none">
            <div className="relative h-[38px]">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Search alt="Search" className="cursor-pointer" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full h-[38px] p-4 ps-11 text-base text-dark bg-lightwhiteturquoise rounded-full focus:outline-none focus:ring-0 placeholder-dark border-2 border-turquoise"
                placeholder="Поиск..."
                required
              />
            </div>
          </form>
          {isLogged ? (
            <div onClick={profileNavigate} className="flex flex-row text-dark px-2 mb-4 rounded-full border-2 border-turquoise hover:border-lightturquoise bg-white w-fit cursor-pointer h-8">
              <User alt="User" className="mr-2 h-6" />
              <h1  className="text-xl mr-1">{user.username}</h1>
            </div>
          ) : (
            <div className="flex gap-3 h-[38px]">
              <Link to="/auth" className="h-[38px]">
                <button className="h-[38px] py-0 bg-white font-medium border-2 border-turquoise text-turquoise hover:text-lightturquoise hover:border-lightturquoise active:text-darkturquoise active:border-darkturquoise w-full rounded-full">
                  Вход
                </button>
              </Link>
              <button className="h-[38px] py-0 border-none font-medium bg-turquoise text-white hover:bg-lightturquoise active:bg-darkturquoise w-full rounded-full">
                <p className="">Регистрация</p>
              </button>
            </div>
          )}
        </div>
        {translateRoute(pathname) !== "none" ? (
          <div className="flex flex-row pl-2 items-center gap-0.5">
            <Link to={pathname.replace(/\/\d+$/, "")} className="text-darkturquoise hover:text-turquoise cursor-pointer">{translateRoute(pathname)}</Link>
            <LeftArrow className="w-4 mt-1" alt="" />
            <p className="text-darkturquoise">...</p>
          </div>
        ) : (
          <div></div>
        )}
      </header>
    </div>
  );
};

export default Header;
