import React from "react";
import UpArrow from "/src/assets/icons/UpArrow.svg";
import DownArrow from "/src/assets/icons/DownArrow.svg";

const SortButtons = ({ sorts, activeSort, reverseSort, handleSortClick }) => {
  return (
    <div className="flex flex-row gap-4 mb-4">
      {sorts.map((sort) => (
        <div
          className="flex flex-row items-end cursor-pointer"
          key={sort.id}
        >
          <div
            onClick={() => handleSortClick(sort.id)}
            className={`flex flex-row gap-0.5 hover:text-turquoise ${
              activeSort === sort.id ? "text-darkturquoise" : "text-dark"
            }`}
          >
            <span>{sort.title}</span>
            {activeSort === sort.id && reverseSort ? (
              <UpArrow className="w-4" alt="Убывающая сортировка" />
            ) : (
              <DownArrow className="w-4" alt="Возрастающая сортировка" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SortButtons;
