import React, { useState } from "react";
import CompetitionNews from "../components/home/CompetitionNews.jsx";
import UserStat from "../components/userInfo/UserStat.jsx";
import UpdateNews from "../components/home/UpdateNews.jsx";

// Моковые данные
import { user, logged } from '../mockdata/userData.js';
import { lastCompetition, lastNews } from '../mockdata/homeData.js';

function Home() {
  const [isLogged, setIsLogged] = useState(logged);

  return (
    <div className="max-w-[1110px] mx-auto">
      {isLogged && <UserStat user={user} isLogged={logged} />}
      <CompetitionNews competition={lastCompetition} />
      <UpdateNews news={lastNews} />
    </div>
  );
}

export default Home;
