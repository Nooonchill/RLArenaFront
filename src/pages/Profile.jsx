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


function App() {
  
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(true);
  const solved = 63;
  const total = 100;
  const dashValue = 75 * solved / total;
  const position = 236;
  const username = "NoooN"
  const university = "УрФУ"
  const reg_date = "26.12.2024"
  const place = "Екатеринбург, Россия"
  const bio = "Студент 3 курса ИРИТ-РТФ. Недавно начал заниматься машинным обучением"

  const timedelta = "PT5H30M";
  // Парсим строку, используя регулярное выражение
  const match = timedelta.match(/PT(\d+H)?(\d+M)?/);

  let hours = 0;
  let minutes = 0;

  // Если найдены часы
  if (match[1]) {
    hours = parseInt(match[1].replace("H", ""), 10);
  }

  // Если найдены минуты
  if (match[2]) {
    minutes = parseInt(match[2].replace("M", ""), 10);
  }

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
    <div className="h-screen max-w-[1110px] mx-auto text-dark">
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
            <div className="min-w-[112px] w-[112px] min-h-[154px] h-[154px] bg-gray-50 p-3 rounded-xl">
              <img src={Logo} alt="Logo" className="w-40 mb-3" />
              <p className="text-sm text-center text-ellipsis overflow-hidden">Начало пути</p>
            </div>
            <div className="min-w-[112px] w-[112px] min-h-[154px] h-[154px] bg-gray-50 p-3 rounded-xl">
              <img src={Logo} alt="Logo" className="w-40 mb-3" />
              <p className="text-sm text-center text-ellipsis overflow-hidden">Начало пути</p>
            </div>
            <div className="min-w-[112px] w-[112px] min-h-[154px] h-[154px] bg-gray-50 p-3 rounded-xl">
              <img src={Logo} alt="Logo" className="w-40 mb-3" />
              <p className="text-sm text-center text-ellipsis overflow-hidden">Начало пути</p>
            </div>
            <div className="min-w-[112px] w-[112px] min-h-[154px] h-[154px] bg-gray-50 p-3 rounded-xl">
              <img src={Logo} alt="Logo" className="w-40 mb-3" />
              <p className="text-sm text-center text-ellipsis overflow-hidden">Начало пути</p>
            </div>
            <div className="min-w-[112px] w-[112px] min-h-[154px] h-[154px] bg-gray-50 p-3 rounded-xl">
              <img src={Logo} alt="Logo" className="w-40 mb-3" />
              <p className="text-sm text-center text-ellipsis overflow-hidden">Начало пути</p>
            </div>
            <div className="min-w-[112px] w-[112px] min-h-[154px] h-[154px] bg-gray-50 p-3 rounded-xl">
              <img src={Logo} alt="Logo" className="w-40 mb-3" />
              <p className="text-sm text-center text-ellipsis overflow-hidden">Начало пути</p>
            </div>
            <div className="min-w-[112px] w-[112px] min-h-[154px] h-[154px] bg-gray-50 p-3 rounded-xl">
              <img src={Logo} alt="Logo" className="w-40 mb-3" />
              <p className="text-sm text-center text-ellipsis overflow-hidden">Начало пути</p>
            </div>
            <div className="min-w-[112px] w-[112px] min-h-[154px] h-[154px] bg-gray-50 p-3 rounded-xl">
              <img src={Logo} alt="Logo" className="w-40 mb-3" />
              <p className="text-sm text-center text-ellipsis overflow-hidden">Начало пути</p>
            </div>
            <div className="min-w-[112px] w-[112px] min-h-[154px] h-[154px] bg-gray-50 p-3 rounded-xl">
              <img src={Logo} alt="Logo" className="w-40 mb-3" />
              <p className="text-sm text-center text-ellipsis overflow-hidden">Начало пути</p>
            </div>
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
              <tr className="even:bg-white odd:bg-gray-50">
                <th scope="row" className="pl-6 py-4 font-medium text-dark whitespace-nowrap ">
                  134
                </th>
                <td className="px-6 py-4">
                  Прогнозирование цен на дома
                </td>
                <td className="px-6 py-4">
                  21
                </td>
              </tr>
              <tr className="even:bg-white odd:bg-gray-50">
                <th scope="row" className="pl-6 py-4 font-medium text-dark whitespace-nowrap ">
                  12
                </th>
                <td className="px-6 py-4">
                  Оценка стоимости автомобиля по его характеристикам
                </td>
                <td className="px-6 py-4">
                  24
                </td>
              </tr>
              <tr className="even:bg-white odd:bg-gray-50">
                <th scope="row" className="pl-6 py-4 font-medium text-dark whitespace-nowrap ">
                  35
                </th>
                <td className="px-6 py-4">
                  Обладатель Кубка Гагарина 2025 года
                </td>
                <td className="px-6 py-4">
                  535
                </td>
              </tr>
              <tr className="even:bg-white odd:bg-gray-50">
                <th scope="row" className="pl-6 py-4 font-medium text-dark whitespace-nowrap">
                  1
                </th>
                <td className="px-6 py-4">
                  Студенты, проходящие стажировки в IT-компаниях
                </td>
                <td className="px-6 py-4">
                  654
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
