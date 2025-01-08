import React, { useState } from "react";


const MainInfo = ({user, details, addButtonText, removeButtonText}) => {
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
          <div className="bg-lightwhiteturquoise rounded-full py-1 px-2">
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
        {isAdded ? (
          <button
            onClick={removeButtonClick}
            className="h-[38px] py-0 bg-white font-medium border-2 border-turquoise text-turquoise hover:text-lightturquoise hover:border-lightturquoise active:text-darkturquoise active:border-darkturquoise w-max rounded-full"
          >
            {removeButtonText}
          </button>
        ) : (
          <button
            onClick={addButtonClick}
            className="flex flex-row items-center gap-1 w-max h-[38px] py-0 border-none font-medium bg-turquoise text-white hover:bg-lightturquoise active:bg-darkturquoise rounded-full"
          >
            {addButtonText}
          </button>
        )}
      </div>
    </div>    
  );
};

export default MainInfo;
