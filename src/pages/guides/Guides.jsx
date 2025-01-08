import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Search from '/src/assets/icons/Search.svg'
import DownArrow from '/src/assets/icons/DownArrow.svg'
import UpArrow from '/src/assets/icons/UpArrow.svg'
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
import { guides, guidesDetails } from "/src/mockdata/guideData.js";

function Guides() {
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
    navigate('/guides/' + id);
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

  const filteredGuides = getFiltered({
    items: guides,
    savedItems: user.saved.guides,
    createdItems: user.created.guides,
    activeButton,
    activeSort,
    reverseSort,
    dateFields: { start: "createdDate" }, // У гайдов только createdDate
  });


  return (
    <div className="max-w-[1110px] mx-auto">
      <ListHead 
        title="Гайды"
      />
      <div className="flex justify-between gap-3 flex-wrap px-1 mb-4">
        <Filters
          filters={filters}
          additionalFilter={[]}
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
            {filteredGuides.map((guide) => (
                <Card
                  key={guide.id}
                  title={guide.title}
                  organizer={guide.creator}
                  participants={guide.added}
                  rate={guide.rate}
                  image={CardImage}
                  startDate={guide.createdDate}
                  onClick={() => cardNavigate(guide.id)}
                  onButtonClick={() => console.log('button clicked')}
                  added={user.saved.guides.includes(guide.id) || user.created.guides.includes(guide.id)}
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

export default Guides;
