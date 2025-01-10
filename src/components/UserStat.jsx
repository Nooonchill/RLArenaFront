import React, { useState } from "react";
import { changeTimeView } from "/src/utils/TimeView.js"

const UserStat = ({user, isLogged}) => {
  const total = user.saved.competitions.length + user.created.competitions.length
  const dashValue = 75 * user.stats.solved / total;

  return (
    <div className="bg-lightwhiteturquoise pt-2 rounded-3xl mb-6 text-center">
      {!isLogged ? (
        <h1 className="text-dark text-4xl">Добро пожаловать!</h1>
      ) : (
        <div>
          <h1 className="text-dark text-4xl mb-1">Добро пожаловать, {user.username}!</h1>
          <div className="flex justify-around text-dark items-stretch space-x-4 f flex-wrap">
            <div className="bg-none p-2 m-1 min-w-[190px] w-1/4 items-center justify-center rounded-full flex flex-col">
              <span className="text-dark text-3xl">#{user.stats.position}</span>
              <span className="text-sm">Рейтинг</span>
            </div>
            <div className="bg-none p-2 rounded-full m-1 items-center text-center flex flex-col min-w-[190px] w-1/4">
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
                  <span className="text-3xl font-bold text-turquoise dark:text-turquoise">{(user.stats.solved/total * 100).toFixed(0)}%</span>
                  <span className="text-turquoise font-semibold dark:text-turquoise block">{user.stats.solved}<span className="text-dark">/{total}</span> </span>
                </div>
              </div>
              <span className="text-sm mb-2 mt-[-12px]">Процент решений</span>
            </div>
            <div className="bg-none p-2 rounded-full m-1 min-w-[190px] w-1/4 items-center justify-center flex flex-col ">
              <span className="text-dark text-3xl ">{changeTimeView(user.stats.timedelta)}</span>
              <span className="text-sm">Среднее время решения</span>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default UserStat;
