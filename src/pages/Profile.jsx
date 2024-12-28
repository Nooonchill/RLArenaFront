import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Home from '/src/assets/icons/Home.svg';
import Brain from '/src/assets/icons/Brain.svg';
import Guides from '/src/assets/icons/Guides.svg';
import Data from '/src/assets/icons/Data.svg';
import Settings from '/src/assets/icons/Settings.svg';
import Search from '/src/assets/icons/Search.svg';
import Logo from '/src/assets/icons/Atom.svg';
import User from '/src/assets/icons/User.svg'
import Winner from '/src/assets/icons/Winner.svg'
import Second from '/src/assets/icons/Second.svg'
import Third from '/src/assets/icons/Third.svg'
import LeftArrow from '/src/assets/icons/LeftArrow.svg'
import RightArrow from '/src/assets/icons/RightArrow.svg'
import Layout from "/src/components/Layout.jsx";


function Profile() {
  
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(true);
  const username = "NoooN"
  const university = "УрФУ"
  const reg_date = "26.12.2024"
  const place = "Екатеринбург, Россия"
  const bio = "Студент 3 курса ИРИТ-РТФ. Недавно начал заниматься машинным обучением"

  const achivements = [
    { id: 1, title: "Начало пути" },
    { id: 2, title: "Стать сильнее" },
    { id: 3, title: "Гранит науки" },
    { id: 4, title: "Первая победа" },
    { id: 5, title: "Начало пути" },
    { id: 6, title: "Начало пути" },
    { id: 7, title: "Начало пути" },
    { id: 8, title: "Начало пути" },
    { id: 9, title: "Начало пути" },
  ];

  const results = [
    { id: 134, title: "Прогнозирование цен на дома", position: 21 },
    { id: 12, title: "Оценка стоимости автомобиля по его характеристикам", position: 24 },
    { id: 35, title: "Обладатель Кубка Гагарина 2025 года", position: 535 },
    { id: 1, title: "Студенты, проходящие стажировки в IT-компаниях", position: 654 },
  ];


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
          <img src={Logo} alt="Logo" className="w-40" />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <h2 className="text-2xl mb-4">{username}</h2>
              <span className="mb-3">{university}</span>
              <span>{place}</span>
            </div>
            <span>Дата регистрации: {reg_date}</span>
          </div>
        </div>
        <span className="max-w-[600px]">{bio}</span>
      </div>
      
      <div className="bg-none text-dark mt-5 px-2 py-6 rounded-3xl">
        <h2 className="text-2xl ml-[60px]">Достижения</h2>
        <div className="flex flex-row gap-7 mt-4">
          <img src={LeftArrow} alt="Left Arrow" onClick={scrollLeft} className="cursor-pointer" />
          <div className="flex flex-row overflow-hidden gap-7 flex-grow" ref={scrollRef}>
            {achivements.map((item) => (
              <div
                key={item.id}
                className="min-w-[112px] w-[112px] min-h-[154px] h-[154px] bg-gray-50 p-3 rounded-xl"
              >
                <img src={Logo} alt="Logo" className="w-40 mb-3" />
                <p className="text-sm text-center text-ellipsis overflow-hidden">
                  {item.title}
                </p>
              </div>
            ))}
            
          </div>
          <img src={RightArrow} alt="Right Arrow" onClick={scrollRight} className="cursor-pointer" />
        </div>
      </div>
      <div className="bg-none  mt-5  rounded-3xl">
        <h2 className="text-2xl ml-[60px] mb-4">Результаты участия в соренованиях</h2>
        <div className="relative overflow-x-auto sm:rounded-lg flex flex-grow">
          <table className="w-full text-sm text-left rtl:text-right text-dark">
            <thead className="text-xs text-dark uppercase bg-lightwhiteturquoise">
              <tr>
                <th scope="col" className="pl-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Название
                </th>
                <th scope="col" className="px-6 py-3">
                  Позиция
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map((item) => (
                <tr className="even:bg-white odd:bg-gray-50">
                  <th scope="row" className="pl-6 py-4 font-medium text-dark whitespace-nowrap ">
                    {item.id}
                  </th>
                  <td className="px-6 py-4">
                    {item.title}
                  </td>
                  <td className="px-6 py-4">
                    {item.position}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
