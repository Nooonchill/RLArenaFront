import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import Search from '/src/assets/icons/Search.svg';
import User from '/src/assets/icons/User.svg'; 

const Header = ({}) => {
  
  const [isLogged, setIsLogged] = useState(false);
  const username = "NoooN"

  const navigate = useNavigate();

  const profileNavigate = () => {
    navigate('/profile');
  };

  return (
    <div className="max-w-[1110px] mx-auto h-[38px]">
      <header className="flex justify-between items-start bg-none space-x-4">
        <form className="max-w-[540px] w-full bg-none">
          <div className="relative h-[38px]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <img src={Search} alt="Search" className="cursor-pointer" />
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
            <img src={User} alt="User" className="mr-2 h-6" />
            <h1  className="text-xl mr-1">{username}</h1>
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
      </header>
    </div>
  );
};

export default Header;
