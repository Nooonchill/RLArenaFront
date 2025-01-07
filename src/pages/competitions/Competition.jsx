import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CompetitionImage from '/src/assets/imgs/CompetiotionTemplate.png'
import Star from '/src/assets/icons/Star.svg'
import User from '/src/assets/icons/User.svg'
import Info from "/src/components/elements/Info.jsx";
import Tabs from "/src/components/elements/Tabs.jsx";
import FilesTable from "/src/components/elements/FilesTable.jsx";

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
          <Info
            details={competitionDetails}
          />
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabClick} />
      
          {activeTab == 1 ? (
            <div className="shadow-md rounded-lg">
              <div className="markdown-container p-4">
                <ReactMarkdown>{competitionDetails.description}</ReactMarkdown>
              </div>
            </div>
          ) : activeTab === 2 ? (
            <FilesTable
              details={competitionDetails}            
            />
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
