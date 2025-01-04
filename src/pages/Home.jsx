import React, { useState } from "react";
import User from '/src/assets/icons/User.svg'
import Winner from '/src/assets/icons/Winner.svg'
import Second from '/src/assets/icons/Second.svg'
import Third from '/src/assets/icons/Third.svg'
import Competitions from "./Competitions";


function Home() {
  
  const [isLogged, setIsLogged] = useState(true);
  const solved = 23;
  const total = 57;
  const dashValue = 75 * solved / total;
  const position = 236;
  const username = "NoooN"

  const timedelta = "PT5H30M";

  const changeTimeView = (timedelta) => {
    const match = timedelta.match(/PT(\d+H)?(\d+M)?/);
    let hours = 0;
    let minutes = 0;
    if (match[1]) {
      hours = parseInt(match[1].replace("H", ""), 10);
    }
    if (match[2]) {
      minutes = parseInt(match[2].replace("M", ""), 10);
    }
    return hours + "ч. " + minutes + "мин. ";
  };

  const lastCompetitionResult = {
    title: "Предсказание цен на дом",
    endDate: "23 дек. 2024 г.",
    users: [
      { place: 1, username: 'Ivan', time: "PT23H10M", score: 565},
      { place: 2, username: 'SleepKnight', time: "PT13H30M", score: 432},
      { place: 3, username: 'MontK', time: "PT53H10M", score: 432},
      { place: 4, username: 'Dinx', time: "PT35H10M", score: 413},
      { place: 5, username: 'Korkx', time: "PT27H23M", score: 323},
      { place: 6, username: 'BlackString', time: "PT29H33M", score: 297},
      { place: 7, username: 'DownTownMan', time: "PT32H59M", score: 234},
      { place: 8, username: 'BoringShow', time: "PT97H10M", score: 234},
      { place: 9, username: '43StartBest', time: "PT123H42M", score: 115},
      { place: 10, username: 'tiredwarrior', time: "PT12H15M", score: 95},
    ]
  }

  const lastNews = {
    title: "Разработка",
    date: "02-01-2024",
    text: "Это первая новость о разработке фронтенда сайта RLArena. Данный сайт является площадкой для проведения RL/ML соревнований... Данный сайт является площадкой для проведения RL/ML соревнований..."
  }

  

  return (
    <div className="max-w-[1110px] mx-auto">
      {isLogged ? (
        <div className="bg-lightwhiteturquoise p-6 rounded-3xl mb-6 text-center">
          <h1 className="text-dark text-4xl mb-4">Добро пожаловать, {username}!</h1>
          <div className="flex justify-around text-dark items-stretch space-x-4">
            <div className="bg-none p-2 m-1 w-1/4 items-center justify-center rounded-full flex flex-col">
              <h1>
                <span className="text-dark text-4xl">#</span>
                <span className="text-dark text-4xl">{position}</span>
              </h1>
              <span className="text-sm">Рейтинг</span>
            </div>
          <div className="bg-none p-2 rounded-full m-1 items-center text-center flex flex-col w-1/4">
            <div className="relative w-28 ">
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
              <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="text-4xl font-bold text-turquoise dark:text-turquoise">{(solved/total * 100).toFixed(0)}%</span>
                <span className="text-turquoise font-semibold dark:text-turquoise block">{solved}<span className="text-dark">/{total}</span> </span>
              </div>
            </div>
            <span className="text-sm mb-2 mt-[-12px]">Процент решений</span>
          </div>
          <div className="bg-none p-2 rounded-full m-1 w-1/4 items-center justify-center flex flex-col ">
            <h1>
              <span className="text-dark text-4xl ">{changeTimeView(timedelta)}</span>
            </h1>
            <span className="text-sm">Среднее время решения</span>
          </div>
        </div>
      </div>
      ) : (
          <div></div>
      )}
      <div className="bg-lightwhiteturquoise text-dark p-2 rounded-3xl mb-6">
        <div className=" bg-white border-darkturquoise rounded-[20px] p-4">
          <div className="mb-4">
            <h2 className="text-2xl">Результаты "{lastCompetitionResult.title}"</h2>
            <span>{lastCompetitionResult.endDate}</span>
          </div>
          <div className="flex justify-center space-x-4">
            <div className="flex pb-5 pt-8 rounded-full">
              <div className="flex flex-col items-center w-24 mt-3">
                <img src={User} alt="User" className="w-10 rounded-full border-2" />
                <img src={Second} alt="Second" className="absolute mt-6 ml-6 w-6" />
                <span className="truncate max-w-28">{lastCompetitionResult['users'][1].username}</span>
              </div>
              <div className="flex flex-col items-center w-24">
                <img src={User} alt="User" className="w-10 rounded-full border-2" />
                <img src={Winner} alt="Winner" className="absolute mt-[-24px] w-6" />
                <span className="truncate max-w-28">{lastCompetitionResult['users'][0].username}</span>
              </div>
              <div className="flex flex-col items-center w-24 mt-6">
                <img src={User} alt="User" className="w-10 rounded-full border-2" />
                <img src={Third} alt="Third" className="absolute mt-6 ml-6 w-6" />
                <span className="truncate max-w-28">{lastCompetitionResult['users'][2].username}</span>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-x-auto sm:rounded-lg m-auto max-w-[800px]">
              <table className="w-full text-sm text-left rtl:text-right text-dark">
                <thead className="text-xs text-dark uppercase bg-lightwhiteturquoise">
                  <tr>
                    <th scope="col" className="pl-6 py-3">
                      #
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Пользователь
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Время
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Оценка
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {lastCompetitionResult['users'].map((result) => (
                    <tr className="odd:bg-white even:bg-gray-50">
                      <th scope="row" className="pl-6 py-4 font-medium text-dark whitespace-nowrap ">
                        {result.place}
                      </th>
                      <td className="px-6 py-4">
                        {result.username}
                      </td>
                      <td className="px-6 py-4">
                        {changeTimeView(result.time)}
                      </td>
                      <td className="px-6 py-4">
                        {result.score}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

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
