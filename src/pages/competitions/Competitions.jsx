import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CardImage from '/src/assets/imgs/CompetiotionTemplate.png'
import Card from '/src/components/Card.jsx'
import Form from '/src/components/Form.jsx'
import ListHead from "/src/components/list/ListHead";
import Filters from "/src/components/list/Filters";
import ListSearch from "/src/components/list/ListSearch";
import Sorts from "/src/components/list/Sorts"
import { getFiltered } from "/src/utils/filters";

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

  const additionalFilter = [
    {value: "Все", title: "Все"},
    {value: "Открытые", title: "Открытые"},
    {value: "Скоро начнутся", title: "Скоро начнутся"},
    {value: "Завершенные", title: "Завершенные"},
  ]

  const sorts = [
    { id: 1, title: "Дата создания"},
    { id: 2, title: "Популярность"},
    { id: 3, title: "Оценки"},
  ]
  
  const filteredCompetitions = getFiltered({
    items: competitions,
    savedItems: user.saved.competitions,
    createdItems: user.created.competitions,
    activeButton,
    filterType,
    activeSort,
    reverseSort,
    dateFields: { start: "startDate", end: "endDate" },
  });

  return (
    <div className="max-w-[1110px] mx-auto">
      <ListHead 
        title="Соревнования"
      />
      <div className="flex justify-between gap-3 flex-wrap px-1 mb-4">
        <Filters
          filters={filters}
          additionalFilter={additionalFilter}
          activeButton={activeButton}
          filterType={filterType}
          handleButtonClick={handleButtonClick}
          setFilterType={setFilterType}
        />
        {activeButton !== 3 && <ListSearch />}
      </div>
      {activeButton != 3 ? (
        <div className="text-lg text-dark">
          <Sorts
            sorts={sorts}
            activeSort={activeSort}
            reverseSort={reverseSort}
            handleSortClick={handleSortClick}
          />
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
