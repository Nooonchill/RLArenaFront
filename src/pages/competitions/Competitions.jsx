import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Search from '/src/assets/icons/Search.svg'
import DownArrow from '/src/assets/icons/DownArrow.svg'
import UpArrow from '/src/assets/icons/UpArrow.svg'
import CardImage from '/src/assets/imgs/CompetiotionTemplate.png'
import Card from '/src/components/Card.jsx'
import Form from '/src/components/Form.jsx'

// Моковые данные
import { user, logged } from '/src/mockdata/userData.js';
import { competitions, competitionsDetails } from "/src/mockdata/competitionData.js";


function Competitions() {
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
    navigate('/competitions/' + id);
  };

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

  const getFilteredCompetitions = () => {
    const now = new Date();

    // Первый фильтр: по кнопке
    let filtered = activeButton === 2 
      ? competitions.filter((comp) => user.saved.competitions.includes(comp.id) || user.created.competitions.includes(comp.id)) 
      : competitions;

    // Второй фильтр: по времени
    if (filterType === "Открытые") {
      filtered = filtered.filter((comp) => {
        const start = new Date(comp.startDate.split("-").reverse().join("-"));
        const end = new Date(comp.endDate.split("-").reverse().join("-"));
        return start <= now && end >= now;
      });
    } else if (filterType === "Скоро начнутся") {
      filtered = filtered.filter((comp) => {
        const start = new Date(comp.startDate.split("-").reverse().join("-"));
        return start > now;
      });
    } else if (filterType === "Завершенные") {
      filtered = filtered.filter((comp) => {
        const end = new Date(comp.endDate.split("-").reverse().join("-"));
        return end < now;
      });
    }

    if (activeSort) {
      filtered.sort((a, b) => {
        let comparison = 0;
        if (activeSort === 1) {
          const dateA = new Date(a.startDate.split("-").reverse().join("-"));
          const dateB = new Date(b.startDate.split("-").reverse().join("-"));
          comparison = dateA - dateB;
        } else if (activeSort === 2) {
          comparison = b.participants - a.participants;
        } else if (activeSort === 3) {
          comparison = b.rate - a.rate;
        }
        return reverseSort ? -comparison : comparison;
      });
    }
  
    return filtered;
  };

  const filteredCompetitions = getFilteredCompetitions();

  return (
    <div className="max-w-[1110px] mx-auto">
      <div className="bg-lightwhiteturquoise p-6 rounded-3xl mb-6">
        <h1 className="text-dark text-4xl">Соревнования</h1>
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
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="block px-0 w-40 bg-transparent border-0 border-b-2 border-turquoise appearance-none peer"
            >
              <option value="Все">Все</option>
              <option value="Открытые">Открытые</option>
              <option value="Скоро начнутся">Скоро начнутся</option>
              <option value="Завершенные">Завершенные</option>
            </select>
          </div>
          <div className="flex flex-row flex-wrap gap-[30px]">
            {filteredCompetitions.map((competition) => (
                <Card
                  key={competition.id}
                  title={competition.title}
                  organizer={competition.organizer}
                  participants={competition.participants}
                  rate={competition.rate}
                  image={CardImage}
                  startDate={competition.startDate}
                  endDate={competition.endDate}
                  onClick={() => cardNavigate(competition.id)}
                  onButtonClick={() => console.log('button clicked')}
                  added={user.saved.competitions.includes(competition.id) || user.created.competitions.includes(competition.id)}
                />
            ))}
          </div>
        </div>
      ) : (
        <Form type='competitions' isCretionForm={true} buttonText="Создать" />
      )}
      
    </div>
  );
}

export default Competitions;
