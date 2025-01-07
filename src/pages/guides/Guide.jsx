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
import { guides, guidesDetails } from "/src/mockdata/guideData.js";

const Guide = () => {
  const { id } = useParams();

  const guideDetails = guidesDetails.find((item) => item.id === +id);

  const tabs = [
    { id: 1, title: "Обзор" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="max-w-[1110px] mx-auto">
      <div className="flex flex-row gap-20 justify-between pl-2 text-dark">
        <div className="mb-8 flex-grow">
          <Info
            details={guideDetails}
          />
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabClick} />
          {activeTab == 1 ? (
            <div className="shadow-md rounded-lg">
              <div className="markdown-container p-4">
                <ReactMarkdown>{guideDetails.text}</ReactMarkdown>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
            </div>
          )}
        </div>
        <div className="min-w-[320px]">
          <img src={CompetitionImage} className="w-[320px] h-[180px] mb-4" alt="" />
          <div className="flex flex-col gap-y-2 text-lg font-semibold">
            <span>{guideDetails.creator}</span> 
            <div className="flex flex-row">
              <User className="mr-2" alt="" />
              <span>{guideDetails.added}</span>
            </div> 
            <div className="flex flex-row">
              <Star className="mr-2" alt="" />
              <span className="">{guideDetails.rate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
