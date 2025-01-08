import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CompetitionImage from '/src/assets/imgs/CompetiotionTemplate.png'
import MainInfo from "/src/components/elements/MainInfo.jsx";
import Tabs from "/src/components/elements/Tabs.jsx";
import RightInfo from "/src/components/elements/RightInfo";

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
          <MainInfo
            user={user}
            details={guideDetails}
            addButtonText="Добавить"
            removeButtonText="Удалить"
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
        <RightInfo 
          image={CompetitionImage}
          creator={guideDetails.creator}
          people={guideDetails.added}
          rate={guideDetails.rate}
        />
      </div>
    </div>
  );
};

export default Guide;
