import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Search from '/src/assets/icons/Search.svg'
import DownArrow from '/src/assets/icons/DownArrow.svg'
import UpArrow from '/src/assets/icons/UpArrow.svg'
import CardImage from '/src/assets/imgs/CompetiotionTemplate.png'
import Card from '/src/components/Card.jsx'
import Form from '/src/components/Form.jsx'

function Data() {
  const [activeButton, setActiveButton] = useState(1);
  const [activeSort, setActiveSort] = useState(1);
  const [reverseSort, setReverseSort] = useState(false);
  const [filterType, setFilterType] = useState("Все");

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const handleSortClick = (SortId) => {
    if (activeSort === SortId) {
      setReverseSort(!reverseSort);
    } else {
      setActiveSort(SortId);
      setReverseSort(false);
    }
  };

  const navigate = useNavigate();

  const cardNavigate = (id) => {
    navigate('/data/' + id);
  };

  const user = {
    username: "NoooN",
    fullName: "Горский Иван Артёмович",
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


  const filters = [
    { id: 1, title: "Все" },
    { id: 2, title: "Ваши" },
    { id: 3, title: "Создать" }
  ]

  const sorts = [
    { id: 1, title: "Дата создания"},
    { id: 2, title: "Популярность"},
    { id: 3, title: "Оценки"},
  ]

  const data = [
    { id: 101, title: "Данные о ценах на дома в регионе", creator: "HousingData Inc.", createdDate: "15-03-2023", rate: 4.9, added: 3201 },
    { id: 102, title: "Характеристики автомобилей и их стоимость", creator: "AutoStats", createdDate: "10-07-2022", rate: 4.7, added: 2845 },
    { id: 103, title: "Статистика посещаемости спортивных мероприятий", creator: "Sports Analytics", createdDate: "20-11-2023", rate: 4.3, added: 1582 },
    { id: 104, title: "Анализ здоровья детей и подростков", creator: "Health for Kids", createdDate: "05-09-2021", rate: 4.8, added: 4723 },
    { id: 105, title: "Данные о погоде и климате за 10 лет", creator: "ClimateTrack", createdDate: "12-01-2020", rate: 4.6, added: 3528 },
    { id: 106, title: "Геоданные с точками интереса", creator: "GeoData Solutions", createdDate: "03-06-2023", rate: 4.4, added: 2146 },
  ];
  

  const getFilteredData = () => {
    const now = new Date();

    // Первый фильтр: по кнопке
    let filtered = activeButton === 2 
      ? data.filter((datum) => user.saved.data.includes(datum.id) || user.created.data.includes(datum.id)) 
      : data;

    if (activeSort) {
      filtered.sort((a, b) => {
        let comparison = 0;
        if (activeSort === 1) {
          const dateA = new Date(a.createdDate.split("-").reverse().join("-"));
          const dateB = new Date(b.createdDate.split("-").reverse().join("-"));
          comparison = dateA - dateB;
        } else if (activeSort === 2) {
          comparison = b.added - a.added;
        } else if (activeSort === 3) {
          comparison = b.rate - a.rate;
        }
        return reverseSort ? -comparison : comparison;
      });
    }
  
    return filtered;
  };

  const filteredData = getFilteredData();

  return (
    <div className="max-w-[1110px] mx-auto">
      <div className="bg-lightwhiteturquoise p-6 rounded-3xl mb-6">
        <h1 className="text-dark text-4xl">Данные</h1>
      </div>
      <div className="flex justify-between gap-3 flex-wrap px-1 mb-4">
        <div className="flex flex-row gap-4">
          {filters.map((filter) => (  
            <button
              onClick={() => handleButtonClick(filter.id)}
              className={`h-[38px] py-0 font-medium border-2 w-full rounded-full
                ${activeButton === filter.id
                  ? 'border-none font-medium bg-turquoise text-white hover:bg-lightturquoise active:bg-darkturquoise' 
                  : 'bg-white border-turquoise text-turquoise hover:text-lightturquoise hover:border-lightturquoise active:text-darkturquoise active:border-darkturquoise'}`}
            >
              {filter.title}
            </button>
          ))}
        </div>
        {activeButton != 3 ? (
          <form className="max-w-[540px] min-w-[510px] w-full bg-none">
            <div className="relative h-[38px]">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Search alt="Search" className="cursor-pointer" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full h-[38px] p-4 ps-11 text-base text-dark bg-white focus:outline-none focus:ring-0 placeholder-dark border-b-2 border-turquoise"
                placeholder="Поиск по соревнованиям..."
                required
              />
            </div>
          </form>
        ) : (
          <div></div>
        )}
      </div>
      {activeButton != 3 ? (
        <div className="text-lg text-dark">
          <div className="flex flex-row gap-4 mb-4">
            {sorts.map((sort) => (  
              <div className="flex flex-row items-end cursor-pointer">
                <div onClick={() => handleSortClick(sort.id)} className={`flex flex-row gap-0.5 hover:text-turquoise ${activeSort === sort.id ? 'text-darkturquoise' : 'text-dark'}`}>
                  <span>{sort.title}</span>
                  {activeSort === sort.id && reverseSort ? (
                    <UpArrow className="w-4" alt="Убывающая сортировка" />
                  ) : (
                    <DownArrow className="w-4" alt="Возрастающая сортировка" />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row flex-wrap gap-[30px]">
            {filteredData.map((datum) => (
                <Card
                  key={datum.id}
                  title={datum.title}
                  organizer={datum.creator}
                  participants={datum.added}
                  rate={datum.rate}
                  image={CardImage}
                  startDate={datum.createdDate}
                  onClick={() => cardNavigate(datum.id)}
                  onButtonClick={() => console.log('button clicked')}
                  added={user.saved.data.includes(datum.id) || user.created.data.includes(datum.id)}
                />
            ))}
          </div>
        </div>
      ) : (
        <Form type='competitions' />
      )}
      
    </div>
  );
}

export default Data;
