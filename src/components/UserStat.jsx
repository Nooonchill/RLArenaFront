import React, { useState } from "react";

const UserStat = ({user, isLogged}) => {
  const total = user.saved.competitions.length + user.created.competitions.length
  const dashValue = 75 * user.stats.solved / total;

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

  return (
    <div className="bg-lightwhiteturquoise p-6 rounded-3xl mb-6 text-center">
      {!isLogged ? (
        <h1 className="text-dark text-4xl mb-4">Добро пожаловать!</h1>
      ) : (
        <div>
          <h1 className="text-dark text-4xl mb-4">Добро пожаловать, {user.username}!</h1>
          <div className="flex justify-around text-dark items-stretch space-x-4">
            <div className="bg-none p-2 m-1 w-1/4 items-center justify-center rounded-full flex flex-col">
              <h1>
                <span className="text-dark text-4xl">#</span>
                <span className="text-dark text-4xl">{user.stats.position}</span>
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
                  <span className="text-4xl font-bold text-turquoise dark:text-turquoise">{(user.stats.solved/total * 100).toFixed(0)}%</span>
                  <span className="text-turquoise font-semibold dark:text-turquoise block">{user.stats.solved}<span className="text-dark">/{total}</span> </span>
                </div>
              </div>
              <span className="text-sm mb-2 mt-[-12px]">Процент решений</span>
            </div>
            <div className="bg-none p-2 rounded-full m-1 w-1/4 items-center justify-center flex flex-col ">
              <h1>
                <span className="text-dark text-4xl ">{changeTimeView(user.stats.timedelta)}</span>
              </h1>
              <span className="text-sm">Среднее время решения</span>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default UserStat;
