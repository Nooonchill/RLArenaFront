import React, { useState } from "react";
import User from '/src/assets/icons/User.svg'
import Winner from '/src/assets/icons/Winner.svg'
import Second from '/src/assets/icons/Second.svg'
import Third from '/src/assets/icons/Third.svg'
import Search from '/src/assets/icons/Search.svg'
import DownArrow from '/src/assets/icons/DownArrow.svg'
import UpArrow from '/src/assets/icons/UpArrow.svg'
import Star from '/src/assets/icons/Star.svg'
import CompetTemplate from '/src/assets/imgs/CompetiotionTemplate.png'

function Competitions() {
  const [activeButton, setActiveButton] = useState(1);
  const [activeSort, setActiveSort] = useState(null);
  const [reverseSort, setReverseSort] = useState(false);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const handleSortClick = (SortId) => {
    if (activeSort === SortId) {
      setReverseSort(!reverseSort);
    } else {
      setActiveSort(SortId);
      setReverseSort(false); // или true, если нужно другое поведение
    }
  };

  const username = "NoooN"

  const competitions = [
    { id: 134, title: "Прогнозирование цен на дома", organizer: "УрФУ", rate: 4.8, participants: 243 },
    { id: 12, title: "Оценка стоимости автомобиля по его характеристикам", organizer: "James123", rate: 2.1, participants: 2492 },
    { id: 35, title: "Обладатель Кубка Гагарина 2025 года", organizer: "Team Work", rate: 4.2, participants: 1222 },
    { id: 1, title: "Студенты, проходящие стажировки в IT-компаниях", organizer: "NoooN", rate: 5.0, participants: 12 },
    { id: 35, title: "Обладатель Кубка Гагарина 2025 года", organizer: "Team Work", rate: 4.2, participants: 1222 },
    { id: 1, title: "Студенты, проходящие стажировки в IT-компаниях", organizer: "NoooN", rate: 5.0, participants: 12 },
    { id: 35, title: "Обладатель Кубка Гагарина 2025 года", organizer: "Team Work", rate: 4.2, participants: 1222 },
    { id: 1, title: "Студенты, проходящие стажировки в IT-компаниях", organizer: "NoooN", rate: 5.0, participants: 12 },
    { id: 35, title: "Обладатель Кубка Гагарина 2025 года", organizer: "Team Work", rate: 4.2, participants: 1222 },
    { id: 1, title: "Студенты, проходящие стажировки в IT-компаниях", organizer: "NoooN", rate: 5.0, participants: 12 },
  ];

  const filteredCompetitions =
    activeButton === 2
      ? competitions.filter((comp) => comp.organizer === username)
      : competitions;

  return (
    <div className="max-w-[1110px] mx-auto">
      <div className="bg-lightwhiteturquoise p-6 rounded-3xl mb-6">
        <h1 className="text-dark text-4xl mb-4">Соревнования</h1>
      </div>
      <div className="flex justify-between gap-3 flex-wrap px-1 mb-4">
        <div className="flex flex-row gap-4">
          <button
            onClick={() => handleButtonClick(1)}
            className={`h-[38px] py-0 font-medium border-2 w-full rounded-full
              ${activeButton === 1 
                ? 'border-none font-medium bg-turquoise text-white hover:bg-lightturquoise active:bg-darkturquoise' 
                : 'bg-white border-turquoise text-turquoise hover:text-lightturquoise hover:border-lightturquoise active:text-darkturquoise active:border-darkturquoise'}`}
          >
            Все
          </button>
          <button
            onClick={() => handleButtonClick(2)}
            className={`h-[38px] py-0 font-medium border-2 w-full rounded-full
              ${activeButton === 2 
                ? 'border-none font-medium bg-turquoise text-white hover:bg-lightturquoise active:bg-darkturquoise' 
                : 'bg-white border-turquoise text-turquoise hover:text-lightturquoise hover:border-lightturquoise active:text-darkturquoise active:border-darkturquoise'}`}
          >
            Мои
          </button>
          <button
            onClick={() => handleButtonClick(3)}
            className={`h-[38px] py-0 font-medium border-2 w-full rounded-full
              ${activeButton === 3 
                ? 'border-none font-medium bg-turquoise text-white hover:bg-lightturquoise active:bg-darkturquoise' 
                : 'bg-white border-turquoise text-turquoise hover:text-lightturquoise hover:border-lightturquoise active:text-darkturquoise active:border-darkturquoise'}`}
          >
            Создать
          </button>
        </div>
        <form className="max-w-[540px] min-w-[510px] w-full bg-none">
          <div className="relative h-[38px]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <img src={Search} alt="Search" className="cursor-pointer" />
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
      </div>
      {activeButton != 3 ? (
        <div>
          <div className="flex flex-row text-dark px-1 gap-4 mb-7  text-lg">
            <div className="flex flex-row items-end cursor-pointer">
              <div onClick={() => handleSortClick(1)} className={`flex flex-row gap-0.5 ${activeSort === 1 ? 'text-darkturquoise' : 'text-dark'}`}>
                <span>Поплуярность</span>
                {activeSort === 1 && reverseSort ? (
                  <img src={UpArrow} className="w-4" alt="Убывающая сортировка" />
                ) : (
                  <img src={DownArrow} className="w-4" alt="Возрастающая сортировка" />
                )}
              </div>
            </div>
            <div className="flex flex-row items-end cursor-pointer">
              <div onClick={() => handleSortClick(2)} className={`flex flex-row gap-0.5 ${activeSort === 2 ? 'text-darkturquoise' : 'text-dark hover:text-turquoise'}`}>
                <span>Оценки</span>
                {activeSort === 2 && reverseSort ? (
                  <img src={UpArrow} className="w-4" alt="Убывающая сортировка" />
                ) : (
                  <img src={DownArrow} className="w-4" alt="Возрастающая сортировка" />
                )}
              </div>
            </div>
            <div className="flex flex-row items-end cursor-pointer">
              <div onClick={() => handleSortClick(3)} className={`flex flex-row gap-0.5 ${activeSort === 3 ? 'text-darkturquoise' : 'text-dark'}`}>
                <span>Дата создания</span>
                {activeSort === 3 && reverseSort ? (
                  <img src={UpArrow} className="w-4" alt="Убывающая сортировка" />
                ) : (
                  <img src={DownArrow} className="w-4" alt="Возрастающая сортировка" />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-[30px]">
            {filteredCompetitions.map((item) => (
              <div className="min-w-[136px] max-w-[255px] w-full bg-gray-50 hover:bg-lightwhiteturquoise cursor-pointer text-dark rounded-xl">
                <img src={CompetTemplate} className="w-[255px]" alt="" />
                <div className="flex flex-col p-2 gap-y-2">
                  <p className="line-clamp-2 text-xl mb-2">{item.title}</p>
                  <span className="">{item.organizer}</span>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-1">
                      <img src={User} className="w-5" alt="" />
                      <span className="">{item.participants}</span>
                    </div>
                    <div className="flex flex-row gap-1">
                      <img src={Star} className="w-5" alt="" />
                      <span>{item.rate}</span>
                    </div>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>

        
      
    
      ) : (
        <div></div>
      )}
      
    </div>
  );
}

export default Competitions;
