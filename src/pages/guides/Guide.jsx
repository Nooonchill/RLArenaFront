import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CompetitionImage from '/src/assets/imgs/CompetiotionTemplate.png'
import Star from '/src/assets/icons/Star.svg'
import User from '/src/assets/icons/User.svg'
import Add from '/src/assets/icons/Add.svg'

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

  return (
    <div className="max-w-[1110px] mx-auto">
      <div className="flex flex-row gap-20 justify-between pl-2 text-dark">
        <div className="mb-8 flex-grow">
          <div className="text-dark mb-6">
            <h1 className="text-4xl mb-3">{guideDetails.title}</h1>
            <div className="flex flex-row overflow-hidden flex-nowrap gap-2 mb-2">
              {guideDetails.tags.map((tag) => (
                <div className="bg-lightwhiteturquoise rounded-full py-1 px-2">
                  <span>#{tag}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-row justify-between items-end">
              <span>{guideDetails.createdDate.replaceAll("-", ".")}</span>
              {user.saved.guides.includes(guideDetails.id) || user.created.guides.includes(guideDetails.id) ? (
                <button className="h-[38px] py-0 bg-white font-medium border-2 border-turquoise text-turquoise hover:text-lightturquoise hover:border-lightturquoise active:text-darkturquoise active:border-darkturquoise w-max rounded-full">
                  Удалить
                </button>
              ) : (
                <button className="flex flex-row items-center gap-1 w-max h-[38px] py-0 border-none font-medium bg-turquoise text-white hover:bg-lightturquoise active:bg-darkturquoise rounded-full">
                  Сохранить
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
