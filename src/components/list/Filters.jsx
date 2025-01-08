import React from 'react';

const Filters = ({ filters, additionalFilter, activeButton, filterType, handleButtonClick, setFilterType }) => {
  return (
    <div className="flex flex-row gap-4">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => handleButtonClick(filter.id)}
          className={`h-[38px] py-0 font-medium border-2 w-full rounded-full
            ${activeButton === filter.id
              ? 'border-none font-medium bg-turquoise text-white hover:bg-lightturquoise active:bg-darkturquoise' 
              : 'bg-white border-turquoise text-turquoise hover:text-lightturquoise hover:border-lightturquoise active:text-darkturquoise active:border-darkturquoise'}`}
        >
          {filter.title}
        </button>
      ))}
      {additionalFilter.length !== 0 &&
        <div className='flex flex-col justify-around'>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="text-dark block px-0 w-40 bg-transparent border-0 border-b-2 border-turquoise appearance-none peer"
          >
            {additionalFilter.map((option) => (
              <option key={option.value} value={option.value}>
                {option.title}
              </option>
            ))}
          </select>
        </div>
      }
    </div>
  );
};

export default Filters;
