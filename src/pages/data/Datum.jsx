import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CompetitionImage from '/src/assets/imgs/CompetiotionTemplate.png'
import Star from '/src/assets/icons/Star.svg'
import User from '/src/assets/icons/User.svg'
import Add from '/src/assets/icons/Add.svg'


const Datum = () => {
  const { id } = useParams();

  const dataDetails = [
    { 
      id: 101, 
      title: "Данные о ценах на дома в регионе", 
      creator: "HousingData Inc.", 
      createdDate: "15-03-2023", 
      rate: 4.9, 
      added: 3201,
      description: "Этот набор данных содержит **информацию о ценах на дома**, их характеристиках (площадь, количество комнат и т.д.) и геолокации. Полезен для задач прогнозирования стоимости жилья.",
      tags: ['Дома', "Цены", "HousingData"],
      files: [
        { name: "house_prices.csv", size: "12MB", description: "Основной файл с данными о ценах на дома." },
        { name: "regions.json", size: "3MB", description: "Справочник регионов с координатами и дополнительной информацией." },
        { name: "readme.md", size: "10KB", description: "Инструкция по работе с набором данных." },
      ],
    },
    { 
      id: 102, 
      title: "Характеристики автомобилей и их стоимость", 
      creator: "AutoStats", 
      createdDate: "10-07-2022", 
      rate: 4.7, 
      added: 2845,
      description: "Набор данных включает **информацию об автомобилях**, таких как модель, год выпуска, мощность двигателя и их рыночная стоимость. Используется для задач регрессии и анализа характеристик.",
      tags: ['Автомобили', "Характеристики", "AutoStats"],
      files: [
        { name: "car_stats.csv", size: "8MB", description: "Данные о характеристиках автомобилей и их стоимости." },
        { name: "brands.csv", size: "1MB", description: "Справочник брендов автомобилей." },
        { name: "readme.md", size: "15KB", description: "Документация для работы с данными." },
      ],
    },
    { 
      id: 103, 
      title: "Статистика посещаемости спортивных мероприятий", 
      creator: "Sports Analytics", 
      createdDate: "20-11-2023", 
      rate: 4.3, 
      added: 1582,
      description: "Данные о посещаемости **спортивных мероприятий**, включая виды спорта, даты, количество зрителей и средний возраст аудитории.",
      tags: ['Посещаемость', "Спорт", "Мероприятия", "SportsAnalytics"],
      files: [
        { name: "attendance_data.csv", size: "5MB", description: "Статистика по посещаемости мероприятий." },
        { name: "sports_types.json", size: "2MB", description: "Справочник видов спорта с описаниями." },
        { name: "readme.md", size: "8KB", description: "Информация о структуре данных." },
      ],
    },
    { 
      id: 104, 
      title: "Анализ здоровья детей и подростков", 
      creator: "Health for Kids", 
      createdDate: "05-09-2021", 
      rate: 4.8, 
      added: 4723,
      description: "Этот набор данных содержит **медицинские показатели здоровья детей и подростков**, включая рост, вес, физическую активность и хронические заболевания.",
      tags: ['Здоровье', "Дети", "Подростки"],
      files: [
        { name: "health_data.csv", size: "10MB", description: "Основной файл с медицинскими данными." },
        { name: "categories.json", size: "500KB", description: "Справочник медицинских категорий и кодов." },
        { name: "readme.md", size: "12KB", description: "Руководство по использованию данных." },
      ],
    },
    { 
      id: 105, 
      title: "Данные о погоде и климате за 10 лет", 
      creator: "ClimateTrack", 
      createdDate: "12-01-2020", 
      rate: 4.6, 
      added: 3528,
      description: "Набор данных включает **метеорологические данные за последние 10 лет**, такие как температура, влажность, осадки и направление ветра.",
      tags: ['Погода', "Климат", "Десятилетие"],
      files: [
        { name: "climate_data.csv", size: "25MB", description: "Данные о погоде и климате." },
        { name: "stations.json", size: "2MB", description: "Список метеорологических станций." },
        { name: "readme.md", size: "9KB", description: "Инструкция для анализа данных." },
      ],
    },
    { 
      id: 106, 
      title: "Геоданные с точками интереса", 
      creator: "GeoData Solutions", 
      createdDate: "03-06-2023", 
      rate: 4.4, 
      added: 2146,
      description: "Набор геоданных, содержащий **точки интереса** (POI), включая рестораны, магазины, больницы и образовательные учреждения.",
      tags: ['География', "Геоданные", "Интересы"],
      files: [
        { name: "poi_data.csv", size: "18MB", description: "Данные о точках интереса." },
        { name: "categories.json", size: "1MB", description: "Классификация типов POI." },
        { name: "readme.md", size: "7KB", description: "Описание структуры данных." },
      ],
    },
  ];
  

  const datumDetails = dataDetails.find((item) => item.id === +id);

  const tabs = [
    { id: 1, title: "Обзор" },
    { id: 2, title: "Данные" },
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

  const user = {
    username: "NoooN",
    fullName: "Горский Иван Артёмович",
    email: "nooonchill@gmail.com",
    organization: "УрФУ",
    registration_date: "5-01-2025",
    location: "Екатеринбург, Россия",
    saved: {
      competitions: [24],
      guides: [201, 205, 203],
      data: [101, 103, 104],
    },
    created: {
      competitions: [1],
      guides: [],
      data: [],
    }
  }

  return (
    <div className="max-w-[1110px] mx-auto">
      <div className="flex flex-row gap-20 justify-between pl-2 text-dark">
        <div className="mb-8 flex-grow">
          <div className="text-dark mb-6">
            <h1 className="text-4xl mb-3">{datumDetails.title}</h1>
            <div className="flex flex-row overflow-hidden flex-nowrap gap-2 mb-2">
              {datumDetails.tags.map((tag) => (
                <div className="bg-lightwhiteturquoise rounded-full py-1 px-2">
                  <span>#{tag}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-row justify-between items-end">
              <span>{datumDetails.createdDate.replaceAll("-", ".")}</span>
              {user.saved.data.includes(datumDetails.id) || user.created.data.includes(datumDetails.id) ? (
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
                <ReactMarkdown>{datumDetails.description}</ReactMarkdown>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <table className="w-full rounded-lg overflow-hidden text-sm text-left rtl:text-right text-dark mb-4">
                <thead className="text-dark uppercase bg-lightwhiteturquoise">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Файл
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Размер
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Описание
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {datumDetails.files.map((file) => (
                    <tr className="odd:bg-white even:bg-gray-50">
                      <th scope="row" className="pl-6 py-4 font-medium text-dark whitespace-nowrap ">
                        {file.name}
                      </th>
                      <td className="px-6 py-4">
                        {file.size}
                      </td>
                      <td className="px-6 py-4">
                        {file.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="max-w-[100px] h-[38px] py-0 border-none font-medium bg-turquoise text-white hover:bg-lightturquoise active:bg-darkturquoise w-full rounded-full">
                  Скачать
              </button>
            </div>
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
