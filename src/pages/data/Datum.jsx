import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CompetitionImage from '/src/assets/imgs/CompetiotionTemplate.png'
import MainInfo from "/src/components/elements/MainInfo.jsx";
import Tabs from "/src/components/elements/Tabs.jsx";
import FilesTable from "/src/components/elements/FilesTable.jsx";
import RightInfo from "/src/components/elements/RightInfo";

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

  return (
    <div className="max-w-[1110px] mx-auto">
      <div className="flex flex-row gap-20 justify-between pl-2 text-dark">
        <div className="mb-8 flex-grow">
          <MainInfo
            user={user}
            details={datumDetails}
            addButtonText="Добавить"
            removeButtonText="Удалить"
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
              details={datumDetails.files}            
            />
          )}
        </div>
        <RightInfo 
          image={CompetitionImage}
          creator={datumDetails.creator}
          people={datumDetails.added}
          rate={datumDetails.rate}
        />
      </div>
    </div>
  );
};

export default Datum;
