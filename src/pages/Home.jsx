import React, { useState } from "react";
import ContestNews from "../components/home/ContestNews.jsx";
import UserStat from "../components/userInfo/UserStat.jsx";
import UpdateNews from "../components/home/UpdateNews.jsx";
import Logo from "../assets/icons/Atom.svg"

// Моковые данные
import { user, logged } from '../mockdata/userData.js';
import { lastContest, lastNews } from '../mockdata/homeData.js';

function Home() {
  const [isLogged, setIsLogged] = useState(logged);

  return (
    <div className="max-w-[1110px] mx-auto">

      {isLogged ? (
        <UserStat user={user} isLogged={logged} />
      ) : (
        <div className="flex justify-center gap-1 bg-lightwhiteturquoise dark:bg-dark pt-2 rounded-3xl mb-6 text-center text-dark dark:text-lightwhiteturquoise">
          <Logo alt="Логотип" className="w-10 h-10"/>
          <h1 className="text-4xl pb-3">RLArena</h1>
        </div>
      )}
      <ContestNews Contest={lastContest} />
      <UpdateNews news={lastNews} />
    </div>
  );
}

export default Home;
