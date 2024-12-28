import React, { useState } from "react";
import User from '/src/assets/icons/User.svg'
import Winner from '/src/assets/icons/Winner.svg'
import Second from '/src/assets/icons/Second.svg'
import Third from '/src/assets/icons/Third.svg'


function Home() {
  
  const [isLogged, setIsLogged] = useState(true);
  const solved = 63;
  const total = 100;
  const dashValue = 75 * solved / total;
  const position = 236;
  const username = "NoooN"

  const timedelta = "PT5H30M";
  // Парсим строку, используя регулярное выражение
  const match = timedelta.match(/PT(\d+H)?(\d+M)?/);

  let hours = 0;
  let minutes = 0;

  // Если найдены часы
  if (match[1]) {
    hours = parseInt(match[1].replace("H", ""), 10);
  }

  // Если найдены минуты
  if (match[2]) {
    minutes = parseInt(match[2].replace("M", ""), 10);
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
                <span className="text-4xl font-bold text-turquoise dark:text-turquoise">{solved/total * 100}%</span>
                <span className="text-turquoise font-semibold dark:text-turquoise block">{solved}<span className="text-dark">/{total}</span> </span>
              </div>
            </div>
            <span className="text-sm mb-2 mt-[-12px]">Процент решений</span>
          </div>
          <div className="bg-none p-2 rounded-full m-1 w-1/4 items-center justify-center flex flex-col ">
            <h1>
              <span className="text-dark text-4xl ">{hours}</span>
              <span className="text-dark text-4xl ">ч.</span>
              <span className="text-dark text-4xl "> {minutes}</span>
              <span className="text-dark text-4xl ">м.</span>
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
            <h2 className="text-2xl">Результаты "Названия сореванования"</h2>
            <span>"дата окончания"</span>
          </div>
          <div className="flex justify-center space-x-4">
            <div className="flex pb-5 pt-8 rounded-full">
              <div className="flex flex-col items-center w-24 mt-3">
                <img src={User} alt="User" className="w-10 rounded-full border-2" />
                <img src={Second} alt="Second" className="absolute mt-6 ml-6 w-6" />
                <span className="truncate max-w-28">username</span>
              </div>
              <div className="flex flex-col items-center w-24">
                <img src={User} alt="User" className="w-10 rounded-full border-2" />
                <img src={Winner} alt="Winner" className="absolute mt-[-24px] w-6" />
                <span className="truncate max-w-28">username</span>
              </div>
              <div className="flex flex-col items-center w-24 mt-6">
                <img src={User} alt="User" className="w-10 rounded-full border-2" />
                <img src={Third} alt="Third" className="absolute mt-6 ml-6 w-6" />
                <span className="truncate max-w-28">username</span>
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
                  <tr className="odd:bg-white even:bg-gray-50">
                    <th scope="row" className="pl-6 py-4 font-medium text-dark whitespace-nowrap ">
                      1
                    </th>
                    <td className="px-6 py-4">
                      Silver
                    </td>
                    <td className="px-6 py-4">
                      23:10
                    </td>
                    <td className="px-6 py-4">
                      565
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <th scope="row" className="pl-6 py-4 font-medium text-dark whitespace-nowrap ">
                      2
                    </th>
                    <td className="px-6 py-4">
                      White
                    </td>
                    <td className="px-6 py-4">
                      48:12
                    </td>
                    <td className="px-6 py-4">
                      243
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <th scope="row" className="pl-6 py-4 font-medium text-dark whitespace-nowrap ">
                      3
                    </th>
                    <td className="px-6 py-4">
                      Black
                    </td>
                    <td className="px-6 py-4">
                     00:23
                    </td>
                    <td className="px-6 py-4">
                     212
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <th scope="row" className="pl-6 py-4 font-medium text-dark whitespace-nowrap">
                      4
                    </th>
                    <td className="px-6 py-4">
                      Gray
                    </td>
                    <td className="px-6 py-4">
                      324:12
                    </td>
                    <td className="px-6 py-4">
                      32
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-lightwhiteturquoise text-dark p-2 rounded-3xl shadow-md">
        <div className=" bg-white border-darkturquoise rounded-[20px] p-4">
          <div className="mb-4">
            <h2 className="text-2xl">Заголовок новости</h2>
            <span>дата выхода</span>
          </div>
          <span>Текст</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
