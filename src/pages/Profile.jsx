import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import LeftArrow from '/src/assets/icons/LeftArrow.svg'
import RightArrow from '/src/assets/icons/RightArrow.svg'
import CardImage from '/src/assets/imgs/CompetiotionTemplate.png'
import ResultsTable from "/src/components/elements/ResultsTable.jsx";

// Моковые данные
import { user, logged } from '/src/mockdata/userData.js';


function Profile() {
  
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(logged);

  useEffect(() => {
    if (!isLogged) {
      navigate('/'); 
    }
  }, [isLogged, navigate]);

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -140,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 140,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="h-full max-w-[1110px] mx-auto text-dark">
      <div className="flex flex-row justify-between">
        <div className="flex gap-7">
          <img src={CardImage} alt="Logo" className="w-40 h-40" />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <h2 className="text-2xl mb-4">{user.username}</h2>
              <span className="mb-3">{user.organization}</span>
              <span>{user.location}</span>
            </div>
            <span>Дата регистрации: {user.registration_date}</span>
          </div>
        </div>
        <span className="max-w-[600px]">{user.biography}</span>
      </div>
      
      <div className="bg-none text-dark mt-5 px-2 py-6 rounded-3xl">
        <h2 className="text-2xl ml-[60px]">Достижения</h2>
        <div className="flex flex-row gap-7 mt-4 items-center">
          <LeftArrow alt="Left Arrow" onClick={scrollLeft} className="cursor-pointer" />
          <div className="flex flex-row overflow-hidden gap-7 flex-grow" ref={scrollRef}>
            {user.achivements.map((item) => (
              <div
                key={item.id}
                className="min-w-[112px] w-[112px] min-h-[154px] h-[154px] bg-gray-50 p-3 rounded-xl"
              >
                <img src={CardImage} alt="Logo" className="w-[90px] h-[90px] mb-3" />
                <p className="text-sm text-center text-ellipsis overflow-hidden">
                  {item.title}
                </p>
              </div>
            ))}
            
          </div>
          <RightArrow alt="Right Arrow" onClick={scrollRight} className="cursor-pointer" />
        </div>
      </div>
      <div className="bg-none  mt-5  rounded-3xl">
        <h2 className="text-2xl ml-[60px] mb-4">Результаты участия в соренованиях</h2>
        <div className="relative overflow-x-auto sm:rounded-lg m-auto">
          <ResultsTable
            results={user.results}
            rows={20}
            columns={[
              { key: "id", label: "#" },
              { key: "title", label: "Название" },
              { key: "place", label: "Позиция" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
