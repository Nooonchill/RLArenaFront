import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CompetitionImage from '/src/assets/imgs/CompetiotionTemplate.png'
import MainInfo from "/src/components/elements/MainInfo.jsx";
import Tabs from "/src/components/elements/Tabs.jsx";
import FilesTable from "/src/components/elements/FilesTable.jsx";
import ResultsTable from "/src/components/elements/ResultsTable.jsx";
import RightInfo from "/src/components/elements/RightInfo";
import Form from '/src/components/Form.jsx';
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
    { id: 4, title: "Загрузить" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [hideRightInfo, setHideRightInfo] = useState(false);
  const [lockRightInfo, setLockRightInfo] = useState(false); // Блокировка повторного появления

  const leftRef = useRef();

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleAddSolutionClick = () => {
    setActiveTab(4);
  }

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
            details={competitionDetails}
            addButtonText="Участвовать"
            removeButtonText="Отказаться"
            addSolutionButtonClick={handleAddSolutionClick}
          />
          <Tabs 
            tabs={tabs} 
            activeTab={activeTab} 
            onTabChange={handleTabClick} 
          />
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
          ) : activeTab === 3 ?(
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
          ) : (
            <div className="w-[250px]">
              <Form type='addSolution' isCretionForm={false} buttonText="Отправить" />
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
