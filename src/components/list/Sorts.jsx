import React from "react";
import UpArrow from "../../assets/icons/UpArrow.svg";
import DownArrow from "../../assets/icons/DownArrow.svg";

const SortButtons = ({ sorts, activeSort, reverseSort, handleSortClick }) => {
  return (
    <div className="flex flex-row gap-4 mb-4">
      {sorts.map((sort) => (
        <div
          className="flex flex-row cursor-pointer"
          key={sort.id}
        >
          <div
            onClick={() => handleSortClick(sort.id)}
            className={`relative flex flex-row gap-0.5 hover:text-turquoise items-center  ${
              activeSort === sort.id ? "text-darkturquoise" : "text-dark"
            }`}
          >
            <span className="mr-[18px]">{sort.title}</span>
            <UpArrow 
              className={`w-4 right-0 absolute transition-opacity duration-200 ${activeSort === sort.id & reverseSort ? 'opacity-100' : 'opacity-0'}`} 
              alt="Убывающая сортировка" 
            />
            <DownArrow 
              className={`w-4 right-0 absolute transition-opacity duration-200 ${activeSort === sort.id & reverseSort ? 'opacity-0' : 'opacity-100'}`} 
              alt="Возрастающая сортировка" 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SortButtons;
