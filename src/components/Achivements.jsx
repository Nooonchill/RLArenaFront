import React, { useState, useRef, useEffect } from "react";
import LeftArrow from '/src/assets/icons/LeftArrow.svg'
import RightArrow from '/src/assets/icons/RightArrow.svg'
import CardImage from '/src/assets/imgs/CompetiotionTemplate.png'


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
  );
}

export default Achivements;
