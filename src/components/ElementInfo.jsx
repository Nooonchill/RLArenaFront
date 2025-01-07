import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CompetitionImage from '/src/assets/imgs/CompetiotionTemplate.png'
import Star from '/src/assets/icons/Star.svg'
import User from '/src/assets/icons/User.svg'
import Add from '/src/assets/icons/Add.svg'

// Моковые данные
import { user, logged } from '/src/mockdata/userData.js';
import { competitions, competitionsDetails } from "/src/mockdata/competitionData.js";


const Competition = () => {
  const { id } = useParams();
  const competitionDetails = competitionsDetails.find((item) => item.id === +id);

  const tabs = [
    { id: 1, title: "Обзор" },
    { id: 2, title: "Данные" },
    { id: 3, title: "Решения" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabsRef = useRef([]);

  useEffect(() => {
    const activeButton = tabsRef.current[activeTab - 1];
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setUnderlineStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [activeTab]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

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
    <div className="max-w-[1110px] mx-auto">
      <div className="flex flex-row gap-20 justify-between pl-2 text-dark">
        <div className="mb-8 flex-grow">
          <div className="text-dark mb-6">
            <h1 className="text-4xl mb-3">{competitionDetails.title}</h1>
            <div className="flex flex-row overflow-hidden flex-nowrap gap-2 mb-2">
              {competitionDetails.tags.map((tag) => (
                <div className="bg-lightwhiteturquoise rounded-full py-1 px-2">
                  <span>#{tag}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-row justify-between items-end">
              <span>{competitionDetails.startDate.replaceAll("-", ".")} - {competitionDetails.endDate.replaceAll("-", ".")}</span>
              {user.saved.competitions.includes(competitionDetails.id) || user.created.competitions.includes(competitionDetails.id) ? (
                <button className="h-[38px] py-0 bg-white font-medium border-2 border-turquoise text-turquoise hover:text-lightturquoise hover:border-lightturquoise active:text-darkturquoise active:border-darkturquoise w-max rounded-full">
                  Отказаться
                </button>
              
              ) : (
                <button className="flex flex-row items-center gap-1 w-max h-[38px] py-0 border-none font-medium bg-turquoise text-white hover:bg-lightturquoise active:bg-darkturquoise rounded-full">
                  Участовать
                </button>
              )}
            </div>
          </div>
          <div className="relative flex flex-row gap-[30px] mb-6 text-lg">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                ref={(el) => (tabsRef.current[index] = el)}
                className={`p-0 mb-0.25 bg-white border-none ${
                  activeTab === tab.id ? "text-darkturquoise" : "text-dark"
                }`}
              >
                {tab.title}
              </button>
            ))}
            {/* Подчеркивание */}
            <div
              className="absolute bottom-0 h-[2px] bg-darkturquoise transition-all duration-300"
              style={underlineStyle}
            ></div>
          </div>
          {activeTab < 3 ? (
            activeTab == 1 ? (
            <div className="shadow-md rounded-lg">
              <div className="markdown-container p-4">
                <ReactMarkdown>{competitionDetails.description}</ReactMarkdown>
              </div>
            </div>
            ) : (
              <div className="flex flex-col items-center">
                <table className="w-full rounded-lg overflow-hidden text-sm text-left rtl:text-right text-dark mb-4">
                  <thead className="text-dark uppercase bg-lightwhiteturquoise">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Файл
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Размер
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Описание
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitionDetails.data.map((file) => (
                      <tr className="odd:bg-white even:bg-gray-50">
                        <th scope="row" className="pl-6 py-4 font-medium text-dark whitespace-nowrap ">
                          {file.fileName}
                        </th>
                        <td className="px-6 py-4">
                          {file.size}
                        </td>
                        <td className="px-6 py-4">
                          {file.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button className="max-w-[100px] h-[38px] py-0 border-none font-medium bg-turquoise text-white hover:bg-lightturquoise active:bg-darkturquoise w-full rounded-full">
                    Скачать
                </button>
              </div>
            )
          ) : (
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
                  {competitionDetails.solutions.map((result) => (
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
          )}
        </div>
        <div className="min-w-[320px]">
          <img src={CompetitionImage} className="w-[320px] h-[180px] mb-4" alt="" />
          <div className="flex flex-col gap-y-2 text-lg font-semibold">
            <span>{competitionDetails.organizer}</span> 
            <div className="flex flex-row">
              <User className="mr-2" alt="" />
              <span>{competitionDetails.participants}</span>
            </div> 
            <div className="flex flex-row">
              <Star className="mr-2" alt="" />
              <span className="">{competitionDetails.rate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competition;
