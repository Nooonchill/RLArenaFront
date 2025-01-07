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
import { data, dataDetails } from "/src/mockdata/dataData.js";

const Datum = () => {
  const { id } = useParams();

  const datumDetails = dataDetails.find((item) => item.id === +id);

  const tabs = [
    { id: 1, title: "Обзор" },
    { id: 2, title: "Файлы" },
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
            details={datumDetails}
          />
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabClick} />
          {activeTab == 1 ? (
            <div className="shadow-md rounded-lg">
              <div className="markdown-container p-4">
                <ReactMarkdown>{datumDetails.description}</ReactMarkdown>
              </div>
            </div>
          ) : (
            <FilesTable
              details={datumDetails}            
            />
          )}
        </div>
        <div className="min-w-[320px]">
          <img src={CompetitionImage} className="w-[320px] h-[180px] mb-4" alt="" />
          <div className="flex flex-col gap-y-2 text-lg font-semibold">
            <span>{datumDetails.creator}</span> 
            <div className="flex flex-row">
              <User className="mr-2" alt="" />
              <span>{datumDetails.added}</span>
            </div> 
            <div className="flex flex-row">
              <Star className="mr-2" alt="" />
              <span className="">{datumDetails.rate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datum;
