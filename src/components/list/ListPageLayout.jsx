import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Card from './Card.jsx';
import Form from '../Form.jsx';
import ListHead from "./ListHead.jsx";
import Filters from "./Filters.jsx";
import ListSearch from "./ListSearch.jsx";
import Sorts from "./Sorts.jsx";
import { getFiltered } from "../../utils/Filters.js";

export default function ListPageLayout({
  title, items, user, savedItems, createdItems, dateField, endDate, createFormType, buttonText, additionalFilters, successMessage
}) {
  const [activeButton, setActiveButton] = useState(1);
  const [activeSort, setActiveSort] = useState(1);
  const [reverseSort, setReverseSort] = useState(false);
  const [filterType, setFilterType] = useState("Все");
  const [searchTerm, setSearchTerm] = useState(""); // Состояние для поиска

  const navigate = useNavigate();

  const handleButtonClick = (buttonId) => setActiveButton(buttonId);
  const handleSortClick = (sortId) => {
    setActiveSort(sortId === activeSort ? activeSort : sortId);
    setReverseSort(sortId === activeSort ? !reverseSort : false);
  };
  const cardNavigate = (id) => navigate(`${id}`);

  const handleSearchChange = (e) => setSearchTerm(e.target.value.toLowerCase()); // Обновление текста поиска

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
    savedItems,
    createdItems,
    activeButton,
    filterType,
    activeSort,
    reverseSort,
    dateFields: { start: dateField },
  }).filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) // Преобразование для регистронезависимого поиска
  );

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
        {activeButton !== 3 && (
          <ListSearch searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        )}
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
                id={item.id}
                title={item.title}
                organizer={item.creator || item.organizer}
                participants={item.participants || item.added}
                rate={item.rate}
                imageSrc={item.image}
                startDate={item[dateField]}
                endDate={item[endDate]}
                onClick={() => cardNavigate(item.id)}
                added={savedItems.includes(item.id) || createdItems.includes(item.id)}
                userId={user.id}
              />
            ))}
          </div>
        </div>
      ) : (
        <Form user={user} type={createFormType} isCretionForm={true} buttonText={buttonText} successMessage={successMessage} />
      )}
    </div>
  );
}
