import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CompetitionImage from '/src/assets/imgs/CompetiotionTemplate.png'
import MainInfo from "/src/components/elements/MainInfo.jsx";
import Tabs from "/src/components/elements/Tabs.jsx";
import FilesTable from "/src/components/elements/FilesTable.jsx";
import ResultsTable from "/src/components/elements/ResultsTable.jsx";
import RightInfo from "/src/components/elements/RightInfo";
import { changeTimeView, formatDateTime } from "/src/utils/TimeView.js";

// Моковые данные
import { user, logged } from '/src/mockdata/userData.js';
import { competitions, competitionsDetails, userSolutions } from "/src/mockdata/competitionData.js";


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

  return (
    <div className="max-w-[1110px] mx-auto">
      <div className="flex flex-row gap-20 justify-between pl-2 text-dark">
        <div className="mb-8 flex-grow">
          <MainInfo
            user={user}
            details={competitionDetails}
            addButtonText="Участвовать"
            removeButtonText="Отказаться"
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
              details={competitionDetails.data}            
            />
          ) : (
            <div>
              <div>
                <h1 className="text-lg mb-1">Ваши решения:</h1>
                <div className="relative overflow-x-auto sm:rounded-lg m-auto max-w-[800px] mb-4">
                  <ResultsTable
                    results={userSolutions}
                    rows={20}
                    columns={[
                      { key: "place", label: "Место" },
                      { key: "datetime", label: "Время", format: (value) => formatDateTime(value) },
                      { key: "title", label: "Решение" },
                      { key: "score", label: "Оценка" },
                    ]}
                  />
                </div>
              </div>
              <div>
                <h1 className="text-lg mb-1">Лучшие решения:</h1>
                <div className="relative overflow-x-auto sm:rounded-lg m-auto max-w-[800px]">
                  <ResultsTable
                    results={competitionDetails.solutions}
                    rows={20}
                    columns={[
                      { key: "place", label: "Место" },
                      { key: "username", label: "Пользователь" },
                      { key: "time", label: "Время", format: (value) => changeTimeView(value) },
                      { key: "score", label: "Оценка" },
                    ]}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <RightInfo 
          image={CompetitionImage}
          creator={competitionDetails.organizer}
          people={competitionDetails.participants}
          rate={competitionDetails.rate}
        />
      </div>
    </div>
  );
};

export default Competition;
