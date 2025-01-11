import React, { useState, useRef, useEffect } from "react";
import LeftArrow from '../../assets/icons/LeftArrow.svg'
import RightArrow from '../../assets/icons/RightArrow.svg'
import CardImage from '../../assets/imgs/CompetiotionTemplate.png'


const Achivements = ({ user }) => {

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
    <div className="bg-none mt-5 px-2 py-6 rounded-3xl">
      <h2 className="text-2xl ml-[60px]">Достижения</h2>
      <div className="flex flex-row gap-7 mt-4 items-center">
        <LeftArrow alt="Листать влево" onClick={scrollLeft} className="cursor-pointer" />
        <div className="flex flex-row overflow-hidden gap-5 flex-grow" ref={scrollRef}>
          {user.achivements.map((item) => (
            <div
              key={item.id}
              className="min-w-[112px] w-[112px] min-h-[154px] h-[154x] bg-gray-50 dark:bg-dark p-3 rounded-xl"
            >
              <img src={CardImage} alt="Иконка достижения" className="w-[90px] h-[90px] mb-1" />
              <p className="text-sm text-center text-ellipsis overflow-hidden">
                {item.title}
              </p>
            </div>
          ))}

        </div>
        <RightArrow alt="Листать вправо" onClick={scrollRight} className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Achivements;
