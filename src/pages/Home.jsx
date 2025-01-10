import React, { useState } from "react";
import CompetitionNews from "../components/CompetitionNews.jsx";
import UserStat from "../components/UserStat.jsx";


// Моковые данные
import { user, logged } from '../mockdata/userData.js';
import { lastCompetition, lastNews } from '../mockdata/homeData.js';

function Home() {
  const [isLogged, setIsLogged] = useState(logged);

  return (
    <div className="max-w-[1110px] mx-auto">
      {isLogged && <UserStat user={user} isLogged={logged} />}
      <CompetitionNews competition={lastCompetition} />
      <div className="bg-lightwhiteturquoise text-dark p-2 rounded-3xl shadow-md">
        <div className=" bg-white border-darkturquoise rounded-[20px] p-4">
          <div className="mb-4">
            <h2 className="text-2xl">{lastNews.title}</h2>
            <span>{lastNews.date}</span>
          </div>
          <span>{lastNews.text}</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
