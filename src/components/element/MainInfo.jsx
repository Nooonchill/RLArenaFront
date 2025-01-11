import React, { useState } from "react";
import { saveElement } from "../../utils/SandData.js";


const MainInfo = ({ user, details, addButtonText, removeButtonText, addSolutionButtonClick }) => {
  const [isAdded, setIsAdded] = useState(
    user?.saved?.[location.pathname.match(/\/([^\/]+)/)[1]]?.includes(details.id) || 
    user?.created?.[location.pathname.match(/\/([^\/]+)/)[1]]?.includes(details.id)
  );
  

  const handleButtonClick = () => {
    setIsAdded(!isAdded);
    saveElement({
      userId: user.id,
      add: !isAdded,
      type: location.pathname.match(/\/([^\/]+)/)[1],
      id: details.id,
    });
  };

  return (
    <div className="text-dark dark:text-lightwhiteturquoise mb-6">
      <h1 className="text-4xl mb-3">{details.title}</h1>
      <div className="flex flex-row overflow-hidden flex-wrap gap-2 mb-2">
        {details.tags.map((tag) => (
          <div key={tag} className="bg-lightwhiteturquoise dark:bg-dark rounded-full py-1 px-2 cursor-pointer">
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
          {user?.saved && (
            <>
              {isAdded ? (
                <button
                  onClick={handleButtonClick}
                  className="h-[38px] py-0 bg-transparent font-medium border-2 border-turquoise dark:border-lightwhiteturquoise text-turquoise dark:text-lightwhiteturquoise hover:text-lightturquoise hover:border-lightturquoise active:text-darkturquoise active:border-darkturquoise w-max rounded-full"
                >
                  {removeButtonText}
                </button>
              ) : (
                <button
                  onClick={handleButtonClick}
                  className="h-[38px] py-0 border-none font-medium bg-turquoise dark:bg-lightwhiteturquoise text-white dark:hover:bg-gray-300 dark:text-dark hover:bg-lightturquoise active:bg-darkturquoise rounded-full"
                >
                  {addButtonText}
                </button>
              )}
              {isAdded && addSolutionButtonClick && (
                <button
                  onClick={addSolutionButtonClick}
                  className="h-[38px] py-0 border-none font-medium bg-turquoise dark:bg-lightwhiteturquoise text-white dark:hover:bg-gray-300 dark:text-dark hover:bg-lightturquoise active:bg-darkturquoise rounded-full"
                >
                  Отправить решение
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
