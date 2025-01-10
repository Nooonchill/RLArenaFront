import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card.jsx';
import Form from '../components/Form.jsx';
import ListHead from "../components/list/ListHead";
import Filters from "../components/list/Filters";
import ListSearch from "../components/list/ListSearch";
import Sorts from "../components/list/Sorts";
import { getFiltered } from "../utils/Filters.js";

export default function ListPage({
  title, items, user, savedItems, createdItems, cardImage, dateField, endDate, createFormType, buttonText, additionalFilters
}) {
  const [activeButton, setActiveButton] = useState(1);
  const [activeSort, setActiveSort] = useState(1);
  const [reverseSort, setReverseSort] = useState(false);
  const [filterType, setFilterType] = useState("Все");

  const navigate = useNavigate();

  const handleButtonClick = (buttonId) => setActiveButton(buttonId);

  const handleSortClick = (sortId) => {
    setActiveSort(sortId === activeSort ? activeSort : sortId);
    setReverseSort(sortId === activeSort ? !reverseSort : false);
  };

  const cardNavigate = (id) => navigate(`${id}`);

  const filters = [
    { id: 1, title: "Все" },
    { id: 2, title: "Ваши" },
    ...(user.role === "Teacher" || user.role === "Admin" ? [{ id: 3, title: "Создать" }] : []),
  ];

  const sorts = [
    { id: 1, title: "Дата создания" },
    { id: 2, title: "Популярность" },
    { id: 3, title: "Оценки" },
  ];

  const filteredItems = getFiltered({
    items,
    savedItems: savedItems,
    createdItems: createdItems,
    activeButton,
    filterType,
    activeSort,
    reverseSort,
    dateFields: { start: dateField },
  });

  return (
    <div className="max-w-[1110px] mx-auto pb-8">
      <ListHead title={title} />
      <div className="flex justify-between gap-3 flex-wrap-reverse px-1 mb-2">
        <Filters
          filters={filters}
          additionalFilters={additionalFilters}
          activeButton={activeButton}
          filterType={filterType}
          handleButtonClick={handleButtonClick}
          setFilterType={setFilterType}
        />
        {activeButton !== 3 && <ListSearch />}
      </div>
      {activeButton !== 3 ? (
        <div className="text-lg text-dark">
          <Sorts
            sorts={sorts}
            activeSort={activeSort}
            reverseSort={reverseSort}
            handleSortClick={handleSortClick}
          />
          <div className="flex flex-row flex-wrap gap-[30px]">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                organizer={item.creator || item.organizer}
                participants={item.participants || item.added}
                rate={item.rate}
                image={cardImage}
                startDate={item[dateField]}
                endDate={item[endDate]}
                onClick={() => cardNavigate(item.id)}
                onButtonClick={() => console.log('button clicked')}
                added={savedItems.includes(item.id) || createdItems.includes(item.id)}
              />
            ))}
          </div>
        </div>
      ) : (
        <Form user={user} type={createFormType} isCretionForm={true} buttonText={buttonText} />
      )}
    </div>
  );
}
