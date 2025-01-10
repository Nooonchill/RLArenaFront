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
  const [hideRightInfo, setHideRightInfo] = useState(false);
  const [lockRightInfo, setLockRightInfo] = useState(false); // Блокировка повторного появления

  const leftRef = useRef();

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const handleResize = () => {
      if (leftRef.current) {
        const leftWidth = leftRef.current.offsetWidth;
        const minLeftWidth = 400; // Задаем минимальную ширину левой части

        if (leftWidth <= minLeftWidth && !lockRightInfo) {
          setHideRightInfo(true);
          setLockRightInfo(true); // Блокируем повторное появление
        } else if (leftWidth > minLeftWidth + 250) {
          setLockRightInfo(false);
          setHideRightInfo(false);
        }
      }
    };

    // Слушаем событие изменения размера окна
    window.addEventListener("resize", handleResize);
    handleResize(); // Проверка при первом рендере

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [lockRightInfo]);


  return (
    <div className="max-w-[1110px] mx-auto">
      <div className="flex flex-row gap-20 justify-between pl-2 text-dark">
        <div 
          ref={leftRef} 
          className="mb-8 flex-grow flex-shrink max-w-[750px]"
        >
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
        {!hideRightInfo && (
          <RightInfo 
            image={CompetitionImage}
            creator={datumDetails.creator}
            people={datumDetails.added}
            rate={datumDetails.rate}
          />
        )}
      </div>
    </div>
  );
};

export default Datum;
