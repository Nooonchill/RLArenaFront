import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CompetitionImage from '/src/assets/imgs/CompetiotionTemplate.png'
import MainInfo from "/src/components/elements/MainInfo.jsx";
import Tabs from "/src/components/elements/Tabs.jsx";
import FilesTable from "/src/components/elements/FilesTable.jsx";
import ResultsTable from "/src/components/elements/ResultsTable.jsx";
import RightInfo from "/src/components/elements/RightInfo";

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
            <ResultsTable 
              results={competitionDetails.solutions}
            />
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
