import React, { useState } from "react";


const MainInfo = ({user, details, addButtonText, removeButtonText, addSolutionButtonClick}) => {
  const [isAdded, setIsAdded] = useState(
    user.saved.competitions.includes(details.id) || user.created.competitions.includes(details.id)
  );

  const removeButtonClick = () => {
    setIsAdded(false);
  };

  const addButtonClick = () => {
    setIsAdded(true);
  };

  return (
    <div className="text-dark mb-6">
      <h1 className="text-4xl mb-3">{details.title}</h1>
      <div className="flex flex-row overflow-hidden flex-nowrap gap-2 mb-2">
        {details.tags.map((tag) => (
          <div key={tag} className="bg-lightwhiteturquoise rounded-full py-1 px-2">
            <span>#{tag}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between items-end">
        {details.startDate ? (
          <span>{details.startDate.replaceAll("-", ".")} - {details.endDate.replaceAll("-", ".")}</span>
        ) : (
          <span>{details.createdDate.replaceAll("-", ".")}</span>
        )}
        <div className="flex flex-row gap-2">
          {isAdded ? (
            <button
              onClick={removeButtonClick}
              className="h-[38px] py-0 bg-transparent font-medium border-2 border-turquoise text-turquoise hover:text-lightturquoise hover:border-lightturquoise active:text-darkturquoise active:border-darkturquoise w-max rounded-full"
            >
              {removeButtonText}
            </button>
          ) : (
            <button
              onClick={addButtonClick}
              className="h-[38px] py-0 border-none font-medium bg-turquoise text-white hover:bg-lightturquoise active:bg-darkturquoise rounded-full"
            >
              {addButtonText}
            </button>
          )}
          {isAdded && addSolutionButtonClick ? (
            <button
              onClick={addSolutionButtonClick}
              className="w-max h-[38px] py-0 border-none font-medium bg-turquoise text-white hover:bg-lightturquoise active:bg-darkturquoise rounded-full"
            >
              Отправить решение
            </button>
          ) : null}
        </div>
      </div>
    </div>    
  );
};

export default MainInfo;
