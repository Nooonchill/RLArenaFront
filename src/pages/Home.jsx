import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import User from '/src/assets/icons/User.svg'
import Winner from '/src/assets/icons/Winner.svg'
import Second from '/src/assets/icons/Second.svg'
import Third from '/src/assets/icons/Third.svg'
import Competitions from '/src/pages/competitions/Competitions.jsx';
import CardImage from '/src/assets/imgs/CompetiotionTemplate.png'
import ResultsTable from "/src/components/elements/ResultsTable.jsx";
import CompetitionNews from "/src/components/CompetitionNews.jsx";
import UserStat from "/src/components/UserStat.jsx";


// Моковые данные
import { user, logged } from '/src/mockdata/userData.js';
import { lastCompetition, lastNews } from '/src/mockdata/homeData.js';

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
